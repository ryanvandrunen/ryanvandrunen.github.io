import {
  javascript,
  html,
  css,
  reactjs,
  git,
  docker,
  csharp,
  python,
  unwordle,
  metro,
  kp9,
  java,
  threejs,
  vue,
  bootstrap,
  tc,
  remnant,
  qweb
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
    name: 'docker',
    icon: docker,
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
    name: 'threejs',
    icon: threejs
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
    title: 'Team Lead',
    company_name: 'Queen\'s Web Development Club',
    icon: qweb,
    iconBg: '#333333',
    date: 'Jan 2024 - Present'
  },
  {
    title: 'Produce Clerk',
    company_name: 'Metro Inc',
    icon: metro,
    iconBg: '#333333',
    date: 'July 2022 - Dec 2023',
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
    name: 'Unwordle',
    description: 'Modeled a rendition of the game Wordle using bauhaus, a library for building logical theories with Python.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
    ],
    image: unwordle,
    repo: 'https://github.com/ryanvandrunen/Unwordle-SAT-Solver'
  },
  {
    id: 'project-2',
    name: 'Remnant Studios',
    description: 'Created and deployed a website for a friend\'s independent project, using HTML/CSS, JavaScript, and slick for a responsive image carousel.',
    tags: [
      
    ],
    image: remnant,
    repo: 'https://github.com/jctjad/jctjad.github.io',
    demo: 'https://www.remnant-studios.com'
  }
];

export { technologies, experiences, projects };
