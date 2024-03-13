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
      company: "INEOS Britannia",
      link: "https://www.ineosbritannia.com/en/home.html",
      badges: ["Python", "C++", "JavaScript", "Docker", "Azure", "ZMQ", "Unreal Engine"],
      title: "Simulator Developer",
      logo: ParabolLogo,
      start: "2024",
      end: "-",
      description: "Develop the VR simulator for INEOS Britannia."
    },
    {
      company: "BAR Technologies",
      link: "https://www.bartechnologies.uk/",
      badges: ["Python", "C++", "JavaScript", "AWS", "Docker", "Terraform", "Jenkins"],
      title: "Simulation and Performance Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        `Led the development of a full stack web application for route optimization of container ships. The backend was build with FastAPI, with the routing algorithm written in C++. The application is deployed to AWS using automated CI/CD pipelines with Jenkins, Docker and Terraform.`,
    },
    {
      company: "Seaspeed Marine Consulting",
      link: "https://www.seaspeed.com/",
      badges: ["Python", "Monte Carlo Simulation"],
      title: "Naval Architect",
      logo: ParabolLogo,
      start: "2020",
      end: "2021",
      description: "Developed a Monte Carlo stochastic simulation tool for the fleet optimization of offshore wind farm support vessels. The tool was written in Python and used to optimize the fleet size and vessel types based on the distance offshore, size of wind farm and weather conditions.",
    }
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
        label: "https://www.bartechnologies.uk/project/shipseat/",
        href: "https://www.bartechnologies.uk/project/shipseat/",
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
    },
    {
      title: "MNIST-Diffusion",
      techStack: ["Python", "PyTorch"],
      description: "Diffusion Model for generating handwritten digits",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/mcleantom/MNIST-Diffusion"
      }
    },
    {
      title: "PBLM",
      techStack: ["Python", "PyTorch"],
      description: "Physics Based Learning Methods",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/mcleantom/PBLM_from_scratch"
      }
    }
  ],
} as const;
