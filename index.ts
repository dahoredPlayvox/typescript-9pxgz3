// Import stylesheets
import './style.css';

/**
 * TEST
 * Create a interface with the next attributes
 * - firstname
 * - lastname
 * - imageUrl
 * - resume
 * - position (extende of position type)
 * - phone
 *
 * assign the types you consider
 * Use the interface and types in a const with name user
 *
 * update and use the function getFullName to get full name with the attributes (firstname, lastname)
 * use the function gePhone
 * fix the HTML code
 * Add social media
 * */

/**
 * ----------------------------------------------
 * Add and update your code here
 * ----------------------------------------------
 * */

type Position = 'Developer' | 'QA' | 'Leader';

interface User {
  firstname: String;
  lastname: String;
  imageUrl: String;
  resume: String;
  position: Position;
  phone: Number;
}

function getFullName(user: User): string {
  return `${user.firstname} ${user.lastname}`;
}

function getPhone(user: User, prefix = '+57'): string {
  return `(${prefix}) ${user.phone}`;
}

const user: User = {
  firstname: 'Diego',
  lastname: 'Hernandez',
  imageUrl: 'https://ca.slack-edge.com/T49UM3KM1-ULA4FS7FU-fc1e831e1d94-512',
  resume: 'Hi, I am frontend developer',
  phone: 3004567892,
  position: 'Developer',
};

/**
 * ----------------------------------------------
 * Add and update your code here
 * ----------------------------------------------
 * */

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<aside class="profile-card">
  <header>
    <!-- here’s the avatar -->
    <a target="_blank" href="#">
      <img src="${user.imageUrl}" class="hoverZoomLink">
    </a>

    <!-- the username -->
    <h1>
      ${getFullName(user)}
    </h1>

    <!-- and role or location -->
    <h2>
      ${user.position}
      <br/>
      <small>${getPhone(user)}</small>
    </h2>
  </header>

  <!-- bit of a bio; who are you? -->
  <div class="profile-bio">
    <p>
    ${user.resume}
    </p>
  </div>

  <!-- some social links to show off -->
  <ul class="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/">
        <i class="fa fa-github"></i>
      </a>
    </li>
  </ul>
</aside>
`;
