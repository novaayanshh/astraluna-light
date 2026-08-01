import astro1 from "@/assets/astrologer-1.jpg";
import astro2 from "@/assets/astrologer-2.jpg";
import astro3 from "@/assets/astrologer-3.jpg";
import astro4 from "@/assets/astrologer-4.jpg";

export type Astrologer = {
  slug: string;
  name: string;
  tag: string;
  expertise: string;
  image: string;
  experience: string;
  language: string;
  rate: number;
  about: string;
  education: string[];
};

export const AI_ASTROLOGERS: Astrologer[] = [
  {
    slug: "raghav-trivedi",
    name: "Raghav Trivedi",
    tag: "Vedic",
    expertise: "Career",
    image: astro1,
    experience: "12 Years of Experience",
    language: "Hindi, English",
    rate: 20,
    about:
      "A Vedic astrologer specialising in career direction, job transitions and business timing. Reads the 10th house and Saturn's placement to help clients choose the right path forward.",
    education: [
      "Jyotish Acharya — Bharatiya Vidya Bhavan",
      "Certified KP Astrology Practitioner",
    ],
  },
  {
    slug: "kunal-shastri",
    name: "Kunal Shastri",
    tag: "Vedic",
    expertise: "Finance",
    image: astro2,
    experience: "9 Years of Experience",
    language: "Hindi, English, Gujarati",
    rate: 20,
    about:
      "Focuses on wealth astrology — reading the 2nd and 11th houses alongside Jupiter's transit to guide clients on investments, debt and long-term financial stability.",
    education: [
      "M.A. in Vedic Astrology, Banaras Hindu University",
      "Specialist in Financial & Muhurat Astrology",
    ],
  },
  {
    slug: "kailash-iyer",
    name: "Kailash Iyer",
    tag: "Vedic",
    expertise: "Health",
    image: astro3,
    experience: "15 Years of Experience",
    language: "Hindi, English, Tamil",
    rate: 20,
    about:
      "A Vedic astrologer specialising in medical astrology, reading the 6th and 8th houses to identify planetary influences on health and recommend remedial measures.",
    education: [
      "Jyotish Visharad — Vedic Astrology Institute",
      "20+ years studying Ayurvedic & Medical Astrology",
    ],
  },
  {
    slug: "neel-madhav",
    name: "Neel Madhav",
    tag: "Vedic",
    expertise: "Education",
    image: astro4,
    experience: "7 Years of Experience",
    language: "Hindi, English",
    rate: 20,
    about:
      "Guides students and parents through academic decisions by reading the 4th and 5th houses alongside Mercury's strength, helping identify the right stream and timing for exams.",
    education: [
      "Jyotish Acharya, Sanskrit & Vedic Studies",
      "Certified Career & Education Counsellor",
    ],
  },
  {
    slug: "aarav-sharma",
    name: "Aarav Sharma",
    tag: "Vedic",
    expertise: "Life Path, Personality & Destiny",
    image: astro1,
    experience: "5 Years of Experience",
    language: "Your Preferred Language",
    rate: 20,
    about:
      "A Vedic astrologer specializing in life purpose, personality analysis, karmic patterns, and spiritual growth. Provides practical guidance to help individuals understand their destiny and unlock their true potential.",
    education: [
      "Jyotish Acharya — Vedic Astrology Institute",
      "Certified Life Path & Karmic Pattern Analyst",
    ],
  },
  {
    slug: "vihaan-vyas",
    name: "Vihaan Vyas",
    tag: "Vedic",
    expertise: "Timing & Predictions",
    image: astro2,
    experience: "11 Years of Experience",
    language: "Hindi, English, Marathi",
    rate: 20,
    about:
      "Specialises in Dasha and transit-based predictions — precise event timing for marriage, career shifts and major life decisions using classical Vedic techniques.",
    education: [
      "Jyotish Ratna — All India Federation of Astrologers' Societies",
      "Advanced Dasha & Transit Prediction Specialist",
    ],
  },
  {
    slug: "amit-rao",
    name: "Amit Rao",
    tag: "Vedic",
    expertise: "Muhurat",
    image: astro3,
    experience: "10 Years of Experience",
    language: "Hindi, English, Telugu",
    rate: 20,
    about:
      "An auspicious-timing (Muhurat) specialist who helps clients choose the right date and time for weddings, griha pravesh, business launches and other important events.",
    education: [
      "Panchang & Muhurat Shastra, Kashi Vidvat Parishad",
      "15+ years conducting Muhurat consultations",
    ],
  },
  {
    slug: "sundeep-kumar",
    name: "Sundeep Kumar",
    tag: "Vedic",
    expertise: "Children",
    image: astro4,
    experience: "8 Years of Experience",
    language: "Hindi, English",
    rate: 20,
    about:
      "Focuses on child astrology — naming, education timing, health and behavioural guidance by reading the 5th house and the Moon's placement in a child's chart.",
    education: [
      "Jyotish Acharya, Child & Family Astrology",
      "Certified Naamkaran (Naming) Consultant",
    ],
  },
  {
    slug: "dev-malhotra",
    name: "Dev Malhotra",
    tag: "Vedic",
    expertise: "Property",
    image: astro1,
    experience: "13 Years of Experience",
    language: "Hindi, English, Punjabi",
    rate: 20,
    about:
      "A property and Vastu-focused astrologer who reads the 4th house alongside Vastu principles to guide clients on buying, selling and construction timing.",
    education: [
      "Vastu Shastri & Jyotish Acharya",
      "Certified Property Muhurat & Vastu Consultant",
    ],
  },
];

export function getAstrologerBySlug(slug: string) {
  return AI_ASTROLOGERS.find((a) => a.slug === slug);
}
