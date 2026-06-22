export const ROUTES = {
  home: '/',
  directory: '/directory',
  areas: '/areas',
  categories: '/categories',
  about: '/about',
  submit: '/submit',

  recentlyVerified: '/directory?verified=true',
  communityUpdates: '/about#community-updates',

  mission: '/about#mission',
  howItWorks: '/about#how-it-works',
  contact: '/about#contact',
  resources: '/about#resources',

  businessGuidelines: '/submit#guidelines',
  whyGetListed: '/submit#why-get-listed',
} as const

export type SubmitType = 'add' | 'edit' | 'claim'

export function getAreaHref(area: string) {
  return `${ROUTES.directory}?area=${encodeURIComponent(area)}`
}

export function getCategoryHref(category: string) {
  return `${ROUTES.directory}?category=${encodeURIComponent(category)}`
}

export function getListingHref(slug: string) {
  return `/listings/${slug}`
}

export function getSubmitHref(type: SubmitType = 'add', listingSlug?: string) {
  const params = new URLSearchParams({ type })

  if (listingSlug) {
    params.set('listing', listingSlug)
  }

  return `${ROUTES.submit}?${params.toString()}`
}