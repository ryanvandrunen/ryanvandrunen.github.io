import {
  javascript,
  html,
  css,
  reactjs,
  git,
  csharp,
  python,
  unwordle,
  metro,
  kp9,
  java,
  vue,
  bootstrap,
  tc,
  remnant,
  qweb,
  bash,
  medsupply,
  frostfall
} from '../assets';

export const navLinks = [
  {
    id: 'tech',
    title: 'Technology'
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience'
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'bash',
    icon: bash,
  },
  {
    name: 'csharp',
    icon: csharp
  },
  {
    name: 'java',
    icon: java
  },
  {
    name: 'vue',
    icon: vue
  },
  {
    name: 'bootstrap',
    icon: bootstrap
  }
];

const experiences = [
  {
    title: 'Engineering & Maintenance Summer Student', 
    company_name: 'TC Transcontinental',
    icon: tc,
    iconBg: '#333333',
    date: 'May 2024 - Aug 2024'
  },
  {
    title: 'Team Lead',
    company_name: 'Queen\'s Web Development Club',
    icon: qweb,
    iconBg: '#333333',
    date: 'Jan 2024 - April 2024'
  },
  {
    title: 'Produce Clerk',
    company_name: 'Metro Inc',
    icon: metro,
    iconBg: '#333333',
    date: 'July 2022 - Aug 2024',
  },
  {
    title: 'Software Developer CO-OP',
    company_name: 'KP9 Interactive',
    icon: kp9,
    iconBg: '#333333',
    date: 'Jan 2022 - June 2022',
  },
  {
    title: 'Summer Student',
    company_name: 'TC Transcontinental',
    icon: tc,
    iconBg: '#333333',
    date: 'July 2019 - August 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Medsupply Ukraine',
    description: 'Developed a website for Medsupply Ukraine, a club at Queen\'s University.',
    image: medsupply,
    repo: 'https://github.com/ryanvandrunen/medsupply-ukraine',
    demo: 'https://medsupply-ukraine.web.app'
  },
  {
    id: 'project-2',
    name: 'Frostfall',
    description: 'A 2D vertical platformer made for a Game Development course with a team of 5.',
    image: frostfall,
    repo: 'https://github.com/hjenkins04/CISC226-Game-Development-Project',
    demo: 'https://hjenkins2004.itch.io/frostfall2d'
  },
  {
    id: 'project-3',
    name: 'Unwordle',
    description: 'Modeled a rendition of the game Wordle using bauhaus, a library for building logical theories with Python.',
    image: unwordle,
    repo: 'https://github.com/ryanvandrunen/Unwordle-SAT-Solver'
  },
  {
    id: 'project-4',
    name: 'Remnant Studios',
    description: 'Created and deployed a website for a friend\'s independent project, using HTML/CSS, JavaScript, and slick for a responsive image carousel.',
    image: remnant,
    repo: 'https://github.com/jctjad/jctjad.github.io',
    demo: 'https://www.remnant-studios.com'
  }
];

export { technologies, experiences, projects };
