export type Muhurat = {
  slug: string;
  navLabel: string;
  pageTitle: string;
  eyebrow: string;
  headline: string;
  intro: string;
  quickAnswer: string;
};

export const MUHURATS: Muhurat[] = [
  {
    slug: "annaprashan-muhurat",
    navLabel: "Annaprashan Muhurat",
    pageTitle: "Annaprashan Muhurat 2026",
    eyebrow: "Sacred First Bites",
    headline: "Annaprashan 2026: A Complete Guide to Your Baby's First Food Ceremony",
    intro:
      "Annaprashan marks the moment a baby tastes solid food for the first time, and choosing the right Muhurat is believed to set the tone for a lifetime of good health and prosperity. This guide walks you through the meaning, timing and rituals so you can plan the day with confidence.",
    quickAnswer:
      "Annaprashan is traditionally performed between the 5th and 8th month for boys and the 5th and 7th month for girls, on a date chosen for a favourable Nakshatra, weekday and lunar phase.",
  },
  {
    slug: "namkaran-muhurat",
    navLabel: "Namkaran Muhurat",
    pageTitle: "Namkaran Muhurat 2026",
    eyebrow: "The Naming Ceremony",
    headline: "Namkaran 2026: Choosing the Right Day (and Name) for Your Newborn",
    intro:
      "Namkaran is the ceremony where a newborn is formally given their name, usually guided by the Nakshatra and Rashi active at the time of birth. A well-chosen Muhurat is thought to help the name carry good fortune through the child's life.",
    quickAnswer:
      "Namkaran is commonly performed on the 11th or 12th day after birth, though many families wait until an auspicious date within the first few months when the ritual falls on a favourable star and weekday.",
  },
  {
    slug: "car-bike-muhurat",
    navLabel: "Car / Bike Muhurat",
    pageTitle: "Car / Bike Muhurat 2026",
    eyebrow: "New Wheels, Right Timing",
    headline: "Vehicle Purchase Muhurat 2026: When to Buy and First Drive Your Car or Bike",
    intro:
      "Buying a new vehicle is a meaningful investment, and Vedic tradition recommends choosing a date and time with strong planetary support for safety and smooth ownership. This guide covers what to look for before you book delivery or take the first drive.",
    quickAnswer:
      "A good vehicle Muhurat avoids Rahu Kaal and inauspicious Tithis, favouring days ruled by benefic planets such as Wednesday or Friday, alongside a Nakshatra that supports travel and new beginnings.",
  },
  {
    slug: "marriage-muhurat",
    navLabel: "Marriage Muhurat",
    pageTitle: "Marriage Muhurat 2026",
    eyebrow: "For a Lifetime Together",
    headline: "Marriage Muhurat 2026: The Complete Guide to Choosing Your Wedding Date",
    intro:
      "Marriage is the most closely studied Muhurat in Vedic astrology, checked against both partners' birth charts along with the lunar calendar, Guru and Shukra Tara Bala, and seasonal restrictions like Chaturmas.",
    quickAnswer:
      "Auspicious wedding dates are chosen by matching both partners' charts, avoiding Chaturmas and inauspicious Tithis, and selecting a Muhurat with strong Jupiter and Venus placements.",
  },
  {
    slug: "bhoomi-pujan-muhurat",
    navLabel: "Bhoomi Pujan Muhurat",
    pageTitle: "Bhoomi Pujan Muhurat 2026",
    eyebrow: "Breaking Ground, the Right Way",
    headline: "Bhoomi Pujan Muhurat 2026: Timing Your Groundbreaking Ceremony",
    intro:
      "Bhoomi Pujan is performed before construction begins, seeking the blessings of Vastu Purush for a stable, prosperous build. The date is chosen carefully, since it's considered to influence the entire life of the structure.",
    quickAnswer:
      "The best Bhoomi Pujan dates fall on days with strong earth and stability significators, avoiding the monsoon-linked Chaturmas period and inauspicious directions as per Vastu Shastra.",
  },
  {
    slug: "griha-pravesh-muhurat",
    navLabel: "Griha Pravesh Muhurat",
    pageTitle: "Griha Pravesh Muhurat 2026",
    eyebrow: "A New Home, A Fresh Start",
    headline: "Griha Pravesh Muhurat 2026: Timing for Moving Into Your New Home",
    intro:
      "Griha Pravesh marks a family's first entry into a new home, and the timing is chosen to invite stability, health and good fortune from day one. This guide explains the traditions and how the right date is selected.",
    quickAnswer:
      "Griha Pravesh Muhurats are generally avoided during Chaturmas and the Shunya Masa period, with preference given to dates carrying a strong Moon and a Nakshatra associated with growth and shelter.",
  },
  {
    slug: "mundan-muhurat",
    navLabel: "Mundan Muhurat",
    pageTitle: "Mundan Muhurat 2026",
    eyebrow: "The First Haircut",
    headline: "Mundan Muhurat 2026: Choosing the Right Time for Your Child's First Haircut",
    intro:
      "Mundan, the ceremonial shaving of a child's first hair, is believed to clear inherited impurities and bless the child with strength and long life. Selecting a supportive Muhurat is an important part of the ritual.",
    quickAnswer:
      "Mundan is typically performed in the child's first, third or fifth year, on a date with a favourable Nakshatra and weekday, while avoiding the child's own birth month where possible.",
  },
];

export function getMuhuratBySlug(slug: string) {
  return MUHURATS.find((m) => m.slug === slug);
}
