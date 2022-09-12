// Import stylesheets
import './style.css';

interface User {
  id: Number;
  name: String;
  imageUrl?: String
}

const user: User = {
  id: 1,
  name: 'Diego Hernandez',
};

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter - ${user.name}</h1>`;
