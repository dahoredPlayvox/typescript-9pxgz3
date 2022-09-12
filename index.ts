// Import stylesheets
import './style.css';

interface User {
  id: Number;
  firstname: String;
  lastname: String;
  imageUrl?: String;
}

const user: User = {
  id: 1,
  firstname: 'Diego',
  lastname: 'Hernandez',
};

const fullName = 'John Doe';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<aside class="profile-card">
  <header>
    <!-- here’s the avatar -->
    <a target="_blank" href="#">
      <img src="https://down.imgspng.com/download/0720/thinking_man_PNG11606.png" class="hoverZoomLink">
    </a>

    <!-- the username -->
    <h1>
      ${fullName}
    </h1>

    <!-- and role or location -->
    <h2>
      Position
    </h2>
  </header>

  <!-- bit of a bio; who are you? -->
  <div class="profile-bio">
    <p>
      Bio
    </p>
  </div>

  <!-- some social links to show off -->
  <ul class="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i class="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
        <i class="fa fa-behance"></i>
      </a>
    </li>
  </ul>
</aside>
`;
