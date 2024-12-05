import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [showFullDetails, setShowFullDetails] = useState(false)
  console.log(showFullDetails)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>The development mode is: {import.meta.env?.VITE_DEPLOYMENT || "Unspecified"}</p>
        <p title='click for full details'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowFullDetails((prev) => !prev)}
        >Finally setup in server side is complete.</p>
        <p style={{ display: showFullDetails ? 'block' : "none", maxWidth: "512px" }}>
          The original intention was to specify the port using GitHub Secrets, so the Docker container could run on the given port in the server (which is done). However, a problem arose when I attempted to dynamically set the Nginx configuration to map <code>[port_number].mydomainname.com</code> to <code>localhost:[port_number]</code>. The issue was due to skill limitations, so this task has been added to the backlog. 😅
          <hr className="my-2 border-gray-300" />
          One of the major goals was to set up a CI/CD pipeline to deploy the site on pushes to the <code>dev-deployment</code> branch, which has been successfully completed. Hurray! 🎉
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
