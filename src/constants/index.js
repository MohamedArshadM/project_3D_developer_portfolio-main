import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "infigoes",
    icon: starbucks,
    iconBg: "#383E56",
    date: "jan 2024 - ",
    points: [
      "Designing and implementing an intuitive admin panel interface using React.js.",
      "Creating reusable components for various parts of the admin panel, such as dashboards, forms, tables, and modals.",
      "Managing state efficiently using state management libraries like Redux or Context API.",
      "Integrating RESTful APIs to enable data management and interactions within the admin panel.",
      "Implementing authentication and authorization mechanisms to secure the admin panel.",
      "Ensuring responsive design for the admin panel to provide a seamless experience across different devices and screen sizes.",
      "Using CSS-in-JS solutions or pre-processors like SASS to style components and maintain consistency.",
    ],
},
{
  title: "React Developer",
  company_name: "infigoes",
  icon: tesla,
  iconBg: "#E6DEDD",
  date: "Jan 2024 - ",
  points: [
    "Developed and maintained an e-commerce platform with product listings, shopping cart, and checkout functionalities using React.js.",
    "Integrated secure payment gateways (e.g., Stripe, PayPal) and implemented user authentication and authorization.",
    "Implemented responsive design principles to ensure a seamless shopping experience across various devices.",
    "Collaborated with designers, backend developers, and product managers to create high-quality and user-friendly features.",
    "Optimized application performance and SEO to enhance user experience and search engine visibility.",
  ],
},
  {
    title: "Web Developer",
    company_name: "TechTuxture",
    icon: shopify,
    iconBg: "#383E56",
    date: "jun 2023 - jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "TechTuxture",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "jun 2023 - jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "A fully-featured e-commerce platform enabling users to browse products, add items to their cart, and complete purchases securely. Features include user authentication, payment integration, and an admin dashboard for managing inventory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with the actual image variable for e-commerce website
    source_code_link: "https://github.com/",
  },
  {
    name: "Phone Case Customizer",
    description:
      "A web application that allows users to upload photos and customize phone cases. Users can select a phone model, upload an image, and adjust the image placement on the case before adding it to the cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with the actual image variable for photo booth project
    source_code_link: "https://github.com/",
  },
  {
    name: "Admin Panel",
    description:
      "An admin panel for managing web application content, user accounts, and system settings. Includes features for data visualization, user role management, and activity logging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with the actual image variable for admin panel project
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };
