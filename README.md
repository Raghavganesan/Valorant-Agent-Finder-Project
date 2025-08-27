  <h1> Valorant Agent Finder</h1>
   <p>
    <strong>Valorant Agent Finder</strong> is a front-end project that allows users to search and explore 
    details about agents from the popular game <b>Valorant</b>.  
    The application fetches live agent data using the official <a href="https://valorant-api.com" target="_blank">Valorant API</a>.
  </p>

   <h2>🚀 Features</h2>
  <ul>
    <li>🔍 <b>Search Agent:</b> Enter an agent’s name to instantly fetch their details.</li>
    <li>🖼️ Displays agent portrait and bio fetched from the API.</li>
    <li>🌙 <b>Theme Toggle:</b> Switch between light and dark themes with one click.</li>
    <li>✨ Smooth modern UI with custom font styling (<code>Orbitron</code>).</li>
    <li>📱 Responsive design for desktop and mobile use.</li>
  </ul>


   <h2>🛠️ Tech Stack</h2>
  <div class="highlight">
    <ul>
      <li><b>HTML5</b> – Structure of the page</li>
      <li><b>CSS3</b> – Styling, gradients, shadows, and responsive design</li>
      <li><b>JavaScript (ES6)</b> – API calls, DOM manipulation, theme toggling</li>
      <li><b>Valorant API</b> – Source of agent data (<a href="https://valorant-api.com/v1/agents" target="_blank">/v1/agents</a>)</li>
    </ul>
  </div>


   <h2>⚡ How It Works</h2>
  <ol>
    <li>User types an agent’s name into the input box.</li>
    <li>JavaScript fetches agent data from <code>https://valorant-api.com/v1/agents</code>.</li>
    <li>If the agent exists, their portrait, name, and description are displayed.</li>
    <li>If not found, a message <b>“Agent Not Found!!”</b> is shown.</li>
    <li>Users can switch between normal mode and dark mode with the theme button.</li>
  </ol>


<h2>📂 Project Structure</h2>
  <ul>
    <li><code>index.html</code> – Page layout</li>
    <li><code>design.css</code> – Styling for inputs, buttons, containers, and themes</li>
    <li><code>agent.js</code> – JavaScript file that fetches API data and updates the DOM</li>
  </ul>


   <h2>🌐 About the API</h2>
  <p>
    This project uses the <a href="https://valorant-api.com" target="_blank">Valorant API</a>, a free public REST API that provides detailed game data.  
    In this project, we specifically use the endpoint:
  </p>
  <pre><code>GET https://valorant-api.com/v1/agents</code></pre>
  <p>
    The response contains an array of agent objects, each with properties such as:
  </p>


  <ul>
    <li><code>displayName</code> – Agent name</li>
    <li><code>fullPortrait</code> / <code>displayIcon</code> – Image of the agent</li>
    <li><code>description</code> – Bio/description of the agent</li>
  </ul>


  
