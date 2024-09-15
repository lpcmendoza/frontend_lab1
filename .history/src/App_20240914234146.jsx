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
        <summary className="albumname">Now, Not Yet  |  2019</summary>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        
        </ul>
      </details>

      </div>
    </>
  )
}

export default App
