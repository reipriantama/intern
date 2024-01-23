import React, { useState } from 'react'

const UseState = () => {
    const [color, setColor] = useState("red")

  return (
      <div>
          <h1>Test useState</h1>
          <p>Ini adalah warna {color}</p>
          <button onClick={()=> setColor("blue")}>
              
          </button>
    </div>
  )
}

export default UseState