#!/usr/bin/env python3
"""Auto-generate a month of MWF content for Keystone Kitchens.

Uses Claude to generate captions and Nano Banana for post images.
"""
from __future__ import annotations

import json
import logging
import os
import sqlite3
import subprocess
import uuid
import urllib.request
from datetime import date, datetime, timedelta
from pathlib import Path

logger = logging.getLogger(__name__)

DB_PATH = Path(__file__).parent / "calendar.db"
NANO_BANANA = Path.home() / ".openclaw/workspace/skills/nano-banana-pro/scripts/generate_image.py"
IMAGE_DIR = Path(__file__).parent / "images"
IMAGE_DIR.mkdir(exist_ok=True)

# Content rotation — cycles through pillars on MWF
PILLAR_ROTATION = [
    ("trend", "reel"),
    ("before_after", "carousel"),
    ("process", "reel"),
    ("design_tips", "carousel"),
    ("client_story", "post"),
    ("offer", "story"),
    ("design_tips", "reel"),
    ("process", "reel"),
    ("before_after", "carousel"),
    ("trend", "reel"),
    ("client_story", "reel"),
    ("offer", "story"),
]

# Platform mapping by pillar
PLATFORMS = {
    "trend": ["instagram", "tiktok", "pinterest"],
    "before_after": ["instagram", "facebook", "pinterest"],
    "process": ["instagram", "tiktok"],
    "design_tips": ["instagram", "facebook", "tiktok"],
    "client_story": ["instagram", "facebook", "google_business"],
    "offer": ["instagram", "facebook"],
}

CAPTION_PROMPT = """You generate social media captions for Keystone Kitchens, a custom cabinet and millwork factory in Maryville, Tennessee. Owner: Brandon Mulcahy. Phone: 865.681.4039.

RULES:
- Short, punchy, scroll-stopping. Under 150 words.
- First line is the HOOK — must stop the scroll.
- Use line breaks and emojis strategically.
- End with a CTA driving to consultation booking (DM "KITCHEN" or call 865.681.4039).
- Include 4-5 relevant hashtags at the end.
- Always include #KeystoneKitchens.
- Tone: confident craftsman, not corporate. Real, not polished.

Generate a caption for this post:
- Pillar: {pillar}
- Format: {format}
- Topic: {topic}
- Week number: {week} of the month

Also provide:
- A production note for the intern (how to film/photograph this)
- A suggested title (short, for the calendar)

Respond ONLY with JSON:
{{"title": "...", "caption": "...", "notes": "..."}}"""


def get_api_key() -> str:
    try:
        backup = Path("/Users/keystoneemployees/.openclaw/anthropic-api-key-backup.txt").read_text().strip()
        if backup.startswith("sk-ant-api"):
            return backup
    except Exception:
        pass
    try:
        oc = json.loads(Path("/Users/keystoneemployees/.openclaw/openclaw.json").read_text())
        return oc.get("models", {}).get("providers", {}).get("anthropic", {}).get("apiKey", "")
    except Exception:
        pass
    return ""


def generate_caption(pillar: str, format: str, topic: str, week: int) -> dict:
    """Generate a caption using Claude."""
    api_key = get_api_key()
    prompt = CAPTION_PROMPT.format(pillar=pillar, format=format, topic=topic, week=week)

    payload = json.dumps({
        "model": "claude-sonnet-4-20250514",
        "max_tokens": 1000,
        "temperature": 0.8,
        "messages": [{"role": "user", "content": prompt}],
    }).encode()

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=payload,
        headers={
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
    )
    resp = urllib.request.urlopen(req, timeout=30)
    data = json.loads(resp.read())
    text = "".join(b["text"] for b in data.get("content", []) if b.get("type") == "text")
    clean = text.replace("```json", "").replace("```", "").strip()

    # Find JSON in response
    start = clean.find("{")
    end = clean.rfind("}")
    if start >= 0 and end > start:
        return json.loads(clean[start:end + 1])
    return json.loads(clean)


def generate_image(prompt: str, filename: str) -> str | None:
    """Generate an image using Nano Banana Pro (Gemini)."""
    if not NANO_BANANA.exists():
        logger.warning("Nano Banana not available")
        return None

    output_path = IMAGE_DIR / filename
    try:
        result = subprocess.run(
            ["uv", "run", str(NANO_BANANA), "--prompt", prompt,
             "--filename", str(output_path), "--resolution", "1K"],
            capture_output=True, text=True, timeout=60,
            cwd=str(IMAGE_DIR),
        )
        if result.returncode == 0 and output_path.exists():
            return str(output_path)
    except Exception as e:
        logger.warning(f"Image generation failed: {e}")
    return None


def get_mwf_dates(year: int, month: int) -> list[date]:
    """Get all Monday/Wednesday/Friday dates in a month."""
    dates = []
    d = date(year, month, 1)
    while d.month == month:
        if d.weekday() in (0, 2, 4):  # Mon=0, Wed=2, Fri=4
            dates.append(d)
        d += timedelta(days=1)
    return dates


# Topics by pillar — rotated through
TOPICS = {
    "trend": [
        "warm minimalism in kitchens",
        "rift-cut white oak cabinets trend",
        "integrated appliance panels",
        "mixed metal hardware trend",
    ],
    "before_after": [
        "dramatic kitchen transformation",
        "outdated kitchen to custom modern",
        "builder-grade to custom upgrade",
        "full gut renovation reveal",
    ],
    "process": [
        "dovetail joint craftsmanship",
        "hand-finishing a cabinet door",
        "building a waterfall island",
        "custom spray finishing process",
    ],
    "design_tips": [
        "kitchen cabinet storage mistakes",
        "painted vs stained cabinets",
        "choosing the right hardware",
        "kitchen island sizing guide",
    ],
    "client_story": [
        "client reaction to finished kitchen",
        "founder story — why we build",
        "team member spotlight",
        "client testimonial feature",
    ],
    "offer": [
        "free design consultation push",
        "monthly booking availability",
        "seasonal renovation planning",
        "limited spots available urgency",
    ],
}


def generate_month(year: int, month: int) -> list[dict]:
    """Generate a full month of MWF content."""
    dates = get_mwf_dates(year, month)
    db = sqlite3.connect(str(DB_PATH))
    now = datetime.now().isoformat()

    generated = []
    for i, post_date in enumerate(dates):
        rotation_idx = i % len(PILLAR_ROTATION)
        pillar, fmt = PILLAR_ROTATION[rotation_idx]
        platforms = PLATFORMS.get(pillar, ["instagram"])
        topic_list = TOPICS.get(pillar, ["general content"])
        topic = topic_list[i % len(topic_list)]
        week = (post_date.day - 1) // 7 + 1

        logger.info(f"Generating {post_date} ({post_date.strftime('%a')}) — {pillar}/{fmt}: {topic}")

        try:
            result = generate_caption(pillar, fmt, topic, week)
            title = result.get("title", topic.title())
            caption = result.get("caption", "")
            notes = result.get("notes", "")
        except Exception as e:
            logger.warning(f"Caption generation failed: {e}")
            title = topic.title()
            caption = f"[Caption to be written for: {topic}]"
            notes = f"[Auto-generation failed — write manually]"

        post_id = str(uuid.uuid4())
        db.execute(
            "INSERT OR IGNORE INTO posts (id, created_at, title, date, pillar, status, format, platforms, caption, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (post_id, now, title, post_date.isoformat(), pillar, "idea", fmt,
             json.dumps(platforms), caption, notes)
        )
        generated.append({
            "id": post_id,
            "date": post_date.isoformat(),
            "title": title,
            "pillar": pillar,
            "format": fmt,
        })

        # Small delay between Claude calls
        import time
        time.sleep(0.5)

    db.commit()
    db.close()
    logger.info(f"Generated {len(generated)} posts for {year}-{month:02d}")
    return generated


if __name__ == "__main__":
    import sys
    logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

    if len(sys.argv) >= 3:
        year = int(sys.argv[1])
        month = int(sys.argv[2])
    else:
        # Default: next month
        today = date.today()
        next_month = today.replace(day=1) + timedelta(days=32)
        year = next_month.year
        month = next_month.month

    print(f"Generating content for {year}-{month:02d}...")
    posts = generate_month(year, month)
    print(f"\nGenerated {len(posts)} posts:")
    for p in posts:
        print(f"  {p['date']} | {p['format']:8s} | {p['pillar']:14s} | {p['title']}")
