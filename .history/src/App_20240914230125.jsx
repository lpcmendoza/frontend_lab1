import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div>
      <h1>Half Alive</h1>
    </div>
    <div>
      <div>
      <img src={'/public/halfalive_nownotyet.jpg'} alt="My Image" />
      </div>
    
      <details>
        <summary classname="heading">Now, Not yet</summary>
        <ul>
          <li></li>
        </ul>
      </details>

      </div>
    </>
  )
}

export default App
