import { useEffect, useState } from "react"

const Oefening3 = () => {

    //NOTE: alles werkt behalve de color picker doet een beetje raar

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState("")
    const [stopCounter, setStopCounter] = useState(false)

    useEffect(() => {
        let handle = setInterval(() => {
            if (counter == 100) {
                setCounter(0)
            } else {
                if (!stopCounter)
                setCounter(counter => counter + 1);
            }
        }, 100);
        return () => { clearInterval(handle); }
    }, [counter, stopCounter]);

    useEffect(() => {
        let handle = setInterval(() => {
            if (counter <= 50) {
                setColor("rgb(77 255 0)")
            } else if (counter <= 75) {
                setColor("rgb(255 159 26)")
            } else {
                setColor("rgb(250 0 0)")
            }
        }, 100);
        return () => { clearInterval(handle); }
    }, [counter])

    return(
        <>
            <div style={{marginTop:50}}>
                <input type="color" onChange={(e) => setColor(e.target.value)}/>
                Safe color (50% and below)
            </div>

            <div>
                <input type="color" onChange={(e) => setColor(e.target.value)}/>
                Warning Color (51% - 75%)
            </div>

            <div>
                <input type="color" onChange={(e) => setColor(e.target.value)}/>
                Danger Color (76% and above)
            </div>

            <div>{counter}</div>
            <progress value={counter} max={100} style={{ width: '100%', accentColor: color }}></progress>
            <button onClick={() => setStopCounter(false)}>start</button>
            <button onClick={() => setStopCounter(true)}>stop</button>
            <button onClick={() => setCounter(0)}>reset</button>        </>
    )
}

export default Oefening3