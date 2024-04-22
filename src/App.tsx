import {useEffect, useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
    const [stateText, setStateText] = useState("")
    const counterIsNotZero = counter !== 0

    const handleIncrement = () => {
        setCounter(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setCounter(prevCount => Math.max(prevCount - 1, 0));
    };

    useEffect( () => {
        if (counter % 5 === 0 && counter % 3 === 0 && counterIsNotZero) {
             setStateText("Neue Fische")
        } else if (counter % 5 === 0 && counterIsNotZero) {
            setStateText("Fische")
        } else if (counter % 3 === 0 && counterIsNotZero) {
            setStateText("Neue")
        } else {
            setStateText(counter.toString())
        }
    }, [counter, counterIsNotZero])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
        <h1>{stateText}</h1>
      <p>{counter}</p>
        <div className="card">
            <button style={ { width: "100px", height: "50px", backgroundColor: "aqua"} } onClick={handleDecrement}>
                -
            </button>
            <button style={ { width: "100px", height: "50px", backgroundColor: "aqua"} } onClick={handleIncrement}>
                +
            </button>
        </div>
    </>
  )
}

export default App
