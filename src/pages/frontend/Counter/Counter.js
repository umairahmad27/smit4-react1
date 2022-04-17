import React, { useState, useEffect, useRef } from 'react'
import notification from "../../../assets/sound/notification.mp3"




const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState("")

    const heading1 = useRef(null)
    const audioPlayer = useRef(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(a => a + 1);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        audioPlayer.current.play()
    }, [counter])

    const handleIncrement = () => {
        setCounter(s => s + 1)
        setColor("green")

    }
    const handleDecrement = () => {
        // if (counter <= 0) {
        //     setCounter(0)
        // } else {
        //     setCounter(s => s - 1)
        // }
        // if (counter > 0) {
        //     setCounter(s => s - 1)
        // }
        setColor("blue")

        counter > 0 && setCounter(s => s - 1)

    }

    return (
        <div style={{ height: "100vh", backgroundColor: color }}>
            <h1 ref={heading1}>Our First Counter</h1>
            <input type="color" onChange={(e) => { setColor(e.target.value) }} />

            <button onClick={handleIncrement}>Increment</button>
            <h2>{counter}</h2>
            <button onClick={handleDecrement}>Decrement</button>
            <hr />
            <button onClick={() => { setCounter(0) }}>Reset</button>

            <audio src={notification} ref={audioPlayer}></audio>
        </div >
    )
}

export default Counter