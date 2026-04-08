#!/usr/bin/env python3
"""Content Calendar API — shared backend for Keystone team.

Stores posts in SQLite, serves via HTTP. Cloudflare tunnel for remote access.
"""
import json
import logging
import sqlite3
from datetime import datetime
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path

logger = logging.getLogger(__name__)
DB_PATH = Path(__file__).parent / "calendar.db"
PORT = 3004

def init_db():
    db = sqlite3.connect(str(DB_PATH))
    db.execute("""CREATE TABLE IF NOT EXISTS posts (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        title TEXT NOT NULL,
        date TEXT,
        pillar TEXT NOT NULL DEFAULT 'before_after',
        status TEXT NOT NULL DEFAULT 'idea',
        format TEXT DEFAULT 'post',
        platforms TEXT DEFAULT '[]',
        caption TEXT DEFAULT '',
        notes TEXT DEFAULT '',
        user_id TEXT DEFAULT 'team'
    )""")
    db.commit()
    
    # Seed if empty
    count = db.execute("SELECT COUNT(*) FROM posts").fetchone()[0]
    if count == 0:
        seed_posts(db)
    db.close()

def seed_posts(db):
    """MWF content plan for April 2026."""
    import uuid
    now = datetime.now().isoformat()
    posts = [
        ("Warm Minimalism Trend", "2026-04-06", "trend", "drafted", "reel", '["instagram","tiktok","pinterest"]',
         "Warm minimalism is taking over Tennessee kitchens in 2026 🔮\n\n→ Rift-cut white oak with minimal hardware\n→ Integrated appliance panels\n→ Honey onyx, not cold marble\n\nFree consultation → link in bio\n\n#KitchenTok #QuietLuxury #KitchenTrends #CustomCabinetry #NashvilleDesign",
         "REEL: 15-30 sec. Trending details with text overlay. Trending audio."),
        ("Crook Kitchen Before/After", "2026-04-08", "before_after", "drafted", "carousel", '["instagram","facebook","pinterest"]',
         "This Maryville kitchen: dated → stunning 🤯\n\nBEFORE: Dark oak from 1998, laminate counters\nAFTER: Custom shakers in Alabaster, quartzite, LEDs\n\n8 weeks. Your kitchen next → 865.681.4039\n\n#KitchenRemodel #BeforeAndAfter #CustomCabinetry #MaryvilleTN #KeystoneKitchens",
         "CAROUSEL: Slide 1=before, 2-4=after. Pin to IG profile."),
        ("Walnut Island Build", "2026-04-10", "process", "idea", "reel", '["instagram","tiktok"]',
         "Building a waterfall walnut island 🔨\n\nHand-cut. Hand-rubbed oil. Built to last decades.\n\n#BuildTok #SatisfyingWork #CustomCabinetry #Woodworking #MadeInTennessee",
         "REEL: Film sanding + oil. 30-45 sec. Raw audio. Show grain close."),
        ("Cabinet Depth Tip", "2026-04-13", "design_tips", "idea", "carousel", '["instagram","facebook","tiktok"]',
         "Kitchen tip from our shop floor 👇\n\n24\" deep bases eat 2 feet of your kitchen.\n\n✅ 21\" bases for galley kitchens\n✅ Soft-close everything\n✅ Invest in boxes, not just doors\n\nSave this 📌\n\n#KitchenDesign #CustomCabinetry #DesignInspo #NashvilleHome #KeystoneKitchens",
         "CAROUSEL: Each tip = own slide. Brand colors. Schedule 9am."),
        ("Harrison Testimonial", "2026-04-15", "client_story", "idea", "post", '["instagram","facebook","google_business"]',
         "\"We never thought our kitchen could look like this.\" — Madison H.\n\nWhite oak shakers. Brass hardware. 10-foot island. 8 weeks.\n\nYour turn → 865.681.4039\n\n#CustomCabinetry #HappyClients #KnoxvilleDesign #KeystoneKitchens",
         "POST: Best finished photo. Video testimonial from Madison."),
        ("Spring Consultation Push", "2026-04-17", "offer", "idea", "story", '["instagram","facebook"]',
         "Planning a summer reno? 🏠\n\nFree consultation:\n→ In-home measurement\n→ Style direction\n→ 3D preview\n→ Transparent pricing\n\n8 spots/month. May filling up.\n\nDM \"KITCHEN\" or 865.681.4039\n\n#KitchenRemodel #FreeConsultation #KeystoneKitchens",
         "STORY: Poll sticker. Swipe-up to booking. Boost $30 FB."),
        ("Painted vs Stained", "2026-04-20", "design_tips", "idea", "reel", '["instagram","tiktok","pinterest"]',
         "Painted vs stained — which for YOUR kitchen? 🎨\n\nPAINTED: Brighter, hides grain, shows wear\nSTAINED: Natural beauty, hides scratches, warmer\n\nWe build both. Free consultation → link in bio\n\n#DesignTok #KitchenDesign #CustomCabinets #NashvilleDesign",
         "REEL: Split screen comparison. End with comment prompt."),
        ("Dovetail Close-Up", "2026-04-22", "process", "idea", "reel", '["instagram","tiktok"]',
         "$50 drawer boxes vs ours 👇\n\nSolid maple dovetails. Soft-close undermount. Finished interior.\n\nThe stuff that matters is what you don't see.\n\n#BuildTok #SatisfyingWork #CabinetMaker #CustomCabinetry #ShopLife",
         "REEL: Close-up dovetails. Side-by-side cheap vs ours. Under 20 sec."),
        ("Waisman Kitchen Reveal", "2026-04-24", "before_after", "idea", "carousel", '["instagram","facebook","pinterest"]',
         "Waisman family: full kitchen, pantry, built-ins ✨\n\nAlder cabinets. Alamo stain. Euro inset.\n\nCustom built in our Maryville shop.\n\nSwipe →\n\n#KitchenRemodel #CustomCabinetry #BeforeAndAfter #HomeGlowUp #KeystoneKitchens",
         "CAROUSEL: Hero shot, before, detail shots of alder + euro inset."),
        ("White Oak Trend", "2026-04-27", "trend", "idea", "reel", '["instagram","tiktok","pinterest"]',
         "White oak = #1 luxury cabinet wood right now.\n\n→ Beautiful grain\n→ Takes stain beautifully\n→ Harder than red oak\n→ Rift-cut = the clean look\n\n🔥\n\n#DesignTok #QuietLuxury #WhiteOak #CustomCabinets #KitchenTrends",
         "REEL: Grain close-ups, reveal finished kitchen. Text overlay."),
        ("Meet Brandon", "2026-04-29", "client_story", "idea", "reel", '["instagram","tiktok","facebook"]',
         "The guy behind Keystone Kitchens 👋\n\nTennessee families deserve better than big box.\n\nEvery kitchen has my name on it.\n\nFree consultation → link in bio\n\n#SmallBusiness #CabinetMaker #MadeInTennessee #KitchenTok #KeystoneKitchens",
         "REEL: Brandon to camera in shop. 30 sec. No script. Authentic."),
        ("May Booking Push", "2026-05-01", "offer", "idea", "story", '["instagram","facebook","google_business"]',
         "May calendar OPEN 📅\n\n8 projects/month. 3 claimed.\n\nDM \"MAY\" or 865.681.4039\n\n#KitchenRemodel #FreeConsultation #Tennessee #KeystoneKitchens",
         "STORY: Countdown sticker. Google Business too."),
    ]
    for title, date, pillar, status, fmt, platforms, caption, notes in posts:
        db.execute("INSERT INTO posts (id, created_at, title, date, pillar, status, format, platforms, caption, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (str(uuid.uuid4()), now, title, date, pillar, status, fmt, platforms, caption, notes))
    db.commit()
    logger.info(f"Seeded {len(posts)} MWF posts")


class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, data, status=200):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self._cors()
        self.end_headers()
        self.wfile.write(json.dumps(data, default=str).encode())

    def _body(self):
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length)) if length > 0 else {}

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path == "/posts":
            db = sqlite3.connect(str(DB_PATH))
            db.row_factory = sqlite3.Row
            rows = db.execute("SELECT * FROM posts ORDER BY date ASC").fetchall()
            posts = []
            for r in rows:
                post = dict(r)
                post["platforms"] = json.loads(post["platforms"]) if post["platforms"] else []
                posts.append(post)
            db.close()
            self._json(posts)
        elif self.path == "/health":
            self._json({"ok": True})
        else:
            self._json({"error": "not found"}, 404)

    def do_POST(self):
        body = self._body()
        if self.path == "/posts":
            import uuid
            db = sqlite3.connect(str(DB_PATH))
            post_id = str(uuid.uuid4())
            now = datetime.now().isoformat()
            db.execute("INSERT INTO posts (id, created_at, title, date, pillar, status, format, platforms, caption, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                       (post_id, now, body.get("title",""), body.get("date",""), body.get("pillar","before_after"),
                        body.get("status","idea"), body.get("format","post"),
                        json.dumps(body.get("platforms",[])), body.get("caption",""), body.get("notes","")))
            db.commit()
            db.close()
            self._json({"id": post_id, "ok": True})
        else:
            self._json({"error": "not found"}, 404)

    def do_PUT(self):
        if self.path.startswith("/posts/"):
            post_id = self.path.split("/posts/")[1]
            body = self._body()
            db = sqlite3.connect(str(DB_PATH))
            updates = []
            params = []
            for field in ["title", "date", "pillar", "status", "format", "caption", "notes"]:
                if field in body:
                    updates.append(f"{field} = ?")
                    params.append(body[field])
            if "platforms" in body:
                updates.append("platforms = ?")
                params.append(json.dumps(body["platforms"]))
            if updates:
                params.append(post_id)
                db.execute(f"UPDATE posts SET {', '.join(updates)} WHERE id = ?", params)
                db.commit()
            db.close()
            self._json({"ok": True})
        else:
            self._json({"error": "not found"}, 404)

    def do_DELETE(self):
        if self.path.startswith("/posts/"):
            post_id = self.path.split("/posts/")[1]
            db = sqlite3.connect(str(DB_PATH))
            db.execute("DELETE FROM posts WHERE id = ?", (post_id,))
            db.commit()
            db.close()
            self._json({"ok": True})
        else:
            self._json({"error": "not found"}, 404)

    def log_message(self, format, *args):
        pass  # Quiet logs


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    init_db()
    server = HTTPServer(("0.0.0.0", PORT), Handler)
    logger.info(f"Content Calendar API on port {PORT}")
    server.serve_forever()
