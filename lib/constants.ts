// Community content constants
export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Community", href: "#community" },
  { label: "Workshops", href: "#workshops" },
  { label: "Events", href: "#events" },
  { label: "Open Source", href: "#open-source" },
  { label: "Team", href: "#team" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
]

export const communityMission = {
  title: "Our Mission",
  subtitle: "Building African Tech Leaders Through Django",
  description:
    "Django Rwanda Community is dedicated to fostering a vibrant, inclusive ecosystem of developers across Africa. We believe in the power of community, collaboration, and open-source innovation to solve local challenges and create global opportunities.",
  values: [
    {
      title: "Community First",
      description: "We prioritize collaboration and mutual growth over competition.",
    },
    {
      title: "Open Source",
      description: "We believe in sharing knowledge and contributing to the global ecosystem.",
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

export const events = [
  {
    id: 1,
    title: "Monthly Meetup - Kigali",
    date: "Every 2nd Saturday",
    time: "2:00 PM",
    location: "Kigali Innovation Hub",
    description: "Join fellow Django developers for networking, knowledge sharing, and coffee.",
    attendees: 45,
  },
  {
    id: 2,
    title: "Django Bootcamp - Q1 2025",
    date: "January 15 - March 15",
    time: "Flexible",
    location: "Online + In-person",
    description: "Intensive bootcamp to launch your Django journey and build real projects.",
    attendees: 200,
  },
  {
    id: 3,
    title: "Open Source Contribution Day",
    date: "Every 4th Thursday",
    time: "6:00 PM",
    location: "Online",
    description: "Collaborate on open source projects and contribute to the Django ecosystem.",
    attendees: 78,
  },
]

export const openSourceProjects = [
  {
    id: 1,
    title: "Django-Africa",
    description: "A toolkit for building localized Django applications for African markets.",
    stars: 342,
    contributors: 28,
    url: "#",
  },
  {
    id: 2,
    title: "Swahili CMS",
    description: "A content management system built with Django, designed for African media outlets.",
    stars: 189,
    contributors: 15,
    url: "#",
  },
  {
    id: 3,
    title: "Local Commerce",
    description: "E-commerce platform for small businesses and entrepreneurs across Africa.",
    stars: 456,
    contributors: 42,
    url: "#",
  },
]

export const startupResources = [
  {
    id: 1,
    title: "Startup Toolkit",
    description: "Essential resources and guides for launching tech startups in Africa.",
    icon: "📚",
  },
  {
    id: 2,
    title: "Funding Directory",
    description: "Connect with investors, grants, and accelerators supporting African tech.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Mentorship Network",
    description: "Get guidance from experienced entrepreneurs and technical leaders.",
    icon: "👥",
  },
  {
    id: 4,
    title: "Local Problem Solutions",
    description: "Ideas and solutions for challenges specific to African communities.",
    icon: "💡",
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
    role: "Open Source & Tech Lead",
    image: "/placeholder-user.svg",
    bio: "Championing open source contributions and technical excellence.",
  },
  {
    id: 4,
    name: "Josiane",
    role: "Content & Media Lead",
    image: "/placeholder-user.svg",
    bio: "Creating engaging content and managing community communications.",
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
  }
]
