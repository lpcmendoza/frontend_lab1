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
      <img src="https://upload.wikimedia.org/wikipedia/en/0/00/Half_Alive_Now%2C_Not_Yet.jpg" alt="Now, Not Yet album cover" />
      </div>
    
      <details>
        <summary className="albumname">Now, Not Yet (2019)</summary>
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

      <div className="discography">
      
      <div>
      
      <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Half_alive_conditions_of_a_punk.png" alt="Conditions of a Punk album cover" />
      </div>
    
      <details>
        <summary className="albumname">Conditions of a Punk (2022)</summary>
        <ul className="songs">
          <li>Conditions of a Punk</li>
          <li>Summerland</li>
          <li>Brighton</li>
          <li>High Up</li>
          <li>Hot Tea</li>
          <li>Did I make you up?</li>
          <li>Nobody</li>
          <li>Move me</li>
          <li>Yosemite</li>
          <li>Never Been Better ft. Orla Gartland</li>
          <li>Back Around</li>
          <li>Everything Machine</li>
          <li>What's Wrong</li>
          <li>Call Back</li>
          <li>I'll Stop</li>
          <li>Make of It</li>
          <li>Bad Thoughts</li>
          <li>Lost</li>
        </ul>
      </details>

      </div>

    </>
  )
}

export default App
