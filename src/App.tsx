import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import getApod from './api'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState("")

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const resp = await getApod()
        console.log(url)
        const apodUrl = resp.url
        setUrl(() => apodUrl)
        console.log(url)
      } catch (e) {
        console.error("error getting apod: ", e)
      }
    }

    fetchApod();
  })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="" target="_blank">
          <img src={url} className="logo react" alt="React logo" />
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
