import type {
  AbroadJobListing,
  FeaturedDestination,
  SponsoredRelocationAd,
} from "@/types/abroad-jobs";

export const JOB_LISTING_COUNT = 942;

export const HERO_BACKGROUND_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsre3SVIwlQdeLzbOauqsxHHbyAhFGP-yHcMXAWxHbJyy93ceM3-gwZmIMyHeBf90LfyLwzeJyIBr9w6m5w50Iyap44slu_xd_8b-Ksjbg7EbapPVRamMX0h6UJrPsTK0SJ6qiDB-vmSZ-8gVEV9DeGceJzyPHL4HRKuhYzTgx8uR4I58mAg42JeTYVwT9tV_q8G9QkaDnJrWuUZyzZ4sJExHUuLZZxj4pPgBIYxLfhak5mas_dOP8I_A-LzvAiASwk0edJs8-ANZt",
  alt: "Earth from space at night with glowing network lines connecting global cities",
};

export const SAMPLE_EXCHANGE_RATE = {
  from: "1 USD",
  to: "0.93 EUR",
};

export const FEATURED_DESTINATIONS: FeaturedDestination[] = [
  {
    id: "germany",
    name: "Germany",
    openingsCount: 2400,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA413bqUjtJgBaQgg2sKDr4zOZW0YHCwIeObkAEL_xae_Ndk1KpQgqKZqnXR0SsopetByFblKH1mIE69S_rqG4slnuI87tQgbp_wjp7fu0ab2S312hcXh-bqd2dX9rKcgxlDC6g04ZqExU2W0LMJ0g60R8MarE29ky50iVQJXTaXXn6kqK-2r-ve12Ohs9tGAxT9OSihugH88wVRFI8F_B5M053SPkN8D7JNWch0tUYq33fQhcC1JXLe_9YRc4cpg0gfXMahRw_AQJq",
    imageAlt: "Berlin architecture at dusk with TV Tower",
  },
  {
    id: "uk",
    name: "United Kingdom",
    openingsCount: 1850,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwELXB4dIGrir8atfbjTa5eqC9J_CWB-Weob3L4Am9Jix2FM7F7QnR1-PLQD9VyPpeXHDuW3Q9XdoCxDCsTr-qfu_Ebq8UHzzBgZ9bvWwiRIa9JuJRa5fVhE74DbWcNOgKKt0eAksZCn7pbF53G-XsLsI4F2fkMsl2WiI8Ri6nx1jlFMp3mR5uTV2uYvylJYQwUKqXXgUxoB0fBiFx-73Y27Dekddf-z92v5pjzdrSSxqS8Ge4xXSyDTfHURk0nkbILsaX78kU6t-K",
    imageAlt: "London cityscape featuring the Shard and Tower Bridge",
  },
  {
    id: "uae",
    name: "UAE",
    openingsCount: 3120,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJF0_T2qzHOmqjvuWWIMcl2dBEZOZB_G07qid9N9HZkI5_kLHl6ZDpdJVvnkVH0Ce5a8ymHmQn8-ewdNSdvybbXvXIziMPSAWPfdwgKZc_RJrHA4oxJOfJID_wRf74bomJrmI2NIkBZ8lnZP6W9v_fyEDtcQj_EL1aXvFKuroYd4arK7Fm2JWreicge7bRocrPlyVmodtFdorml7YOBzFPnjd1YHHoXyrlf1nmTxEORjVv3S9xBBQevJ1voLhoD1LoJV09ecDOiOHl",
    imageAlt: "Dubai skyline with Burj Khalifa at night",
  },
  {
    id: "usa",
    name: "USA",
    openingsCount: 5600,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTH6VbJwsoy7hTvEzHTYcBK07gAHdNkhdtD2OIxUD4Pu8FPCq_iY0GZGDRjyY3tPGHho_AyqZiGcwjA1p9WexIGwbx9NIfYLWHZ4irzOl-8P9ZX3QSyRf0zYS12mPQKJQKXOL_R0ytvVnbGrx0zhYObhDJRuTapaCbXg830c4f6WAIIJG5D2qLjNkekYLOgDzyS6EHWI5GQ3oNnEyFRI9sNxO32mJnAqL5IzV6h203gFYJuReMmVOLt4-s6XXehvCrJxSGPVFbVk3R",
    imageAlt: "Modern tech office in Silicon Valley",
  },
];

export const ABROAD_JOB_LISTINGS: AbroadJobListing[] = [
  {
    id: "siemens-senior-engineer",
    title: "Senior Software Engineer",
    company: "Siemens Mobility",
    location: "Berlin, Germany",
    salary: "€85k - €110k",
    jobType: "Full-time",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGNi8WMxp5g3nK28t3iYkbn3KIbyzmZko3ajR4o1OQmFCu1k7uQFeqmVcsiWS4WH3TdUfcN5DwfQC-UEja4UojlIIQ0nydxq0_1ywfryEfYNBcSf4f0k2x9dEtmsX_VNgunsTwwN1XtL-PC3jlodDVlO2jUjWX_wicMT1VrGywhOB6ffHg2Une-IFzYe6Sh_YkCuDxmXfbxoe2CTHFykwIk3z_MqpF8-RKRodcofInddNcGT4VohH7JF4KcutBF7Eg5ttXduSxr5Lf",
    logoAlt: "Siemens logo",
    benefits: [
      { label: "Visa Sponsorship", variant: "primary" },
      { label: "Relocation Package", variant: "tertiary" },
    ],
    status: {
      type: "deadline",
      label: "Ends in 2d 04h",
      urgent: true,
    },
  },
  {
    id: "emirates-project-manager",
    title: "Project Manager - Global Logistics",
    company: "Emirates Group",
    location: "Dubai, UAE",
    salary: "$120k - $145k",
    jobType: "Contract",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqXHhUkhhBpchTStaJNvjgA3LbKPZEKv_481LxLBxgIN4NZKRhpKqQbAeYi1Gr9qnQ7P7yetE2-8Hq8kii58pIOoLDIrEbc1YVJUHvzF7fFrL0zTaZmL3QTw7FjJihqAAZB2AeOOq8luyKOqGGvJN-vdcPKc2n0rPSeYQs-uBL7n9AOsKYZ09F6UfAYoHn183-7qg7oGq59qK8l-1p4SBOdEX8sFEjCjpiBShOxXI89bq11ZiFBxuANCm7rna1ZRN5aHH5EjqJOuWv",
    logoAlt: "Emirates logo",
    benefits: [
      { label: "Tax-Free Salary", variant: "primary" },
      { label: "Housing Provided", variant: "secondary" },
    ],
    status: {
      type: "applications",
      label: "Applied 120 times",
    },
  },
  {
    id: "booking-product-designer",
    title: "Product Designer (UX/UI)",
    company: "Booking.com",
    location: "Amsterdam, Netherlands",
    salary: "€70k - €95k",
    jobType: "Full-time",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz5kzCXYfxtMl48W8SJMH_FdQ4QfEBOci71IE6o60d176z271brbjJLdwz8CnktLh_Upf92SZcTRGknOyDKiSW2bDaOj1x3CEBn6aohs-xDW1oTOMm71DyhAMpOPydL21KQUix3haP86fxIkupL12ovcfUijeXJE2E7vKT0K9wIKuAFYL8R9XqCxJS69tblIHCrjJEwB4Fpt7N7yKxI2kJWpzJktqLuCfXuN5AXPVRUY84VeVCMYfUsRJx3yTtLRs69-BzE8mltl-2",
    logoAlt: "Booking.com logo",
    benefits: [
      { label: "Visa Sponsorship", variant: "primary" },
      { label: "Remote Friendly", variant: "secondary" },
    ],
    status: {
      type: "deadline",
      label: "Ends in 8h 15m",
      urgent: true,
    },
  },
];

export const SPONSORED_RELOCATION_AD: SponsoredRelocationAd = {
  title: "Relocate to Canada",
  description: "Express Entry assessment for Tech Professionals.",
  ctaLabel: "Check Eligibility",
};
