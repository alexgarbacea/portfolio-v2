import invGenerator from './Images/invoiceGenerator.png';
import passGenerator from './Images/passwordGenerator.png';
import planeGame from './Images/planeGame.png';

export const firstName = 'Alexandru'
export const lastName  = 'Gârbacea'
export const email     = 'alexgrb0909@gmail.com';


export const jobTitle = [
  'Software',
  'Engineer'
];

export const firstDescription = `Welcome to my portfolio. 
I specialize in developing and building exceptional applications for the web and much more.`;

export const social = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexgarbacea',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/alexgarbacea',
  }
];

export const navBar = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Experience',
    url: '#experience',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Contact',
    url: '#contact',
  }
]

export const workExperience = [
  {
    comp:     'Alten',
    title:    'Software Engineer',
    location: 'Munich, Germany',
    from:     { y: 2022, m: 1 },
    present:  true,
    description: (
      <>
      <li>
      Write modern, performant and maintainable code for diverse clients.
      </li>
      <li>
      Work in an agile enviroment with teams of engineers, designers, producers, and clients on a daily basis.
      </li>
      <li>
      Work with a variety of different languages, platforms, and frameworks such as JavaScript, TypeScript, React, Firebase, C++, Google Test Library.
      </li>
      </>
    )
  },
  {
    comp:     'Siemens',
    title:    'Software Engineer Intern',
    location: 'Brasov, Romania',
    from:     { y: 2021, m: 7 },
    to:       { y: 2022, m: 1 },
    present:  false,
    description: (
      <>
      <li>
      Worked on the development of multiple software platforms, tested software products, and
      reported test results to supervisors.
      </li>
      <li>
      Pro-actively participated in weekly team meetings and conducted reports in the
      progress of the projects.
      </li>
      <li>
      Collaborated with colleagues on the creation of a new management platform in the sector of Energy.
      </li>
      </>
    )
  },
  {
    comp:     'Freelancer',
    title:    'Software Developer',
    location: 'Brasov, Romania',
    from:     { y: 2019, m: 1 },
    to:       { y: 2021, m: 7 },
    present:  false,
    description: (
      <>
      <li>
        Devloped applications for multiple clients in various fields.
      </li>
      <li>
        Collaborated with a small team of developers for bigger projects.
      </li>
      <li>
        Developed and maintained code for client websites primarily using HTML, CSS, JavaScript, and jQuery.
      </li>
      </>
    )
  },
]

export const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Firebase'
]

// First link has to be main clickable link
export const myProjects = [
  {
    title: 'Invoice Manager',
    description: `An invoicing management platform that can be used by small companies. Keeping track of invoices and customers can be difficult, here is where a website like this comes in handy.`,
    tags: ['JavaScript', 'React', 'Firebase', 'CSS'],
    links: [
      {
        title: 'Extern', 
        url: 'https://alexgarbacea.github.io/react-invoice-generator-RO/'
      }
    ],
    picture: invGenerator
  },
  {
    title: 'Password Generator',
    description: `Generate a secure pasword or PIN with a simple click. Customize the result with in a few simple steps.`,
    tags: ['JavaScript', 'CSS', 'HTML'],
    links: [
      {
        title: 'Extern', 
        url: 'https://alexgarbacea.github.io/password-generator-js/'
      },
      {
        title: 'Github', 
        url: 'https://github.com/alexgarbacea/password-generator-js'
      },
    ],
    picture: passGenerator
  },
  {
    title: 'BattleShips',
    description: `The classic battleships game with a twist: planes instead of ships.`,
    tags: ['JavaScript', 'React', 'Game'],
    links: [
      {
        title: 'Extern', 
        url: 'https://alexgarbacea.github.io/find-airplane-game-react/'
      },
      {
        title: 'Github', 
        url: 'https://github.com/alexgarbacea/find-airplane-game-react'
      },
    ],
    picture: planeGame
  },
]