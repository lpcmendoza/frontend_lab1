import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div>
      <h1>Half Alive</h1>
    </div>
    <div>
      <h2>Discography</h2>
    </div>
    <div className="discography">
      
      <div>
      <img src={'/public/halfalive_nownotyet.jpg'} alt="Now, Not Yet album cover" />
      </div>
    
      <details>
        <div>
          <summary>
            <h3>Now, Not yet</h3>
          </summary>
        </div>
        <div>
        <ul>
          <li></li>
        </ul>
        </div>
      </details>

      </div>
    </>
  )
}

export default App
