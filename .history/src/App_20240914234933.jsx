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
        <ul className="songs">
          <li>OK OK?</li>
          <li>Runaway</li>
          <li>Maybe</li>
          <li>The Notion</li>
          <li>Still Feel</li>
          <li>Trust</li>
          <li>Arrow</li>
          <li>Pure Gold</li>
          <li>Ice Cold ft. Kimbra</li>
          <li>Rest ft. Samm Henshaw</li>
          <li>Breakfast</li>
          <li>Creature</li>
        </ul>
      </details>

      </div>
    </>
  )
}

export default App
