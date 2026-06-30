// Community content constants

// Single-page navigation. Hrefs are absolute ("/#...") so the anchors also
// resolve from the standalone /workshops and /events pages.
export const navigationItems = [
  { label: "Community", href: "/#community" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
]

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for every external link / contact channel on the site.
// Edit a value here and it updates everywhere (header, hero, footer, contact…).
// `email` and `phone` are raw values — components add the mailto:/tel: prefix.
// TODO: replace the placeholder values below with the real ones.
// ─────────────────────────────────────────────────────────────────────────────
export const communityLinks = {
  // Primary "Join Community" entry point — drives every Join/Register CTA
  // (header, hero, team, events, footer "Get Involved" + "Join Us").
  whatsapp: "https://chat.whatsapp.com/GvIF9Mw1E2ZBf2S5wazfOo?mode=gi_t",

  // Social / code
  github: "https://github.com/djangorwanda",
  twitter: "https://twitter.com/djangorwanda",

  // Contact details (raw — no mailto:/tel: prefix)
  email: "djangorwandacomunity@gmail.com",
  phone: "+250788000000", // TODO: real phone number (or remove usages)
  location: "Kigali Innovation Hub, Kigali, Rwanda",
}

export const communityMission = {
  title: "Our Mission",
  subtitle: "Building African Tech Leaders Through Django",
  description:
    "Django Rwanda Community is dedicated to fostering a vibrant, inclusive ecosystem of developers across Africa. We believe in the power of community, collaboration, and innovation to solve local challenges and create global opportunities.",
  values: [
    {
      title: "Community First",
      description: "We prioritize collaboration and mutual growth over competition.",
    },
    {
      title: "Innovation",
      description: "We empower local problem-solving and entrepreneurial thinking.",
    },
    {
      title: "Inclusivity",
      description: "Everyone is welcome. We celebrate diverse backgrounds and experiences.",
    },
  ],
}

export const workshops = [
  {
    id: 1,
    title: "Django Fundamentals",
    description: "Master the basics of Django framework and build your first web application.",
    level: "Beginner",
    duration: "4 weeks",
    image: "/django-web-development.jpg",
  },
  {
    id: 2,
    title: "Advanced Django Patterns",
    description: "Deep dive into design patterns, optimization, and scalable architecture.",
    level: "Intermediate",
    duration: "6 weeks",
    image: "/advanced-programming.jpg",
  },
  {
    id: 3,
    title: "Building APIs with Django REST",
    description: "Create powerful, scalable APIs using Django REST Framework.",
    level: "Intermediate",
    duration: "4 weeks",
    image: "/api-development.jpg",
  },
  {
    id: 4,
    title: "Full-Stack Django & React",
    description: "Build modern full-stack applications combining Django backend with React frontend.",
    level: "Advanced",
    duration: "8 weeks",
    image: "/full-stack-development.jpg",
  },
]

// Events. `status` drives the Upcoming vs Past subsections.
// Optional fields render only when set: `time`, `location`, `attendees` (>0),
// `registerUrl` (upcoming — falls back to the WhatsApp community), and
// `recapUrl` (past — links a recording / photos / writeup).
export const events = [
  // ── Upcoming ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Python/Django July Meetup 2026",
    date: "Friday, 24 July 2026",
    time: "2:00 PM",
    location: "GIZ Digital Transformation Center, Rwanda",
    description:
      "A community meetup for Python and Django developers — talks, networking, and hands-on sessions.",
    status: "upcoming",
    attendees: 0,
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSetBc2-fgyo1IRR3_8hQ1mMDc-LCIwD5fWv7FxcsfXUTrf2Ww/viewform",
    recapUrl: "",
  },
  // ── Past ────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Python & Django Rwanda Bootcamp",
    date: "February – April 2026",
    time: "",
    location: "",
    description:
      "A 3-month intensive bootcamp covering Python and Django through hands-on, real-world projects.",
    status: "past",
    attendees: 0,
    registerUrl: "",
    recapUrl: "", // TODO: link recording / photos / writeup
  },
]

export const teamMembers = [
  {
    id: 1,
    name: "Francis",
    role: "Community Manager",
    image: "/placeholder-user.svg",
    bio: "Building connections and fostering an inclusive community environment.",
  },
  {
    id: 2,
    name: "Iradukunda Fils",
    role: "Django Lead",
    image: "/placeholder-user.svg",
    bio: "Driving Django education and best practices across the community.",
  },
  {
    id: 3,
    name: "Jean Paul Elisa NIYOKWIZERWA",
    role: "Tech Lead",
    image: "/placeholder-user.svg",
    bio: "Championing technical excellence and engineering best practices.",
  },
  {
    id: 5,
    name: "Naphtal",
    role: "Events & Program Coordinator",
    image: "/placeholder-user.svg",
    bio: "Organizing impactful events and programs for community growth.",
  },
  {
    id: 6,
    name: "Providence",
    role: "Django Girls Community Lead",
    image: "/placeholder-user.svg",
    bio: "Empowering women in tech through Django Girls initiatives.",
  },
  {
    id: 7,
    name: "Didas Mbarushimana",
    role: "Community Advocate",
    image: "/placeholder-user.svg",
    bio: "Promoting community values and advocating for member needs.",
  }
]
