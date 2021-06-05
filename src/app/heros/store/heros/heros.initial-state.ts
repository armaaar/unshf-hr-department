import { Hero } from './heros.interface';

export const herosInitialState = <Hero[]>[
  {
    id: 1,
    name: 'MR. ROBOT',
    powers: [
      'Coding with VIM',
      'Know Angular'
    ],
    rate: 4,
    photo: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/mrrobot-920x584.jpg'
  },
  {
    id: 2,
    name: 'Richard Stallman',
    powers: [
      'Freedom Protector'
    ],
    rate: 4,
    description: 'Richard Matthew Stallman, also known by his initials, rms, is an American free software movement activist and programmer. He campaigns for software to be distributed in a manner such that its users receive the freedoms to use, study, distribute, and modify that software.'
  },
  {
    id: 3,
    name: 'Tim Berners-Lee',
    powers: [
      'Moving Things Through HTTP',
      'The director of the World Wide Web Consortium (W3C)'
    ],
    rate: 4
  }
];

export default herosInitialState;
