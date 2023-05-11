import { useState } from 'react'
import reactLogo from './assets/react.svg'
import deployLogo from "/deploy.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.skillprompt.com" target="_blank">
          <img src={deployLogo} className="logo" alt="deploy" />
        </a>
      </div>
      <h1>Hello Skill Prompt, I'm Santosh</h1>

      <p className="read-the-docs">
        This change is made after the deployment of site in vercel
      </p>
    </>
  );
}

export default App
