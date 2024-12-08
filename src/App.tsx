import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    console.log("ran")
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      // Example: Draw a rectangle
      if (!ctx) {
        console.log('failed to load the context')
        return
      }
      ctx.fillStyle = 'blue';
      ctx.fillRect(50, 50, 100, 100);
    }
  }, [buttonClicked]);


  return (
    <>
      <canvas id="myCanvas" width="500" height="500"></canvas>
      {/* writing the js in the jsx */}

      {/* { const ctx = canvas.getContext('2d'); } js statement not allowed only express that evaluates to the value*/}
      <button onClick={() => setButtonClicked(true)}>Draw Rectangle</button>
    </>
  )
}

export default App
