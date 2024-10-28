import React, { useEffect, useState } from 'react'


const useEffectUseState = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [isRunning])
    // let colorset = document.getElementById("color")
    // if (counter === 1) {
    //     colorset.style.color = "red";
    // } else if (counter === 2) {
    //     colorset.style.color = "green";
    // } else if (counter === 3) {
    //     colorset.style.color = "dodgerblue";
    // } else if (counter === 4) {
    //     colorset.style.color = "pink";
    // } else if (counter === 5) {
    //     colorset.style.color = "purple";
    // } else if (counter === 6) {
    //     colorset.style.color = "white";
    // } else if (counter === 7) {
    //     colorset.style.color = "yellow";
    // } else if (counter === 8) {
    //     colorset.style.color = "blue";
    // }else {
    //     colorset.style.color = "black";
    // }
    
    


    return (
        <div>
            <h1>React hooks: useState, useEffect</h1>
            <h2 id='color'>Hisoblagich: {counter}</h2>
            <button onClick={() => setIsRunning(!isRunning)}> 
                {isRunning ? 'To\'xtatish' : 'Boshlash'}
            </button>
        </div>
    )
}

export default useEffectUseState