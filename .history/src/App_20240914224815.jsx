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
      <img src={'/public/path_to_your_image.png'} alt="My Image" />
      </div>
    
      <details>
        <summary><h2>Now, Not yet</h2></summary>
        Something small enough to escape casual notice.
      </details>

      </div>
    </>
  )
}

export default App
