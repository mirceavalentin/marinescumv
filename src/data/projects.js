import calcImg  from '../assets/calculator.png';
import snakeImg from '../assets/snake.png';
import assemImg  from '../assets/assembly.png';
import chatImg from '../assets/chatroom.png';

const projects = [
  {
    id: 1,
    title: 'Dynamic iPhone Style Calculator',
    image: calcImg,
    description: 'An iPhone-style calculator built with JS and HTML/CSS.',
    link: '/projects/ios-calculator/calculator.html'
  },
  {
    id: 2,
    title: 'Snake Game (HTML/CSS/JS)',
    image: snakeImg,
    description: 'Classic Snake game made with vanilla JS.',
    link: '/projects/snake-game/snake.html'
  },
  {
    id: 3,
    title: 'Python3 Chatroom w/Sockets',
    image: chatImg,
    description: 'Small chatroom using Python3 sockets. Tutorial to run and use the code for this project is available below!',
    link: 'hhttps://github.com/mirceavalentin/Python3-Chatroom'
  },
  {
    id: 4,
    title: 'Small x86-64 AT&T Assembly Projects',
    image: assemImg,
    description: 'These include a Factorial, Intrement, Power and a simplifed Unix "diff" program.',
    link: 'https://github.com/mirceavalentin/Assembly-Programs'
  },
];

export default projects;