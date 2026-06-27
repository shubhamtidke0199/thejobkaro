import type {
  GovernmentJobListing,
  RecruitmentAgency,
  RecommendedGovernmentJob,
  SponsoredPrimeOffer,
  UrgentAlert,
} from "@/types/government-jobs";

export const ACTIVE_OPENINGS_COUNT = 24500;

export const RECRUITMENT_AGENCIES: RecruitmentAgency[] = [
  {
    name: "UPSC",
    activeCount: 12,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvXaJrg0qdCJlC1J2_-OKTCFBW0PV7EZtz9PL96JViPSbPrvatyhs-KQZkfCuAppzNNoHq3NO6irIlkkkenqHBOnB2fQrD0-lSgw3-qJVv15hyZVsLqHowdw6C264ylMAxAaZTgMHeXlgy14zjeFlpq8TSIaAOrRLKayPz9SVlu_pLiR9YVOOth6p2mpBzXJqhWnoMIHH2jD8RbYRscHXFaePsHx67WvoXmT5PTKYxIpnxcAVlr2KMggzJW3bYeh7u7iEz6yHt-i5",
    logoAlt: "Union Public Service Commission UPSC logo",
  },
  {
    name: "SSC",
    activeCount: 48,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYtKsRHZ0lqcXglqyKV-by58tO2oiVAnSd4DX0TB1gPxyNcCEmkZMlPTyHei_mF-Skvo5SCirZ_gFr8vDHYyP3Yzq5GkZ9kyZfgs35PqtaUB6ojp6HUvfSoGtP3LPAsg0_aZYO49ZCIcN88vwD11wVlN6ZOOmNr-a8V-oF7k0F-FAnlyLtEhuQhNh26XbNt2fRa0xY9j7N9NPnRvQLienK-I2153iFAlwOyAkUrWhBJnlfINGT5WO32TTOXT98Rm3nxiaH7jwmgDoP",
    logoAlt: "Staff Selection Commission SSC emblem",
  },
  {
    name: "Railways",
    activeCount: 156,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtL43oFcllf8r_SojW-ZDlRyJ6wKQzK-dRCXcuA0q4YJHftenX9MGmvwemX7PYlRjtxQmBwDGMRbeBwnVu4bl5IHbKRrVmQ0g07w6Nh7Lp--ru9M0b3DFl67FRCklBtqh4iLJWZ7DRWbLKJoKpxu0mxtx6tV4dnThMU1yEqwlkoziqz3AEu8vmFuYU4awXHbP2iQGyceMP1Wp-uge30OLj0GdWA8pi66WrtHVDC2pfAGViMQrREpkwZ-ufoiiDYgU_YGTGgAFEZyJA",
    logoAlt: "Railway Recruitment Board RRB emblem",
  },
  {
    name: "Banking",
    activeCount: 82,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9A6FKToKwhJFE2Zqq5oCYxKLb8DjDqNFfFEX3ISS0s3f22Mr2ErodTCnPisGe81zELssJ2fpr9hevWwuGSl0SzYVVqTeK6e5CEcJh8Gg-VQyB0_Xcr9tAkf1myHa4Jp_XPP9uTR1YoJjC19FO2if_FlHMbQflsRE2OOSUnn7qUKvJspsGdHVJpxuH3qbopoZA4Wm9yQtIyGNsLcGjRCVWba0ohGlHIbeIMtoflA8JjUZMmtRIMDrkV2dxg6h9JSB_0l4rxvTdQGaN",
    logoAlt: "IBPS banking sector logo",
  },
];

export const RECOMMENDED_GOVERNMENT_JOBS: RecommendedGovernmentJob[] = [
  {
    title: "Junior Engineer (Mechanical)",
    organization: "BHEL",
    location: "Delhi/NCR",
    detail: "₹55,000 - ₹75,000",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtppDSNdplSMMyQIko4z1H1N7rUdSn6CIz10yWzM5Wd5TQ3Gv23xzHoGid2IOVVeAOhK1w-MVRN0iqdcuQco7sJBTnJDNYvpWDOr3tijO-lzWncTMcnwyTtlYPCUlPdwDcMN-aZb76WGU8KWfemn1Pe9C4AzEGaEeJl9i9FSCRFqhpFU7cKDUmt5zSzlg3MgaopoTToij4afr2A1BOr1C15m1hm3DO5vdcPwC_JpaPGUoGMegjFi-hN8gQGm5o3VeQslBqMfJ9imsd",
    logoAlt: "Bharat Heavy Electricals Limited BHEL logo",
  },
  {
    title: "Scientific Assistant - B",
    organization: "ISRO",
    location: "Remote/Bengaluru",
    detail: "Group B Post",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmWipO4od7IkEvKq-Lk4D4psP_d0yOsEBa0JmHKDu8oc1K3Z-XZKO97JSlp191CfqFlJY6XLBW6733d3a2VJi8dxBymypaQd2jqbyqb4uMriD4E0t92iUEoKfwhIDD2Z7kmHUeNajw02e0Qdk6dh-QOLRT1Hv58WQ4plKqKQ-k-00mwdXWpUptg7twtpg2gXiIjOm2wnL2Hgx7hL3VQWtRRGQjrHJ9TUo_tIel_g-NzRGNMWX8Geu9QYvr-cG5KS4qPxT8lL8UZ315",
    logoAlt: "Indian Space Research Organisation ISRO logo",
  },
];

export const GOVERNMENT_JOB_LISTINGS: GovernmentJobListing[] = [
  {
    id: "ntpc-executive-trainees",
    title: "Executive Trainees in Finance & HR",
    description:
      "NTPC Limited invites applications from qualified CA/ICWA and MBA professionals for pan-India postings.",
    location: "All India",
    qualification: "Graduate/PG",
    postedAt: "Posted: 2h ago",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUSuwFplx6Cn3qv0J0yl7uXW3gU0gOxM1MMlIPuYyliWkTvrFiCW2wvuWO8caYYi62SgNINwJ_lRGwmAJbpFMf9OWsGuJH25lzbCfPQwD7X-COJ8gaY-DjO5v-Tp15vdJ1z9JyaVfHrwaGDf8JWyhrpH7MV-6QWxtG5hCZTZErL0IR9Y_0_HEJvCBKrAybuKo6YZsxfDJf-fTl2CW6ljYe3AfamVv5SVeOqsopQhDZlT-hOcdFV_7tJqGCvz1_rg-LcaCczfH_PWzD",
    logoAlt: "National Thermal Power Corporation NTPC logo",
    tags: [
      { label: "Maharatna PSU", variant: "tertiary" },
      { label: "Direct Recruitment", variant: "primary" },
    ],
    category: "psu",
  },
  {
    id: "sbi-po-2024",
    title: "SBI Probationary Officers (PO) 2024",
    description:
      "Recruitment for 2000+ vacancies across branches. Preliminary examinations scheduled for November.",
    location: "Pan India",
    qualification: "Any Degree",
    postedAt: "Posted: 5h ago",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgUQGzgBs4YMcE3-J88Gk7mUDC1J7cKCEl3VrqfOAgoyVhY_EYkCrunrHfquujlTxSmtWFiN3uT5ZFbqqivavKzmh8o4HRwiYqh_phT0Q1Kycb_KjzcQGTOMMJakaX6qP0dCgAwxKlffMmXT-Jkwhf6z_ATRxIdxQ1ElmpWhnpNJ5wkdG03SkPAu9a8Y2Ca3kioNPJDqAVQH9L0qguO4bcL9CH_s-CMy0_A7FCA6h1gYGYsMMvKU6XO4mCaWnN1VENSavVXpLwl4R9",
    logoAlt: "State Bank of India SBI logo",
    tags: [
      { label: "Banking", variant: "secondary" },
      { label: "Mass Hiring", variant: "primary" },
    ],
    category: "central",
  },
];

export const URGENT_ALERTS: UrgentAlert[] = [
  {
    id: "navy-agniveer",
    urgencyLabel: "CLOSING TODAY",
    title: "Indian Navy Agniveer",
    ctaLabel: "Apply Immediately →",
    href: "#",
    urgencyLevel: "high",
  },
  {
    id: "bihar-stet",
    urgencyLabel: "2 DAYS LEFT",
    title: "Bihar STET 2024",
    ctaLabel: "Complete Form →",
    href: "#",
    urgencyLevel: "medium",
  },
  {
    id: "drdo-apprentice",
    urgencyLabel: "3 DAYS LEFT",
    title: "DRDO Tech Apprentice",
    ctaLabel: "Register Now →",
    href: "#",
    urgencyLevel: "low",
  },
];

export const SPONSORED_PRIME_OFFER: SponsoredPrimeOffer = {
  title: "Master the UPSC CSE with JobKaro Prime.",
  description:
    "Unlimited Mock Tests, Previous Year Papers & Expert Mentorship.",
  ctaLabel: "Explore Prime",
};
