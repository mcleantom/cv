import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tom McLean",
  initials: "TM",
  location: "Brighton, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Brighton",
  about:
    "Full Stack Engineer and Naval Architect",
  summary:
    "Full Stack Engineer and Naval Architect with experience in harnessing technology and simulation to optimize ship designs.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQFQmAJJclJ6sw/profile-displayphoto-shrink_800_800/0/1519645453494?e=1710979200&v=beta&t=rR8TWjLW3_bNi58bz4kxjkgK8k3TJy0WrBO8S3rmg9M",
  personalWebsiteUrl: "https://mcleantom.github.io/cv/",
  contact: {
    email: "mcleantom97@gmail.com",
    tel: "+44 7506833139",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mcleantom",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tom-mclean-/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southampton",
      degree: "MEng Ship Science, Naval Architecture and Marine Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "BAR Technologies",
      link: "https://www.bartechnologies.uk/",
      badges: [],
      title: "Simulation and Performance Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Created a full stack web application for route optimization of container ships.",
    },
  ],
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "React",
    "Machine Learning",
  ],
  projects: [
    {
      title: "ShipSEAT",
      techStack: [
        "Python",
        "C++",
        "JavaScript",
        "AWS"
      ],
      description: "Ship route optimization platform",
      logo: ConsultlyLogo,
      link: {
        label: "bartechnologies.uk",
        href: "https://www.bartechnologies.uk/",
      },
    },
    {
      title: "MNIST-GAN",
      techStack: ["Python", "PyTorch"],
      description: "Generative Adversarial Network for generating handwritten digits",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/mcleantom/MNIST-GAN"
      }
    }
  ],
} as const;