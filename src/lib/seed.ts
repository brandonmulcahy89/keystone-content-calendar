import type { Post } from '@/types';

// April 2026 content plan — Monday/Wednesday/Friday schedule
// Rotates through pillars for balanced mix
// Emma fills in [brackets] and adds photos/video

export const SEED_POSTS: Omit<Post, 'user_id'>[] = [
  // WEEK 1
  { id: 'w1-mon', created_at: '2026-04-01T10:00:00Z', title: 'Warm Minimalism Kitchen Trend', date: '2026-04-06', pillar: 'trend', status: 'drafted', format: 'reel', platforms: ['instagram', 'tiktok', 'pinterest'],
    caption: 'Warm minimalism is taking over Tennessee kitchens in 2026 🔮\n\n→ Rift-cut white oak cabinets with minimal hardware\n→ Integrated appliance panels for a seamless look\n→ Natural stone in warm tones — honey onyx, not cold marble\n\nWe just finished one in Knoxville and the result is stunning.\n\nFree consultation → link in bio.\n\n#KitchenTok #QuietLuxury #KitchenTrends #CustomCabinetry #NashvilleDesign',
    notes: 'REEL: 15-30 sec. Trending kitchen details with text overlay. Trending audio. Film the Knoxville white oak project.' },

  { id: 'w1-wed', created_at: '2026-04-01T10:00:00Z', title: 'Crook Kitchen Before/After', date: '2026-04-08', pillar: 'before_after', status: 'drafted', format: 'carousel', platforms: ['instagram', 'facebook', 'pinterest'],
    caption: 'This Maryville kitchen went from dated to stunning 🤯\n\nBEFORE: Dark oak cabinets from 1998, laminate counters.\nAFTER: Custom shaker cabinets in Alabaster, quartzite counters, under-cabinet LEDs.\n\n8 weeks from demo to done.\n\nYour kitchen next → 865.681.4039\n\n#KitchenRemodel #BeforeAndAfter #CustomCabinetry #MaryvilleTN #KeystoneKitchens',
    notes: 'CAROUSEL: Slide 1 = before, Slides 2-4 = after angles. Pin to IG profile top. Highest-converting content type.' },

  { id: 'w1-fri', created_at: '2026-04-01T10:00:00Z', title: 'Walnut Island Build', date: '2026-04-10', pillar: 'process', status: 'idea', format: 'reel', platforms: ['instagram', 'tiktok'],
    caption: 'Building a waterfall walnut island for a Knoxville family 🔨\n\nCut and assembled by hand. Finished with hand-rubbed oil. Built to last decades.\n\nFrom raw American walnut → your home.\n\n#BuildTok #SatisfyingWork #CustomCabinetry #Woodworking #MadeInTennessee',
    notes: 'REEL: Film sanding + oil application. 30-45 sec. Raw shop audio, no music. Show grain close-up. TikTok loves satisfying woodworking.' },

  // WEEK 2
  { id: 'w2-mon', created_at: '2026-04-01T10:00:00Z', title: 'Cabinet Depth Design Tip', date: '2026-04-13', pillar: 'design_tips', status: 'idea', format: 'carousel', platforms: ['instagram', 'facebook', 'tiktok'],
    caption: 'Kitchen design tip from our shop floor 👇\n\nStandard 24" deep base cabinets eat 2 feet of your kitchen.\n\n✅ 21" deep bases for galley kitchens\n✅ Soft-close everything\n✅ Invest in the boxes, not just the doors\n\n200+ kitchens built. These details matter.\n\nSave this 📌\n\n#KitchenDesign #CustomCabinetry #DesignInspo #NashvilleHome #KeystoneKitchens',
    notes: 'CAROUSEL: Each tip = own slide with clean graphic. Brand colors. Save-bait caption. Schedule 9am Tuesday.' },

  { id: 'w2-wed', created_at: '2026-04-01T10:00:00Z', title: 'Harrison Family Testimonial', date: '2026-04-15', pillar: 'client_story', status: 'idea', format: 'post', platforms: ['instagram', 'facebook', 'google_business'],
    caption: '"We never thought our kitchen could look like this." — Madison H., Knoxville\n\nModern farmhouse. White oak shakers. Brass hardware. 10-foot island.\n\n8 weeks from meeting to done.\n\nYour turn → 865.681.4039\n\n#CustomCabinetry #HappyClients #KnoxvilleDesign #KitchenRemodel #KeystoneKitchens',
    notes: 'POST: Best photo of finished kitchen. Get video testimonial from Madison (agreed). Also post review on Google Business.' },

  { id: 'w2-fri', created_at: '2026-04-01T10:00:00Z', title: 'Spring Consultation Push', date: '2026-04-17', pillar: 'offer', status: 'idea', format: 'story', platforms: ['instagram', 'facebook'],
    caption: 'Planning a kitchen renovation this summer? 🏠\n\nFree consultation includes:\n→ In-home measurement\n→ Style direction for YOUR home\n→ 3D kitchen preview\n→ Transparent pricing\n\n8 spots/month. May filling up.\n\nDM "KITCHEN" or call 865.681.4039\n\n#KitchenRemodel #FreeConsultation #NashvilleHome #KeystoneKitchens',
    notes: 'STORY: Poll sticker ("Planning a reno? Yes/Not yet"). Swipe-up to booking. Boost $30 on FB — homeowners 30-55, Knoxville/Maryville metro.' },

  // WEEK 3
  { id: 'w3-mon', created_at: '2026-04-01T10:00:00Z', title: 'Painted vs Stained Cabinets', date: '2026-04-20', pillar: 'design_tips', status: 'idea', format: 'reel', platforms: ['instagram', 'tiktok', 'pinterest'],
    caption: 'Painted vs stained — which for YOUR kitchen? 🎨\n\nPAINTED: Brighter, hides grain, shows wear faster\nSTAINED: Natural beauty, hides scratches, warmer feel\n\nOur take? Depends on your home. We build both.\n\nFree consultation → link in bio\n\n#DesignTok #KitchenDesign #CustomCabinets #KitchenTok #NashvilleDesign',
    notes: 'REEL: Split screen — painted vs stained. Voice-over or text overlay. End with "which do you prefer?" comment prompt.' },

  { id: 'w3-wed', created_at: '2026-04-01T10:00:00Z', title: 'Dovetail Joint Close-Up', date: '2026-04-22', pillar: 'process', status: 'idea', format: 'reel', platforms: ['instagram', 'tiktok'],
    caption: '$50 drawer boxes vs what we build 👇\n\nOurs: solid maple dovetails, soft-close undermount slides, finished interior.\n\nThe stuff that matters is the stuff you don\'t see.\n\n#BuildTok #SatisfyingWork #CabinetMaker #CustomCabinetry #ShopLife',
    notes: 'REEL: Close-up cutting dovetails. Side-by-side comparison: cheap stapled box vs dovetailed. Under 20 sec. This KILLS on TikTok.' },

  { id: 'w3-fri', created_at: '2026-04-01T10:00:00Z', title: 'Waisman Kitchen Reveal', date: '2026-04-24', pillar: 'before_after', status: 'idea', format: 'carousel', platforms: ['instagram', 'facebook', 'pinterest'],
    caption: 'The Waisman family trusted us with kitchen, pantry, and all built-ins ✨\n\nAlder cabinets. Alamo stain. Euro inset construction.\n\nEvery panel, every drawer — custom built in our Maryville shop.\n\nSwipe →\n\n#KitchenRemodel #CustomCabinetry #BeforeAndAfter #HomeGlowUp #KeystoneKitchens',
    notes: 'CAROUSEL: Slide 1 = hero shot, 2 = before, 3-5 = alder cabinet details + euro inset doors. Premium project — show it off.' },

  // WEEK 4
  { id: 'w4-mon', created_at: '2026-04-01T10:00:00Z', title: 'White Oak Trend Alert', date: '2026-04-27', pillar: 'trend', status: 'idea', format: 'reel', platforms: ['instagram', 'tiktok', 'pinterest'],
    caption: 'White oak = #1 cabinet wood in luxury kitchens right now.\n\n→ Beautiful natural grain\n→ Takes stain beautifully\n→ Harder than red oak\n→ Rift-cut = the clean linear look everyone wants\n\n🔥\n\n#DesignTok #QuietLuxury #WhiteOak #CustomCabinets #KitchenTrends',
    notes: 'REEL: Close-ups of white oak grain, reveal finished kitchen. Text overlay with points. Drives saves and follows.' },

  { id: 'w4-wed', created_at: '2026-04-01T10:00:00Z', title: 'Meet Brandon — Founder Story', date: '2026-04-29', pillar: 'client_story', status: 'idea', format: 'reel', platforms: ['instagram', 'tiktok', 'facebook'],
    caption: 'The guy behind Keystone Kitchens 👋\n\nI started building cabinets because Tennessee families deserve better than big box.\n\nEvery kitchen that leaves our shop has my name on it.\n\nFree consultation → link in bio\n\n#SmallBusiness #CabinetMaker #MadeInTennessee #KitchenTok #KeystoneKitchens',
    notes: 'REEL: Brandon talking to camera in shop. 30 sec max. No script — just talk about why you started. TikTok loves founder stories.' },

  { id: 'w4-fri', created_at: '2026-04-01T10:00:00Z', title: 'May Booking Push', date: '2026-05-01', pillar: 'offer', status: 'idea', format: 'story', platforms: ['instagram', 'facebook', 'google_business'],
    caption: 'May calendar is OPEN 📅\n\n8 projects/month. 3 already claimed.\n\nDon\'t wait until summer to start planning your fall kitchen.\n\nDM "MAY" or call 865.681.4039\n\n#KitchenRemodel #FreeConsultation #Tennessee #KeystoneKitchens',
    notes: 'STORY: Countdown sticker for May 1st. Post on Google Business too for local search.' },
];
