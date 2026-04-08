import type { PillarKey, FormatKey, PlatformKey } from '@/types';

// Platform-specific optimized hashtag sets by pillar + format
export const HASHTAG_SETS: Record<PillarKey, Record<PlatformKey, string[]>> = {
  before_after: {
    instagram: ['#KitchenRemodel', '#CustomCabinetry', '#BeforeAndAfter', '#KitchenTransformation', '#KeystoneKitchens'],
    tiktok: ['#KitchenTok', '#HomeGlowUp', '#RenoReveal', '#CustomCabinets', '#SatisfyingWork'],
    facebook: ['#KitchenRemodel', '#BeforeAndAfter', '#HomeImprovement'],
    pinterest: [], // Pinterest uses keywords, not hashtags
    google_business: ['#KitchenRemodel', '#CustomCabinets'],
  },
  design_tips: {
    instagram: ['#KitchenDesign', '#CustomCabinetry', '#DesignInspo', '#QuietLuxury', '#KeystoneKitchens'],
    tiktok: ['#DesignTok', '#KitchenTok', '#KitchenDesign', '#HomeRenovation'],
    facebook: ['#KitchenDesign', '#HomeDesign', '#InteriorDesign'],
    pinterest: [],
    google_business: ['#KitchenDesign', '#DesignTips'],
  },
  process: {
    instagram: ['#CustomCabinetry', '#CabinetMaker', '#Woodworking', '#ShopLife', '#KeystoneKitchens'],
    tiktok: ['#BuildTok', '#SatisfyingWork', '#HowItsMade', '#CustomCabinetry', '#SmallBusiness'],
    facebook: ['#CustomCabinetry', '#Woodworking', '#MadeInTennessee'],
    pinterest: [],
    google_business: ['#CustomCabinetry', '#Handcrafted'],
  },
  client_story: {
    instagram: ['#CustomCabinetry', '#HappyClients', '#KitchenRemodel', '#HomeTransformation', '#KeystoneKitchens'],
    tiktok: ['#KitchenTok', '#HomeGlowUp', '#ClientReview', '#SmallBusiness'],
    facebook: ['#HappyClients', '#KitchenRemodel', '#Testimonial'],
    pinterest: [],
    google_business: ['#CustomerReview', '#KitchenRemodel'],
  },
  offer: {
    instagram: ['#KitchenRemodel', '#FreeConsultation', '#CustomCabinets', '#HomeRenovation', '#KeystoneKitchens'],
    tiktok: ['#KitchenTok', '#HomeRenovation', '#KitchenRemodel', '#SmallBusiness'],
    facebook: ['#KitchenRemodel', '#FreeConsultation', '#HomeImprovement'],
    pinterest: [],
    google_business: ['#FreeConsultation', '#KitchenRemodel'],
  },
  trend: {
    instagram: ['#KitchenDesign', '#QuietLuxury', '#TransitionalDesign', '#KitchenTrends', '#KeystoneKitchens'],
    tiktok: ['#DesignTok', '#KitchenTok', '#QuietLuxury', '#KitchenTrends', '#HomeDesign'],
    facebook: ['#KitchenTrends', '#InteriorDesign', '#HomeDesign'],
    pinterest: [],
    google_business: ['#KitchenTrends', '#KitchenDesign'],
  },
};

// Regional tags to rotate — always include 1
export const REGIONAL_TAGS = {
  instagram: ['#NashvilleDesign', '#NashvilleHome', '#TennesseeHomes', '#NashvilleBuilder', '#MaryvilleTN', '#KnoxvilleDesign', '#MiddleTennessee', '#SouthernHome'],
  tiktok: ['#NashvilleHome', '#Tennessee', '#NashvilleDesign'],
  facebook: ['#Nashville', '#Tennessee', '#MaryvilleTN'],
  google_business: ['#MaryvilleTN', '#Nashville', '#Knoxville'],
};

// Format-specific bonus tags
export const FORMAT_TAGS: Record<FormatKey, Record<string, string[]>> = {
  reel: {
    instagram: ['#Reels', '#ReelsInstagram'],
    tiktok: [],
  },
  story: {
    instagram: [],
    tiktok: [],
  },
  post: {
    instagram: [],
    tiktok: [],
  },
  carousel: {
    instagram: ['#CarouselPost'],
    tiktok: [],
  },
};

/**
 * Generate optimized hashtags for a post based on pillar, platform, and format.
 * Returns 3-5 tags per platform (current best practice).
 */
export function getHashtags(
  pillar: PillarKey,
  platform: PlatformKey,
  format?: FormatKey
): string[] {
  if (platform === 'pinterest') return []; // Pinterest uses keywords, not hashtags

  const pillarTags = HASHTAG_SETS[pillar]?.[platform] || [];
  const regional = REGIONAL_TAGS[platform as keyof typeof REGIONAL_TAGS] || [];
  const formatBonus = format ? (FORMAT_TAGS[format]?.[platform] || []) : [];

  // Pick: 3 pillar tags + 1 regional + format bonus (cap at 5 total for IG, 6 for TikTok)
  const maxTags = platform === 'tiktok' ? 6 : platform === 'facebook' ? 3 : 5;
  const selectedPillar = pillarTags.slice(0, maxTags - 1);
  const selectedRegional = regional.slice(0, 1);
  const combined = [...selectedPillar, ...selectedRegional, ...formatBonus];

  return combined.slice(0, maxTags);
}

/**
 * Generate a hashtag string to append to a caption.
 */
export function getHashtagString(
  pillar: PillarKey,
  platforms: PlatformKey[],
  format?: FormatKey
): string {
  // Use the primary platform (first in list) for hashtag selection
  const primary = platforms[0] || 'instagram';
  const tags = getHashtags(pillar, primary, format);
  return tags.join(' ');
}

/**
 * Pinterest keyword suggestions (instead of hashtags).
 */
export const PINTEREST_KEYWORDS: Record<PillarKey, string[]> = {
  before_after: ['kitchen remodel before and after', 'kitchen transformation', 'custom kitchen cabinets', 'kitchen renovation ideas 2026', 'white oak kitchen cabinets'],
  design_tips: ['kitchen design ideas', 'kitchen cabinet ideas', 'kitchen layout tips', 'small kitchen design', 'kitchen storage solutions'],
  process: ['custom cabinet making', 'how cabinets are made', 'woodworking process', 'kitchen cabinet installation', 'cabinet shop'],
  client_story: ['kitchen remodel results', 'custom kitchen renovation', 'dream kitchen design', 'kitchen makeover ideas'],
  offer: ['kitchen remodel cost', 'kitchen renovation planning', 'free kitchen design consultation', 'kitchen cabinet pricing'],
  trend: ['kitchen trends 2026', 'trending kitchen cabinets', 'warm minimalism kitchen', 'quiet luxury kitchen design', 'rift cut white oak cabinets'],
};
