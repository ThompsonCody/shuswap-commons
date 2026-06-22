export type ListingHours = {
  day: string
  hours: string
}

export type ListingHighlight = {
  icon: string
  label: string
}

export type ListingSocials = {
  instagram?: string
  facebook?: string
}

export type Listing = {
  name: string
  slug: string
  category: string
  area: string
  distance: string
  image: string
  summary: string
  closes: string
  verified: string

  phone: string
  email: string
  website: string
  displayWebsite: string
  address: string
  mapQuery: string
  mapImage: string

  detailAbout: string[]
  hours: ListingHours[]
  serviceArea: string
  attributes: string[]
  highlights: ListingHighlight[]
  gallery: string[]
  socials?: ListingSocials
}

const standardWeekdayHours: ListingHours[] = [
  { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const eveningFoodHours: ListingHours[] = [
  { day: 'Monday', hours: '8:00 AM – 9:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 9:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 9:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 9:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 8:00 PM' },
]

export const listings: Listing[] = [
  {
    name: 'Maple Street Diner',
    slug: 'maple-street-diner',
    category: 'Food & Drink',
    area: 'Salmon Arm',
    distance: '0.6 km',
    image: '/images/listing-diner.jpg',
    summary: 'Comfort food, daily specials, and friendly service in the heart of town.',
    closes: '9:00 PM',
    verified: 'May 20, 2026',

    phone: '(250) 832-1948',
    email: 'hello@maplestreetdiner.ca',
    website: 'https://maplestreetdiner.ca',
    displayWebsite: 'maplestreetdiner.ca',
    address: '240 Maple Street NE, Salmon Arm, BC',
    mapQuery: 'Maple Street Diner Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A casual local diner serving comfort food, daily specials, coffee, and friendly service in central Salmon Arm.',
      'A useful stop for residents, visitors, road-trippers, and anyone looking for a familiar meal without fuss.',
    ],
    hours: eveningFoodHours,
    serviceArea: 'Salmon Arm and surrounding communities.',
    attributes: ['Locally Owned', 'Family Friendly', 'Takeout', 'Breakfast', 'Lunch', 'Dinner'],
    highlights: [
      { icon: 'i-food', label: 'Comfort Food' },
      { icon: 'i-users', label: 'Family Friendly' },
      { icon: 'i-badge', label: 'Daily Specials' },
      { icon: 'i-pin', label: 'Central Location' },
    ],
    gallery: [
      '/images/listing-diner.jpg',
      '/images/listing-coffee.jpg',
      '/images/listing-mercantile.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-diner.jpg',
    ],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Shuswap Deck Works',
    slug: 'shuswap-deck-works',
    category: 'Trades & Home Services',
    area: 'Blind Bay',
    distance: '12 km',
    image: '/images/listing-deck.jpg',
    summary: 'Custom decks, railings, and outdoor living spaces built to last.',
    closes: '5:00 PM',
    verified: 'May 18, 2026',

    phone: '(250) 675-4420',
    email: 'quotes@shuswapdeckworks.ca',
    website: 'https://shuswapdeckworks.ca',
    displayWebsite: 'shuswapdeckworks.ca',
    address: 'Blind Bay, BC',
    mapQuery: 'Shuswap Deck Works Blind Bay BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A local deck and outdoor-living contractor focused on durable builds, lake-country homes, railings, and exterior upgrades.',
      'Helpful for homeowners looking to improve patios, decks, stairs, and usable outdoor space around the Shuswap.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Blind Bay, Sorrento, Eagle Bay, Salmon Arm, and nearby South Shuswap communities.',
    attributes: ['Locally Owned', 'Free Estimates', 'Custom Builds', 'Outdoor Living', 'Seasonal'],
    highlights: [
      { icon: 'i-tool', label: 'Custom Builds' },
      { icon: 'i-badge', label: 'Quality Work' },
      { icon: 'i-map', label: 'Local Knowledge' },
      { icon: 'i-users', label: 'Homeowner Friendly' },
    ],
    gallery: [
      '/images/listing-deck.jpg',
      '/images/area-lake.jpg',
      '/images/listing-bnb.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-deck.jpg',
      '/images/listing-plumbing.jpg',
    ],
  },
  {
    name: 'Shuswap Paddles',
    slug: 'shuswap-paddles',
    category: 'Outdoor & Recreation',
    area: 'Sicamous',
    distance: '25 km',
    image: '/images/listing-paddles.jpg',
    summary: 'Kayak, canoe & SUP rentals, tours and outdoor adventures.',
    closes: '6:00 PM',
    verified: 'May 18, 2026',

    phone: '(250) 836-1122',
    email: 'info@shuswappaddles.ca',
    website: 'https://shuswappaddles.ca',
    displayWebsite: 'shuswappaddles.ca',
    address: '1221 Lakeshore Dr, Sicamous, BC V0E 2V1',
    mapQuery: 'Shuswap Paddles Sicamous BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'Paddle the Shuswap your way with kayak, canoe, and SUP rentals, guided tours, and friendly local advice.',
      'A practical starting point for peaceful morning paddles, family outings, route ideas, and lake access around Sicamous.',
    ],
    hours: [
      { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM – 7:00 PM' },
      { day: 'Saturday', hours: '8:00 AM – 7:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 5:00 PM' },
    ],
    serviceArea: 'Sicamous, Mara Lake, Eagle River, Blind Bay, and surrounding Shuswap communities.',
    attributes: ['Locally Owned', 'Family Friendly', 'Eco Conscious', 'Seasonal', 'Online Booking'],
    highlights: [
      { icon: 'i-users', label: 'Friendly Local Staff' },
      { icon: 'i-badge', label: 'Quality Gear' },
      { icon: 'i-map', label: 'Local Knowledge' },
      { icon: 'i-tree', label: 'Great for Families' },
    ],
    gallery: [
      '/images/listing-paddles.jpg',
      '/images/listing-canoes.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-paddles.jpg',
      '/images/listing-canoes.jpg',
    ],
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'North Shore Mercantile',
    slug: 'north-shore-mercantile',
    category: 'Shops & Local Makers',
    area: 'Anglemont',
    distance: '18 km',
    image: '/images/listing-mercantile.jpg',
    summary: 'Curated goods, home decor, and gifts from local makers.',
    closes: '5:30 PM',
    verified: 'May 17, 2026',

    phone: '(250) 955-2044',
    email: 'shop@northshoremercantile.ca',
    website: 'https://northshoremercantile.ca',
    displayWebsite: 'northshoremercantile.ca',
    address: 'Anglemont, BC',
    mapQuery: 'North Shore Mercantile Anglemont BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A small North Shuswap shop featuring home goods, gifts, local maker items, and useful finds for lake-country living.',
      'A good stop for visitors and residents looking for something practical, local, or giftable.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Anglemont, Scotch Creek, Celista, and the North Shuswap.',
    attributes: ['Local Makers', 'Gift Shop', 'Home Goods', 'Seasonal', 'Small Business'],
    highlights: [
      { icon: 'i-bag', label: 'Local Goods' },
      { icon: 'i-leaf', label: 'Thoughtful Finds' },
      { icon: 'i-users', label: 'Community Focused' },
      { icon: 'i-pin', label: 'North Shuswap' },
    ],
    gallery: [
      '/images/listing-mercantile.jpg',
      '/images/area-lake.jpg',
      '/images/listing-bnb.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-mercantile.jpg',
      '/images/listing-coffee.jpg',
    ],
  },
  {
    name: 'Tru Balance Wellness',
    slug: 'tru-balance-wellness',
    category: 'Health & Wellness',
    area: 'Salmon Arm',
    distance: '1.2 km',
    image: '/images/listing-wellness.jpg',
    summary: 'Massage therapy, holistic health, and wellness coaching.',
    closes: '8:00 PM',
    verified: 'May 16, 2026',

    phone: '(250) 832-7740',
    email: 'care@trubalancewellness.ca',
    website: 'https://trubalancewellness.ca',
    displayWebsite: 'trubalancewellness.ca',
    address: 'Salmon Arm, BC',
    mapQuery: 'Tru Balance Wellness Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A wellness-focused local service offering massage therapy, coaching, and holistic support for everyday wellbeing.',
      'Helpful for people looking for calm, practical care and a locally grounded wellness experience.',
    ],
    hours: [
      { day: 'Monday', hours: '10:00 AM – 6:00 PM' },
      { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
      { day: 'Wednesday', hours: '10:00 AM – 6:00 PM' },
      { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
      { day: 'Friday', hours: '10:00 AM – 5:00 PM' },
      { day: 'Saturday', hours: 'By appointment' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    serviceArea: 'Salmon Arm and nearby communities.',
    attributes: ['By Appointment', 'Holistic Care', 'Massage Therapy', 'Wellness Coaching'],
    highlights: [
      { icon: 'i-leaf', label: 'Holistic Care' },
      { icon: 'i-badge', label: 'Experienced Support' },
      { icon: 'i-users', label: 'Client Focused' },
      { icon: 'i-clock', label: 'Evening Hours' },
    ],
    gallery: [
      '/images/listing-wellness.jpg',
      '/images/listing-mercantile.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-wellness.jpg',
      '/images/listing-coffee.jpg',
    ],
  },
  {
    name: 'Harper Legal Group',
    slug: 'harper-legal-group',
    category: 'Professional Services',
    area: 'Salmon Arm',
    distance: '0.8 km',
    image: '/images/listing-legal.jpg',
    summary: 'Wills, estates, real estate and business law. Local, approachable, trusted.',
    closes: '5:00 PM',
    verified: 'May 15, 2026',

    phone: '(250) 832-4409',
    email: 'office@harperlegal.ca',
    website: 'https://harperlegal.ca',
    displayWebsite: 'harperlegal.ca',
    address: 'Salmon Arm, BC',
    mapQuery: 'Harper Legal Group Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A local professional services office helping residents and businesses with practical legal needs.',
      'Areas of support include wills, estates, real estate, business matters, and approachable guidance for common legal questions.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Salmon Arm and the wider Shuswap region.',
    attributes: ['Appointments', 'Business Law', 'Real Estate', 'Wills & Estates', 'Local Office'],
    highlights: [
      { icon: 'i-briefcase', label: 'Professional Help' },
      { icon: 'i-badge', label: 'Trusted Guidance' },
      { icon: 'i-users', label: 'Approachable Team' },
      { icon: 'i-pin', label: 'Salmon Arm' },
    ],
    gallery: [
      '/images/listing-legal.jpg',
      '/images/area-lake.jpg',
      '/images/listing-coffee.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-legal.jpg',
      '/images/listing-mercantile.jpg',
    ],
  },
  {
    name: 'Shuswap Watershed Council',
    slug: 'shuswap-watershed-council',
    category: 'Community & Nonprofits',
    area: 'Salmon Arm',
    distance: '0.9 km',
    image: '/images/listing-watershed.jpg',
    summary: 'Protecting our lakes and rivers through education and action.',
    closes: '4:30 PM',
    verified: 'May 14, 2026',

    phone: '(250) 832-1117',
    email: 'info@shuswapwatershed.ca',
    website: 'https://shuswapwatershed.ca',
    displayWebsite: 'shuswapwatershed.ca',
    address: 'Salmon Arm, BC',
    mapQuery: 'Shuswap Watershed Council Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A community-focused organization supporting education, stewardship, and practical action around Shuswap lakes and rivers.',
      'Useful for people looking for watershed information, local initiatives, environmental education, and ways to get involved.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Shuswap Lake, Salmon Arm, Sicamous, North Shuswap, South Shuswap, and surrounding watersheds.',
    attributes: ['Nonprofit', 'Education', 'Stewardship', 'Volunteer Friendly', 'Community Resource'],
    highlights: [
      { icon: 'i-leaf', label: 'Stewardship' },
      { icon: 'i-users', label: 'Community Action' },
      { icon: 'i-map', label: 'Regional Focus' },
      { icon: 'i-badge', label: 'Educational Resource' },
    ],
    gallery: [
      '/images/listing-watershed.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-canoes.jpg',
      '/images/listing-watershed.jpg',
      '/images/listing-trails.jpg',
    ],
  },
  {
    name: 'Lakeside Retreat B&B',
    slug: 'lakeside-retreat-bb',
    category: 'Accommodation & Travel',
    area: 'Sicamous',
    distance: '26 km',
    image: '/images/listing-bnb.jpg',
    summary: 'Relaxing lakefront stays with breathtaking mountain views.',
    closes: '10:00 PM',
    verified: 'May 14, 2026',

    phone: '(250) 836-7088',
    email: 'stay@lakesideretreat.ca',
    website: 'https://lakesideretreat.ca',
    displayWebsite: 'lakesideretreat.ca',
    address: 'Sicamous, BC',
    mapQuery: 'Lakeside Retreat B&B Sicamous BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A quiet lake-country stay option for visitors looking for water access, mountain views, and a slower Shuswap pace.',
      'Helpful for weekend trips, family visits, paddling getaways, and longer regional exploring.',
    ],
    hours: [
      { day: 'Monday', hours: 'Check-in by arrangement' },
      { day: 'Tuesday', hours: 'Check-in by arrangement' },
      { day: 'Wednesday', hours: 'Check-in by arrangement' },
      { day: 'Thursday', hours: 'Check-in by arrangement' },
      { day: 'Friday', hours: '3:00 PM – 10:00 PM' },
      { day: 'Saturday', hours: '3:00 PM – 10:00 PM' },
      { day: 'Sunday', hours: 'Check-out 11:00 AM' },
    ],
    serviceArea: 'Sicamous, Mara Lake, and nearby visitor destinations.',
    attributes: ['Lakefront', 'Visitor Friendly', 'Online Booking', 'Mountain Views', 'Seasonal'],
    highlights: [
      { icon: 'i-bed', label: 'Relaxing Stays' },
      { icon: 'i-tree', label: 'Lake Country' },
      { icon: 'i-map', label: 'Near Recreation' },
      { icon: 'i-badge', label: 'Guest Friendly' },
    ],
    gallery: [
      '/images/listing-bnb.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-paddles.jpg',
      '/images/listing-bnb.jpg',
      '/images/listing-canoes.jpg',
    ],
  },
  {
    name: 'Shuswap Plumbing Co.',
    slug: 'shuswap-plumbing-co',
    category: 'Trades & Home Services',
    area: 'Chase',
    distance: '35 km',
    image: '/images/listing-plumbing.jpg',
    summary: 'Plumbing repairs, renovations, and new installations.',
    closes: '5:00 PM',
    verified: 'May 13, 2026',

    phone: '(250) 679-5532',
    email: 'service@shuswapplumbing.ca',
    website: 'https://shuswapplumbing.ca',
    displayWebsite: 'shuswapplumbing.ca',
    address: 'Chase, BC',
    mapQuery: 'Shuswap Plumbing Co Chase BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A practical trades service for plumbing repairs, fixture upgrades, renovations, and new installs.',
      'Useful for homeowners, cabins, small businesses, and seasonal properties needing reliable local support.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Chase, Sorrento, Blind Bay, Salmon Arm, and nearby communities.',
    attributes: ['Repairs', 'Renovations', 'New Installs', 'Emergency Calls', 'Local Service'],
    highlights: [
      { icon: 'i-tool', label: 'Repairs' },
      { icon: 'i-clock', label: 'Responsive Help' },
      { icon: 'i-badge', label: 'Reliable Work' },
      { icon: 'i-map', label: 'Regional Service' },
    ],
    gallery: [
      '/images/listing-plumbing.jpg',
      '/images/listing-deck.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-plumbing.jpg',
      '/images/listing-legal.jpg',
    ],
  },
  {
    name: 'Foothills Coffee Co.',
    slug: 'foothills-coffee-co',
    category: 'Food & Drink',
    area: 'Sicamous',
    distance: '24 km',
    image: '/images/listing-coffee.jpg',
    summary: 'Locally roasted coffee, tea, and house-baked goodness.',
    closes: '4:00 PM',
    verified: 'May 13, 2026',

    phone: '(250) 836-4040',
    email: 'hello@foothillscoffee.ca',
    website: 'https://foothillscoffee.ca',
    displayWebsite: 'foothillscoffee.ca',
    address: 'Sicamous, BC',
    mapQuery: 'Foothills Coffee Co Sicamous BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A local coffee stop for roasted coffee, tea, baked goods, and a slower pause during a Shuswap day.',
      'Good for travellers, remote workers, locals, and anyone passing through Sicamous.',
    ],
    hours: [
      { day: 'Monday', hours: '7:00 AM – 4:00 PM' },
      { day: 'Tuesday', hours: '7:00 AM – 4:00 PM' },
      { day: 'Wednesday', hours: '7:00 AM – 4:00 PM' },
      { day: 'Thursday', hours: '7:00 AM – 4:00 PM' },
      { day: 'Friday', hours: '7:00 AM – 4:00 PM' },
      { day: 'Saturday', hours: '8:00 AM – 3:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 2:00 PM' },
    ],
    serviceArea: 'Sicamous and nearby lake-country visitors.',
    attributes: ['Coffee', 'Tea', 'Baked Goods', 'Locally Roasted', 'Takeout'],
    highlights: [
      { icon: 'i-food', label: 'Coffee & Bakes' },
      { icon: 'i-leaf', label: 'Local Roasts' },
      { icon: 'i-users', label: 'Gathering Spot' },
      { icon: 'i-clock', label: 'Morning Hours' },
    ],
    gallery: [
      '/images/listing-coffee.jpg',
      '/images/listing-diner.jpg',
      '/images/area-lake.jpg',
      '/images/listing-mercantile.jpg',
      '/images/listing-coffee.jpg',
      '/images/hero-shuswap.jpg',
    ],
  },
  {
    name: 'Shuswap Trail Collective',
    slug: 'shuswap-trail-collective',
    category: 'Outdoor & Recreation',
    area: 'Salmon Arm',
    distance: '5.4 km',
    image: '/images/listing-trails.jpg',
    summary: 'Building and maintaining trails for our community to enjoy.',
    closes: '6:00 PM',
    verified: 'May 12, 2026',

    phone: '(250) 832-9088',
    email: 'trails@shuswaptrailcollective.ca',
    website: 'https://shuswaptrailcollective.ca',
    displayWebsite: 'shuswaptrailcollective.ca',
    address: 'Salmon Arm, BC',
    mapQuery: 'Shuswap Trail Collective Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A recreation-focused community group supporting local trail maintenance, stewardship, events, and outdoor access.',
      'Useful for riders, hikers, volunteers, visitors, and residents who want current trail information or ways to contribute.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Salmon Arm, South Canoe, Larch Hills, and surrounding trail networks.',
    attributes: ['Trail Work', 'Volunteer Friendly', 'Outdoor Recreation', 'Community Group', 'Events'],
    highlights: [
      { icon: 'i-tree', label: 'Trail Stewardship' },
      { icon: 'i-users', label: 'Volunteer Friendly' },
      { icon: 'i-map', label: 'Local Routes' },
      { icon: 'i-badge', label: 'Community Built' },
    ],
    gallery: [
      '/images/listing-trails.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-paddles.jpg',
      '/images/listing-canoes.jpg',
      '/images/listing-trails.jpg',
    ],
  },
  {
    name: 'ClearPath Accounting',
    slug: 'clearpath-accounting',
    category: 'Professional Services',
    area: 'Salmon Arm',
    distance: '11 km',
    image: '/images/listing-legal.jpg',
    summary: 'Bookkeeping, tax prep, and business advice for local businesses.',
    closes: '5:00 PM',
    verified: 'May 12, 2026',

    phone: '(250) 832-6610',
    email: 'hello@clearpathaccounting.ca',
    website: 'https://clearpathaccounting.ca',
    displayWebsite: 'clearpathaccounting.ca',
    address: 'Salmon Arm, BC',
    mapQuery: 'ClearPath Accounting Salmon Arm BC',
    mapImage: '/images/area-lake.jpg',

    detailAbout: [
      'A local accounting and bookkeeping service helping small businesses, contractors, and residents stay organized.',
      'Useful for tax prep, bookkeeping cleanup, business advice, and practical year-round financial support.',
    ],
    hours: standardWeekdayHours,
    serviceArea: 'Salmon Arm and remote clients across the Shuswap.',
    attributes: ['Bookkeeping', 'Tax Prep', 'Small Business', 'Remote Support', 'Appointments'],
    highlights: [
      { icon: 'i-briefcase', label: 'Business Support' },
      { icon: 'i-badge', label: 'Organized Advice' },
      { icon: 'i-globe', label: 'Remote Friendly' },
      { icon: 'i-users', label: 'Small Business Help' },
    ],
    gallery: [
      '/images/listing-legal.jpg',
      '/images/listing-coffee.jpg',
      '/images/area-lake.jpg',
      '/images/hero-shuswap.jpg',
      '/images/listing-legal.jpg',
      '/images/listing-mercantile.jpg',
    ],
  },
]

export const areas = [
  'Anglemont',
  'Scotch Creek',
  'Celista',
  'Lee Creek',
  'Blind Bay',
  'Sorrento',
  'Salmon Arm',
  'Sicamous',
]