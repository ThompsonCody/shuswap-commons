export type CategoryTone = 'blue' | 'green' | 'amber'

export type Category = {
  name: string
  slug: string
  sub: string
  summary: string
  icon: string
  tone?: CategoryTone
}

export const categories = [
  {
    name: 'Food & Drink',
    slug: 'food-drink',
    sub: 'Eat local',
    summary:
      'Restaurants, cafés, bakeries, coffee, takeout, local food stops, and places to gather around a meal.',
    icon: 'i-food',
  },
  {
    name: 'Trades & Home Services',
    slug: 'trades-home-services',
    sub: 'Fix, build, maintain',
    summary:
      'Builders, repairs, plumbers, electricians, property help, outdoor work, and practical home services.',
    icon: 'i-tool',
    tone: 'green',
  },
  {
    name: 'Outdoor & Recreation',
    slug: 'outdoor-recreation',
    sub: 'Play outside',
    summary:
      'Paddling, trails, rentals, guiding, water access, seasonal recreation, and outdoor community groups.',
    icon: 'i-tree',
    tone: 'blue',
  },
  {
    name: 'Shops & Local Makers',
    slug: 'shops-local-makers',
    sub: 'Buy local',
    summary:
      'Independent shops, handmade goods, home decor, gifts, markets, and local makers across the region.',
    icon: 'i-bag',
    tone: 'amber',
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    sub: 'Feel your best',
    summary:
      'Massage, wellness coaching, clinics, fitness, holistic care, and health-focused local services.',
    icon: 'i-leaf',
    tone: 'green',
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    sub: 'Plans, advice, support',
    summary:
      'Bookkeeping, accounting, legal help, real estate, consultants, planning, and business support.',
    icon: 'i-briefcase',
    tone: 'blue',
  },
  {
    name: 'Community & Nonprofits',
    slug: 'community-nonprofits',
    sub: 'Stronger together',
    summary:
      'Nonprofits, community groups, watershed groups, local initiatives, volunteer resources, and public-good work.',
    icon: 'i-users',
    tone: 'amber',
  },
  {
    name: 'Accommodation & Travel',
    slug: 'accommodation-travel',
    sub: 'Stay & explore',
    summary:
      'Lodging, retreats, B&Bs, visitor-friendly stays, travel resources, and places to base a Shuswap trip.',
    icon: 'i-bed',
    tone: 'green',
  },
] as const satisfies readonly Category[]

export function getCategoryByName(name: string) {
  return categories.find((category) => category.name === name)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}