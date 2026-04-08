/**
 * VIRAL CONTENT FORMULAS — Keystone Kitchens
 * 12 ready-to-use formulas (MWF x 4 weeks) for Instagram Reels, TikTok, and Pinterest.
 *
 * Each formula includes:
 *   - Hook (first 1-3 seconds)
 *   - Structure (timestamped breakdown)
 *   - Caption formula (hook / body / CTA / hashtags)
 *   - Psychology (why it works)
 *   - Ready-to-use caption for Emma
 *
 * Research basis: Viral patterns from @bfreno, @nestingwithgrace, @chrislovesjulia,
 * @the_buildbergs, @the.woodworkers, and 2025-2026 algorithm best practices.
 *
 * Updated: April 2026
 */

import type { PillarKey, PlatformKey, FormatKey } from '@/types';

export interface ViralFormula {
  id: string;
  week: number;
  day: 'monday' | 'wednesday' | 'friday';
  title: string;
  pillar: PillarKey;
  platforms: PlatformKey[];
  format: FormatKey;
  /** The exact visual/verbal hook — what the viewer sees/hears in the first 1-3 seconds */
  hook: string;
  /** Timestamped structure of the video or post */
  structure: string;
  /** Why this formula works — the psychology */
  psychology: string;
  /** Ready-to-post caption with hook, body, CTA, and hashtags */
  readyCaption: string;
  /** Production notes for Emma */
  emmaNotes: string;
  /** Recommended audio / music direction */
  audioNotes: string;
}

// ---------------------------------------------------------------------------
// THE 12 VIRAL FORMULAS
// ---------------------------------------------------------------------------

export const VIRAL_FORMULAS: ViralFormula[] = [

  // =========================================================================
  // WEEK 1
  // =========================================================================

  {
    // FORMULA 1 — BEFORE/AFTER REVEAL
    id: 'vf-01-before-after-reveal',
    week: 1,
    day: 'monday',
    title: 'Before/After Beat-Drop Reveal',
    pillar: 'before_after',
    platforms: ['instagram', 'tiktok', 'pinterest'],
    format: 'reel',

    hook:
      'TEXT ON SCREEN: "This kitchen hasn\'t been touched since 1997" — show the ugliest angle of the dated kitchen. Hold 2 seconds. Viewer thinks: "oh no, this is bad." That tension is the hook.',

    structure: `
0-2 sec: HOOK — Wide shot of dated kitchen. Text overlay: "This kitchen hasn't been touched since 1997." Raw, unflattering lighting.
2-5 sec: BEFORE MONTAGE — 3 quick cuts (0.8 sec each): close-up of laminate peeling, yellowed appliances, dark cabinets. Text: "The homeowners were done."
5-7 sec: PROCESS FLASH — 2-second hyperlapse of demo/install. Dust, tools, action.
7-8 sec: BEAT DROP + TRANSITION — Hard cut or swipe transition synced EXACTLY to the beat drop. Screen goes black for 0.3 sec.
8-15 sec: AFTER REVEAL — Slow pan of finished kitchen. Hold hero shot 3+ seconds so viewers can absorb. Text: "Custom shaker cabinets. Quartzite counters. 8 weeks."
15-17 sec: END CARD — Logo + "Free consultation — link in bio."
    `.trim(),

    psychology:
      'Before/after exploits the "contrast effect" — the brain evaluates the after relative to the before, making the transformation feel MORE dramatic than the after alone. The beat-drop transition triggers a micro-dopamine hit (pattern completion reward). Viewers rewatch to experience the hit again, which pushes watch-time above 100% and signals virality to the algorithm. DM shares ("you need to see this kitchen") are the #1 distribution signal on Instagram Reels in 2026.',

    readyCaption: `This Maryville kitchen hadn't been touched since 1997.

The homeowners called us and said "we're done."

8 weeks later:
- Custom shaker cabinets in Alabaster white
- Quartzite waterfall island
- Soft-close everything
- Under-cabinet LEDs

From dated to dream kitchen. That's the Keystone difference.

Want to see what we'd do with YOUR kitchen? Free design consultation — link in bio or call 865.681.4039.

Save this for your renovation inspo folder.

#KitchenRemodel #BeforeAndAfter #CustomCabinetry #KitchenTransformation #KeystoneKitchens #MaryvilleTN #KitchenTok #RenoReveal #HomeGlowUp`,

    emmaNotes:
      'FILM: Get the worst "before" angle (bad lighting, messy). For the after, use golden hour or ring light. Use CapCut or Instagram editor to sync the transition to the beat drop EXACTLY. Carousel version for Pinterest: Slide 1 = before, Slide 2 = after hero shot (2:3 ratio, 1000x1500px). Add text overlay to Pin image: "1997 Kitchen -> 2026 Dream Kitchen." Pin title: "Kitchen Remodel Before and After — Custom Cabinets Transformation." Pin description leads with keywords: "Kitchen remodel before and after with custom shaker cabinets, quartzite countertops, and modern design. See the full transformation from Keystone Kitchens in Maryville, Tennessee."',

    audioNotes:
      'Use a trending audio with a clear beat drop. Current options: "No Good Deed" by Cynthia Erivo (transformation trend), "Where Have You Been (Drinks On Me Remix)" by Rihanna, or any trending sound in the Reels audio library tagged "transformation." Check TikTok Creative Center for the freshest option the week you post.',
  },

  {
    // FORMULA 2 — "WAIT FOR IT" SATISFYING PROCESS
    id: 'vf-02-wait-for-it-process',
    week: 1,
    day: 'wednesday',
    title: '"Wait For It" Satisfying Build',
    pillar: 'process',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'OPEN ON: Extreme close-up of raw wood grain filling the entire frame. Text overlay: "Wait for it..." The visual is beautiful but incomplete — the viewer needs to see the payoff.',

    structure: `
0-2 sec: HOOK — Tight close-up of rough-sawn wood (walnut, white oak). Text: "Wait for it..." No music yet, just the sound of the shop.
2-8 sec: THE BUILD — Series of satisfying cuts: saw cutting through hardwood (ASMR audio), planing a board (shavings curling), sanding smooth, dry-fitting dovetails clicking into place. Each shot 1-1.5 sec. Raw shop audio.
8-10 sec: THE FINISH — Slow-motion of oil or lacquer being wiped onto bare wood. The grain POPS. This is the money shot. Music begins softly here.
10-14 sec: REVEAL — Pull back to show the completed piece (island, door panel, drawer bank) in the finished kitchen. Music swells.
14-16 sec: TEXT CARD — "Built by hand in Maryville, TN" + logo.
    `.trim(),

    psychology:
      'This exploits "completion desire" (Zeigarnik effect) — the brain cannot stop watching an unfinished process. The ASMR quality of woodworking sounds (sawing, planing, sanding) triggers autonomous sensory meridian response in ~40% of viewers, creating a physical pleasure response that drives rewatches and saves. TikTok\'s algorithm heavily weights watch-through rate; satisfying process videos consistently hit 90%+ completion.',

    readyCaption: `Raw American walnut -> your kitchen island.

Every cut. Every joint. Every finish coat — done by hand in our Maryville shop.

This is what "custom" actually means.

Follow for more from the shop floor.

#SatisfyingWork #BuildTok #Woodworking #CustomCabinetry #CabinetMaker #WalnutKitchen #MadeInTennessee #ShopLife #ASMR`,

    emmaNotes:
      'FILM: Use a macro lens or get the phone as close as possible. Steady shots — use a tripod. Capture SOUND: the saw, the plane, the sanding. Do NOT add music over the process portion; raw shop audio is what makes this viral. Only add subtle music for the final reveal. Keep it under 16 seconds for maximum completion rate. TikTok version: post with raw audio. Instagram Reel version: can add light trending audio underneath.',

    audioNotes:
      'RAW SHOP AUDIO for 80% of the video. If you add music, use it only for the last 4 seconds during the reveal. "Original audio" tagged Reels get 25% more reach than music-tagged Reels in the trades/craft niche.',
  },

  {
    // FORMULA 3 — "THINGS YOU DIDN'T KNOW" EDUCATIONAL
    id: 'vf-03-things-you-didnt-know',
    week: 1,
    day: 'friday',
    title: '"3 Things You Didn\'t Know" Education',
    pillar: 'design_tips',
    platforms: ['instagram', 'tiktok', 'pinterest'],
    format: 'reel',

    hook:
      'BRANDON TO CAMERA: "3 things about kitchen cabinets that nobody tells you" — hold up 3 fingers. Direct eye contact. Slightly confrontational energy. The viewer thinks: "what am I missing?"',

    structure: `
0-2 sec: HOOK — Brandon (or team member) to camera in the shop. Text: "3 things about kitchen cabinets nobody tells you." Hold up 3 fingers.
2-5 sec: THING 1 — Cut to B-roll of a cheap cabinet. Text overlay: "#1: Big-box cabinets use staples, not joints." Brandon VO: "See these staples? Give it 5 years."
5-9 sec: THING 2 — Cut to B-roll of cabinet interior. Text: "#2: If the inside is raw particleboard, moisture will destroy it." Brandon VO explains.
9-13 sec: THING 3 — Cut to Keystone dovetail drawer. Text: "#3: Real custom cabinets use solid wood dovetails and finished interiors." Brandon VO: "This is what lasts 30 years."
13-16 sec: CTA — Brandon back to camera: "Now you know. Free consultation — link in bio." Logo.
    `.trim(),

    psychology:
      'The "information gap" theory (Loewenstein, 1994): curiosity is triggered when there is a gap between what we know and what we want to know. "Things you didn\'t know" directly creates that gap. The number "3" is optimal — specific enough to feel valuable, short enough to not lose attention. This format positions Keystone as the authority, building trust before the viewer ever contacts you. Educational content drives the highest SAVE rate, which is the #1 algorithmic signal on Instagram in 2026.',

    readyCaption: `3 things about kitchen cabinets nobody tells you:

1. Big-box cabinets are held together with staples. Give them 5 years before they start pulling apart.

2. If the inside of your cabinet is raw particleboard, every water splash is silently destroying it.

3. Real custom cabinets use solid wood dovetail joints and finished interiors. Ours are built to last 30 years.

The stuff that matters is the stuff you can't see from the outside.

Save this before your next kitchen meeting.

Free consultation: link in bio or 865.681.4039

#KitchenDesign #CustomCabinetry #DesignTok #KitchenTok #CabinetQuality #HomeRenovation #KeystoneKitchens #NashvilleDesign`,

    emmaNotes:
      'FILM: Brandon talking to camera, natural shop background. No script — bullet points only so it feels authentic. Cut to B-roll of cheap cabinets (film a stock cabinet from Lowe\'s or use client "before" footage) vs Keystone dovetails. Pinterest version: Turn into a 2:3 infographic pin with the 3 tips as a checklist. Title: "3 Things to Check Before Buying Kitchen Cabinets." Description: "Most homeowners don\'t know what to look for inside kitchen cabinets. Custom cabinet maker shares 3 quality checks for dovetail joints, interior finishing, and construction methods."',

    audioNotes:
      'Brandon\'s voice is the audio. No music needed. Talking-head educational content performs best with voice-only. If reposting to Pinterest as a video pin, add captions/subtitles.',
  },

  // =========================================================================
  // WEEK 2
  // =========================================================================

  {
    // FORMULA 4 — "POV: YOU HIRED US" TRANSFORMATION
    id: 'vf-04-pov-hired-us',
    week: 2,
    day: 'monday',
    title: '"POV: You Hired Us" Transformation',
    pillar: 'before_after',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'TEXT ON SCREEN: "POV: you finally hired a custom cabinet maker" — Camera starts on viewer\'s perspective walking toward a demolished kitchen. The POV framing makes the viewer the protagonist of their own renovation story.',

    structure: `
0-2 sec: HOOK — POV walking toward gutted kitchen. Text: "POV: you finally hired a custom cabinet maker." Trending audio begins.
2-4 sec: FAST MONTAGE — POV watching: cabinets being delivered, team carrying pieces in, level being placed. Quick cuts, 0.5-0.8 sec each.
4-6 sec: INSTALLATION — POV watching doors being hung, drawer slides gliding in. Satisfying clicks and fits.
6-8 sec: TRANSITION — POV hands opening new cabinet doors. Camera pushes through into...
8-14 sec: FINISHED KITCHEN — POV walking through the completed kitchen, running hands along countertops, opening soft-close drawers. Slow, luxurious pacing. Music peaks.
14-16 sec: TEXT — "This could be your kitchen. Keystone Kitchens — link in bio."
    `.trim(),

    psychology:
      'POV content exploits "mental simulation" — the brain processes first-person visual experiences almost identically to real experiences. The viewer literally feels like they are getting a new kitchen, which triggers aspiration and desire. This is the same mechanism luxury brands use in advertising. The POV format also feels native to TikTok/Reels (not like an ad), which increases watch-through and share rate.',

    readyCaption: `POV: you finally stopped looking at Pinterest and called a custom cabinet maker.

Week 1: Demo day. Goodbye, 1990s oak.
Week 4: Your custom cabinets arrive from our shop.
Week 6: Soft-close drawers. Dovetail joints. Finished interiors.
Week 8: You walk into YOUR dream kitchen.

This is what hiring Keystone looks like.

Ready to start? Free design consultation — link in bio or DM us "KITCHEN."

#POV #KitchenTok #CustomCabinetry #KitchenRemodel #HomeGlowUp #KeystoneKitchens #TennesseeHomes #DreamKitchen`,

    emmaNotes:
      'FILM: All footage from the installer/team member perspective. Use a GoPro chest mount or just hold the phone at eye level. The key is FIRST PERSON throughout. Capture: walking into the space, watching installation happen, opening drawers/doors. The "hands running along countertop" shot is essential for aspiration. Film across multiple job sites if needed — the viewer won\'t notice different kitchens in quick cuts.',

    audioNotes:
      'Use a trending aspirational audio. The "running up that hill" style cinematic sounds work well. Check TikTok Creative Center the week you post. Audio should build gradually and peak during the finished kitchen reveal.',
  },

  {
    // FORMULA 5 — PRICE TRANSPARENCY
    id: 'vf-05-price-transparency',
    week: 2,
    day: 'wednesday',
    title: '"How Much Does a Custom Kitchen Actually Cost?"',
    pillar: 'design_tips',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'BRANDON TO CAMERA: "Everyone asks how much a custom kitchen costs. I\'m going to tell you." — Direct, no fluff. This breaks the industry taboo of hiding pricing, which immediately builds trust and stops the scroll.',

    structure: `
0-2 sec: HOOK — Brandon to camera, workshop behind him. Text: "How much does a custom kitchen ACTUALLY cost?" Direct eye contact.
2-5 sec: TIER 1 — Text overlay appears: "Entry custom: $15K-$25K." Brandon: "Painted maple, shaker style, standard sizes. Beautiful, solid, just not exotic."
5-8 sec: TIER 2 — Text: "Mid-range custom: $25K-$45K." Brandon: "Stained hardwood, specialty finishes, inset doors, soft-close everything."
8-11 sec: TIER 3 — Text: "Premium custom: $45K-$80K+." Brandon: "Rift-cut white oak, waterfall islands, integrated appliance panels, furniture-grade details."
11-14 sec: THE TRUTH — Brandon: "The real answer? It depends on YOUR kitchen. That's why we do free consultations — no pressure, real numbers."
14-16 sec: CTA — "DM 'PRICE' for a free estimate. Link in bio."
    `.trim(),

    psychology:
      'Price transparency content goes viral because it breaks a social norm — the construction industry is notorious for opacity. "Taboo-breaking" content triggers the "this feels illegal to know" response, which is the #1 driver of DM shares in 2025-2026. Additionally, 47% of homeowners aged 25-34 use TikTok for renovation research, and their #1 question is cost. This positions Keystone as the honest, trustworthy option versus competitors who dodge the question.',

    readyCaption: `"How much does a custom kitchen cost?"

I get this question every single day. So here it is — no gatekeeping.

Entry custom ($15K-$25K): Painted maple shakers, standard sizes, solid construction.

Mid-range ($25K-$45K): Stained hardwood, inset doors, soft-close everything, specialty finishes.

Premium ($45K-$80K+): Rift-cut white oak, waterfall islands, integrated appliance panels, furniture-grade everything.

The real answer? It depends on YOUR kitchen layout, your wood species, and your finish. That's why we offer free consultations with real numbers — not a bait-and-switch range.

DM us "PRICE" and we'll send you our pricing guide.

#KitchenCost #KitchenRemodel #CustomCabinets #HowMuch #TransparentPricing #KitchenTok #KeystoneKitchens #TennesseeHomes`,

    emmaNotes:
      'FILM: Brandon talking directly to camera. Workshop background gives credibility. Use text overlays for each price tier — viewers will screenshot these. Keep each tier to 3 seconds max. This WILL get comments and DMs — be ready to respond within 1 hour of posting. Pin a comment that says "DM us PRICE for our free pricing guide." This video will also get haters saying "too expensive" — that is GOOD. Controversy = comments = algorithm boost. Do NOT delete negative comments; reply professionally.',

    audioNotes:
      'Brandon\'s voice only. No music. Authenticity is the entire point of this format. Subtitles/captions are mandatory — 80% of Reels are watched on mute.',
  },

  {
    // FORMULA 6 — TREND REACTION / HOT TAKE
    id: 'vf-06-trend-reaction',
    week: 2,
    day: 'friday',
    title: '"This Kitchen Trend Needs to Stop"',
    pillar: 'trend',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'BRANDON TO CAMERA, slight head shake: "This kitchen trend needs to stop and I\'m going to say it." — Confrontational energy triggers the "I need to hear this" response. Viewers stay to find out if they agree or disagree.',

    structure: `
0-2 sec: HOOK — Brandon, direct to camera: "This kitchen trend needs to stop." Slight head shake. Text overlay repeats the statement.
2-5 sec: THE TREND — Show photo/video of the trend (e.g., all-white kitchens, open shelving, ultra-thin counters). Text: "I see this everywhere and it's a problem."
5-9 sec: THE WHY — Brandon explains: "Open shelving looks great on Pinterest. In real life? Grease on your dishes, dust on everything, and you have to style it every week." Show real examples.
9-12 sec: THE ALTERNATIVE — "Here's what I'd do instead:" Show Keystone's solution (e.g., glass-front uppers, closed cabinets with interior lighting). B-roll of the better option.
12-15 sec: SOFTENER — "Look, do what makes you happy. But if you want a kitchen that works as good as it looks, call me."
15-17 sec: CTA — "Free consultation — link in bio." Logo.
    `.trim(),

    psychology:
      'Hot takes and opinion content exploit "tribal identity" — viewers immediately sort into agree/disagree camps and feel compelled to comment. Comments are the second-highest algorithm signal after DM shares. The slight confrontation activates the amygdala, increasing emotional engagement and memory formation. The softener at the end ("do what makes you happy") prevents alienation while maintaining the viral controversy. This is the format @bfreno and @the_buildbergs use to reach millions.',

    readyCaption: `Unpopular opinion from a cabinet maker:

Open shelving in kitchens needs to stop.

I know it looks beautiful on Pinterest. But here's what nobody shows you:
- Grease film on every plate within a month
- Dust on everything
- You have to "style" your dishes like it's a photoshoot
- Less actual storage

What I recommend instead: glass-front upper cabinets with interior lighting. Same visual openness. None of the maintenance nightmare.

Or if you love the look, do ONE section of open shelving next to the stove — not your entire kitchen.

Agree or disagree? Tell me in the comments.

#KitchenTrends #UnpopularOpinion #KitchenDesign #DesignTok #CustomCabinets #KitchenTok #KeystoneKitchens #OpenShelving`,

    emmaNotes:
      'FILM: Brandon, slightly animated. This should feel like a real opinion, not a script. Show Pinterest screenshots of the trend (fair use for commentary). Then show the Keystone alternative. The COMMENTS are the goal — reply to every comment within the first hour. Pin a comment with an opposing view to spark more debate. You can respond to the best comments with a follow-up video (comment-reply video format). This is your most likely video to go viral — hot takes in niche communities spread fast.',

    audioNotes:
      'Brandon\'s voice only. Raw, authentic. The slight frustration/passion in his voice is what makes it feel real. No background music.',
  },

  // =========================================================================
  // WEEK 3
  // =========================================================================

  {
    // FORMULA 7 — "DAY IN THE LIFE" SHOP CONTENT
    id: 'vf-07-day-in-the-life',
    week: 3,
    day: 'monday',
    title: '"Day in the Life" at the Shop',
    pillar: 'process',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'SCREEN TEXT: "5:47 AM — Day in the life of a custom cabinet maker" — Dark early morning shot of the shop exterior or coffee being poured. The timestamp and the early hour signal dedication and draw viewers into the narrative.',

    structure: `
0-2 sec: HOOK — Dark exterior shot or coffee pour. Text: "5:47 AM — Day in the life of a custom cabinet maker." Alarm clock sound or morning ambiance.
2-4 sec: SHOP OPEN — Lights flicking on. Machines starting up. Text: "First cut of the day."
4-6 sec: MORNING WORK — Cutting, measuring, assembling. Quick cuts. Text overlay: what's being built ("Custom island for a family in Knoxville").
6-8 sec: DETAIL MOMENT — One satisfying close-up (dovetail fitting, finish being applied, door hanging). Slow-mo.
8-10 sec: MIDDAY — Lunch moment, team interaction, checking plans/drawings. Shows the human side.
10-13 sec: AFTERNOON — Loading finished cabinets onto the truck. Text: "These are headed to their new home tomorrow."
13-15 sec: END — Shop lights off. Text: "Another day, another kitchen. Keystone Kitchens — Maryville, TN."
    `.trim(),

    psychology:
      '"Day in the life" content works because of narrative transportation theory — viewers get absorbed into someone else\'s daily experience, which builds parasocial relationship and trust. The early morning timestamp signals work ethic and dedication (ethos). Showing the full arc from raw material to loaded truck gives viewers the "complete journey" satisfaction. This format humanizes the brand and makes price premiums feel justified ("these people work incredibly hard").',

    readyCaption: `5:47 AM. Shop lights on. Coffee poured. First cut of the day.

Today we're building a custom white oak island for a family in Knoxville. Every joint cut by hand. Every panel sanded to 220 grit. Every finish coat checked twice.

By 4 PM, these cabinets will be loaded and headed to their new home.

This is what we do every day at Keystone.

Follow for more from the shop floor.

#DayInTheLife #CabinetMaker #ShopLife #CustomCabinetry #Woodworking #BuildTok #MadeInTennessee #SmallBusiness #KeystoneKitchens`,

    emmaNotes:
      'FILM: This is a batch-film day. Set the phone up on a tripod at different stations throughout ONE day. Capture: arrival (dark outside), lights on, first cut, a detail shot, lunch, loading truck, lights off. The narrative arc matters — it should feel like a complete day. Use timestamps as text overlays. This is low-effort, high-reward content. Film it once, and you have content for multiple posts (cut different versions for IG vs TikTok).',

    audioNotes:
      'Two options: (1) Raw shop audio throughout — saws, sanders, conversation — with a gentle trending audio underneath at low volume. (2) Voiceover from Brandon narrating the day over the footage. Option 1 performs better on TikTok, Option 2 on Instagram.',
  },

  {
    // FORMULA 8 — CLIENT REACTION
    id: 'vf-08-client-reaction',
    week: 3,
    day: 'wednesday',
    title: 'Client Reaction Reveal',
    pillar: 'client_story',
    platforms: ['instagram', 'tiktok', 'facebook'],
    format: 'reel',

    hook:
      'TEXT ON SCREEN: "We surprised the homeowner with their finished kitchen today" — Cut to the homeowner with eyes closed or blindfolded, being led into the room. The anticipation is the hook.',

    structure: `
0-2 sec: HOOK — Text: "We surprised the homeowner with their finished kitchen today." Show the client with eyes closed, standing just outside the kitchen. Music: quiet, building.
2-4 sec: THE LEAD-IN — Team member guides client forward. Camera shows client's face. Anticipation builds. Maybe the client giggles or says something nervous.
4-6 sec: THE REVEAL — Client opens eyes. Camera captures the GENUINE reaction. Gasp, tears, hand over mouth, "oh my god." This is the money shot.
6-10 sec: THE WALK-THROUGH — Client exploring: touching cabinets, opening drawers, looking at details. Genuine commentary ("the drawers are so smooth," "I can't believe this is my kitchen").
10-14 sec: THE EMOTION — If there are tears or hugs, hold the shot. Don't cut away from genuine emotion. This is what gets shared.
14-16 sec: TEXT — "This is why we do what we do. — Keystone Kitchens"
    `.trim(),

    psychology:
      'Client reaction videos trigger "emotional contagion" — mirror neurons fire when we see someone else experience joy, causing viewers to literally feel the emotion. Genuine surprise/tears are nearly impossible to fake, so they signal authenticity (the most valued quality on social media in 2026). These videos also serve as the most powerful form of social proof — the emotional reaction IS the testimonial. Content showing genuine human emotion receives 3-5x more DM shares than any other format.',

    readyCaption: `This is the moment.

The [last name] family has been waiting 8 weeks for their kitchen. Today we surprised them with the final reveal.

Her reaction says everything we can't put into words.

Custom [wood species] cabinets. [Finish]. [Standout feature]. Built by hand in our Maryville shop.

This is why we build kitchens.

Planning your own transformation? Let's talk. Free consultation — link in bio or call 865.681.4039.

#ClientReveal #KitchenRemodel #HappyClients #Reaction #HomeGlowUp #CustomCabinetry #KeystoneKitchens #TennesseeHomes`,

    emmaNotes:
      'THIS IS YOUR HIGHEST-VALUE CONTENT. Get permission from the client BEFORE filming. Ask: "Would you be okay if we filmed your first reaction to the kitchen? We\'d love to share the moment." Most clients say yes. Setup: Have one team member with a phone on the client\'s face, and ideally a second angle showing the kitchen as they walk in. The face reaction is EVERYTHING — do not film the kitchen from behind the client; film the CLIENT. If they cry or gasp, that clip alone could get 1M+ views. Always follow up with a still photo + written testimonial for Facebook and Google Business.',

    audioNotes:
      'Two-phase audio: (1) Before reveal: quiet, building instrumental or silence with ambient sound. (2) After reveal: let the client\'s genuine audio play — their words, their emotion. If using trending audio, keep it low so the client\'s reaction audio is dominant. The viewer needs to HEAR the gasp.',
  },

  {
    // FORMULA 9 — AUTHORITY / "YOUR CONTRACTOR WON'T TELL YOU"
    id: 'vf-09-contractor-secrets',
    week: 3,
    day: 'friday',
    title: '"3 Things Your Contractor Won\'t Tell You"',
    pillar: 'design_tips',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'BRANDON TO CAMERA, leaning in slightly: "3 things your kitchen contractor won\'t tell you" — The lean-in creates intimacy. "Won\'t tell you" implies insider knowledge being shared, triggering urgency to listen.',

    structure: `
0-2 sec: HOOK — Brandon, close-up, leaning in. Text: "3 things your kitchen contractor won't tell you." Slight pause after delivery.
2-5 sec: SECRET 1 — "The cheapest bid usually means the cheapest materials." Cut to B-roll: particleboard cabinet backs, staple guns, thin drawer bottoms. Text overlay summarizes.
5-8 sec: SECRET 2 — "If they won't show you their shop, ask why." Cut to B-roll of Keystone's clean, organized shop. Text: "We give tours. Come see where your kitchen is built."
8-11 sec: SECRET 3 — "A 'custom' kitchen from a dealer is still mass-produced — they just measured your space." Cut to B-roll of Keystone hand-building vs factory line. Text: "Real custom means built for YOUR kitchen."
11-14 sec: THE CLOSE — Brandon back to camera: "Not all contractors are bad. But you deserve to know what to ask."
14-16 sec: CTA — "Save this for your renovation. Free consultation — link in bio."
    `.trim(),

    psychology:
      'This format exploits "in-group knowledge" — the viewer feels like they are being let into a secret circle. The phrase "won\'t tell you" triggers loss aversion (fear of missing critical information). It positions Keystone as the trustworthy insider who breaks ranks to protect the consumer. This format drives massive SAVES (viewers bookmark it for later research) and SENDS (people forward it to partners/spouses planning renovations). Both actions are top-weighted algorithm signals.',

    readyCaption: `3 things your kitchen contractor won't tell you:

1. The cheapest bid usually means the cheapest materials. Particleboard backs. Stapled joints. Drawer bottoms you can push through with your thumb.

2. If they won't show you their shop, there's a reason. We give tours every week. Come see where your kitchen is actually built.

3. A "custom" kitchen from a dealer is still mass-produced in a factory — they just measured your space and picked from a catalog. Real custom means built from scratch for YOUR kitchen.

Not all contractors are bad. But you deserve to know the right questions to ask.

Save this for your renovation.

Free consultation: link in bio or 865.681.4039

#ContractorTips #KitchenRemodel #CustomCabinetry #KitchenTok #HomeRenovation #DesignTok #KeystoneKitchens #TennesseeHomes`,

    emmaNotes:
      'FILM: Brandon close-up, authentic delivery. This is the format that builds the most TRUST. Each "secret" should have B-roll proof. Secret 1: show cheap materials (film at a home improvement store or from a demolition). Secret 2: show the Keystone shop, clean and impressive. Secret 3: side-by-side of a catalog page vs hands-on building. Pin a comment: "What questions should I ask my contractor? Drop them below." This generates comment threads that fuel the algorithm.',

    audioNotes:
      'Voice only. The intimate, "let me tell you something" tone is everything. No music. Subtitles mandatory.',
  },

  // =========================================================================
  // WEEK 4
  // =========================================================================

  {
    // FORMULA 10 — PINTEREST-OPTIMIZED STATIC PIN
    id: 'vf-10-pinterest-pin',
    week: 4,
    day: 'monday',
    title: 'Pinterest Kitchen Inspiration Pin',
    pillar: 'trend',
    platforms: ['pinterest'],
    format: 'post',

    hook:
      'PIN IMAGE: Stunning hero shot of a finished kitchen. Bold text overlay at the top: "2026 Kitchen Trend: Warm Minimalism." The text must be readable at thumbnail size on mobile. Use 60pt+ font.',

    structure: `
This is a STATIC PIN, not a video. Structure is visual:

IMAGE (2:3 ratio, 1000x1500px):
- Top 30%: Bold text overlay — "2026 Kitchen Trend: Warm Minimalism with White Oak Cabinets"
- Middle 50%: Hero photograph of the completed kitchen. Best angle, best lighting.
- Bottom 20%: Subtle brand bar — "Keystone Kitchens | Maryville, TN | keystonekitchens.com"

PIN TITLE (under 65 characters):
"Warm Minimalism Kitchen Design — Custom White Oak Cabinets 2026"

PIN DESCRIPTION (keyword-rich, 200+ characters):
Leads with primary keywords, includes location, and describes what the viewer will see.

BOARD: Save to "Kitchen Design Trends 2026" and "Custom Kitchen Cabinets" boards.
    `.trim(),

    psychology:
      'Pinterest is a search engine, not a social network. Users are in "planning mode" with high purchase intent (83% of weekly Pinterest users have made a purchase based on Pins). The 2:3 ratio maximizes feed real estate. Text overlay on the image is critical because Pinterest users scan visually — if your Pin does not communicate its topic at thumbnail size, it gets scrolled past. Question-style titles ("Is Warm Minimalism Right for Your Kitchen?") drive 18% higher click-through than declarative titles. Saves are the #1 metric — a saved Pin continues distributing for 3-6 months.',

    readyCaption: `PIN TITLE: Warm Minimalism Kitchen Design — Custom White Oak Cabinets 2026

PIN DESCRIPTION: Warm minimalism kitchen design with custom rift-cut white oak cabinets, integrated appliance panels, and natural stone countertops. This 2026 kitchen trend combines clean lines with organic warmth for a timeless, livable space. Custom built by Keystone Kitchens in Maryville, Tennessee. See more kitchen design inspiration and book a free consultation at keystonekitchens.com.

ALT TEXT: Custom warm minimalism kitchen with rift-cut white oak cabinets, quartzite countertops, and brass hardware in a modern Tennessee home.`,

    emmaNotes:
      'CREATE IN CANVA: Use a 1000x1500px template. Best photo you have of a white oak or warm-toned kitchen. Text overlay must be readable at 200px wide (thumbnail size on mobile). Use a semi-transparent dark overlay behind text if the photo is light. Brand bar at bottom: logo + website. Save to MULTIPLE boards (Kitchen Trends 2026, Custom Cabinets, White Oak Kitchens). Schedule 3-5 Pins per week to Pinterest using the calendar app or Tailwind. Pinterest is a LONG GAME — Pins take 3-6 months to peak. Start now.',

    audioNotes:
      'N/A — static image pin. If creating a video pin version, use a slow 5-second pan across the kitchen with text overlay. No voiceover needed for Pinterest video pins; the visual and text do the work.',
  },

  {
    // FORMULA 11 — COMPARISON / "VS" CONTENT
    id: 'vf-11-comparison-vs',
    week: 4,
    day: 'wednesday',
    title: '"$50 Drawer vs What We Build" Comparison',
    pillar: 'process',
    platforms: ['instagram', 'tiktok'],
    format: 'reel',

    hook:
      'SPLIT SCREEN: Left side shows a cheap drawer box. Right side shows a Keystone dovetail drawer. TEXT: "$50 drawer box vs. what we build." The side-by-side creates an instant visual argument.',

    structure: `
0-2 sec: HOOK — Split screen. Left: cheap drawer. Right: Keystone drawer. Text: "$50 drawer box vs. what we build."
2-4 sec: CONSTRUCTION — Left: flip drawer over, show staples, thin bottom, raw particleboard. Right: flip Keystone drawer, show dovetails, solid maple, finished interior.
4-6 sec: THE TEST — Push on the bottom of the cheap drawer (it flexes or breaks). Push on Keystone drawer (solid, no flex). Satisfying comparison.
6-8 sec: SLIDES — Pull the cheap drawer on its slides (wobbly, loud). Pull the Keystone drawer (smooth, soft-close, silent).
8-10 sec: CLOSE-UP — Dovetail joint detail on the Keystone drawer. Text: "Solid maple. Dovetail joints. Soft-close undermount slides."
10-12 sec: THE LINE — Brandon VO or text: "The stuff that matters is the stuff you don't see."
12-14 sec: CTA — "Keystone Kitchens. Free consultation — link in bio."
    `.trim(),

    psychology:
      'Comparison content activates the "evaluability hypothesis" — people struggle to assess quality in isolation but instantly understand it when shown side-by-side. The physical demonstration (pushing on the drawer bottom) creates visceral proof that no amount of talking can replicate. This format also triggers "righteous indignation" — viewers get upset that the cheap option exists and gets sold to unsuspecting homeowners. That emotion drives comments and shares. @the.woodworkers and @the_buildbergs consistently get millions of views with this exact format.',

    readyCaption: `$50 drawer box from the store vs. what we build in our shop.

Left: Staples. Particleboard. Thin bottom you can push through.
Right: Solid maple. Dovetail joints. Soft-close undermount slides. Finished interior.

One lasts 3 years. The other lasts 30.

The stuff that matters is the stuff you don't see.

Which one is in YOUR kitchen right now? Check and tell me in the comments.

#CustomCabinetry #QualityMatters #BuildTok #CabinetMaker #DovetailJoints #KitchenTok #SatisfyingWork #KeystoneKitchens #Woodworking`,

    emmaNotes:
      'FILM: Buy the cheapest drawer box you can find at a home improvement store (literally $8-15). Film side by side with your best Keystone drawer. The physical tests are KEY — push on the bottom, pull the slides, show the joints. Use a tripod, overhead angle works great. The more dramatic the contrast, the better. This is evergreen content — you can repost versions of this every quarter with different comparisons (hinges, door panels, box construction). TikTok loves this format in the trades.',

    audioNotes:
      'Raw audio of the tests: the creak of the cheap drawer, the satisfying soft-close of the Keystone drawer. These sounds are the ASMR payoff. If using music, keep it subtle underneath. The physical sounds must be audible.',
  },

  {
    // FORMULA 12 — FOUNDER STORY / MISSION
    id: 'vf-12-founder-story',
    week: 4,
    day: 'friday',
    title: 'Why I Started Building Cabinets',
    pillar: 'client_story',
    platforms: ['instagram', 'tiktok', 'facebook'],
    format: 'reel',

    hook:
      'BRANDON IN THE SHOP, tools in background: "I started Keystone Kitchens because Tennessee families deserve better than big box." — No fancy intro. No logo. Just a person and a statement. Authenticity IS the hook.',

    structure: `
0-2 sec: HOOK — Brandon to camera, in the shop. "I started Keystone Kitchens because Tennessee families deserve better than big box." No text overlay yet — just the raw statement.
2-5 sec: THE ORIGIN — Brandon briefly shares the founding moment: "I was installing cabinets for another company and I kept thinking — I can build these better." B-roll: hands on wood, early shop photos if available.
5-8 sec: THE MISSION — "Every kitchen that leaves this shop has my name on it. I don't build to a price point. I build to a standard." B-roll: team working, quality details.
8-11 sec: THE PROOF — Quick montage of 3-4 finished kitchens. Text: "[X] kitchens built. [X] families served. 100% Tennessee-made."
11-14 sec: THE PERSONAL — "My favorite part? The look on a homeowner's face when they see it for the first time." Clip of a client reaction if available.
14-16 sec: CTA — "If you're thinking about your kitchen, let's talk. Link in bio." Direct eye contact. Logo.
    `.trim(),

    psychology:
      'Founder stories exploit the "narrative transportation" effect — when we hear a personal story, our defenses drop and we process information through emotion rather than logic. The "small business vs. big box" framing activates the underdog effect, which is the single most powerful persuasion frame in consumer psychology. TikTok\'s algorithm in 2025-2026 explicitly boosts "small business" content. This video also serves as the "about us" that every potential client watches before hiring — pin it to the top of your profile.',

    readyCaption: `I started Keystone Kitchens because Tennessee families deserve better than big box.

I was installing cabinets for another company and I kept thinking — I can build these better. Stronger joints. Better materials. A kitchen you're proud of in 20 years, not just 2.

So I opened a shop in Maryville and started building.

Every kitchen that leaves this shop has my name on it.

[X] kitchens built. [X] Tennessee families served. Every one custom. Every one by hand.

If you're thinking about your kitchen — let's talk. No pressure, no sales pitch. Just a conversation about what's possible.

Free consultation: link in bio or call 865.681.4039

#SmallBusiness #CabinetMaker #FounderStory #MadeInTennessee #CustomCabinetry #KitchenTok #KeystoneKitchens #Maryville #SupportLocal`,

    emmaNotes:
      'FILM: Brandon, unscripted. Give him 3 bullet points and let him talk. Authenticity is EVERYTHING for this one — if it feels rehearsed, it won\'t work. Shoot in the shop with sawdust and tools visible. Natural light if possible. This should be pinned to the TOP of the Instagram profile and TikTok profile. It is the first thing potential clients will watch. Film 3 takes and pick the most natural one. The "imperfect" take is usually the best one. Facebook version: post as a native video with the full caption — Facebook rewards longer dwell time.',

    audioNotes:
      'Voice only. No music. The shop ambient sound (quiet hum of machines, faint radio) can stay in. This should feel like you are having a conversation with a friend, not watching a commercial.',
  },

];

// ---------------------------------------------------------------------------
// HELPER: Get formula by week/day
// ---------------------------------------------------------------------------
export function getFormulaBySchedule(week: number, day: 'monday' | 'wednesday' | 'friday'): ViralFormula | undefined {
  return VIRAL_FORMULAS.find(f => f.week === week && f.day === day);
}

// ---------------------------------------------------------------------------
// HELPER: Get all formulas for a given week
// ---------------------------------------------------------------------------
export function getFormulasForWeek(week: number): ViralFormula[] {
  return VIRAL_FORMULAS.filter(f => f.week === week);
}

// ---------------------------------------------------------------------------
// EXPORT: Quick reference of all 12 formulas in posting order
// ---------------------------------------------------------------------------
export const FORMULA_SCHEDULE = VIRAL_FORMULAS.map(f => ({
  id: f.id,
  week: f.week,
  day: f.day,
  title: f.title,
  pillar: f.pillar,
  platforms: f.platforms,
  format: f.format,
}));
