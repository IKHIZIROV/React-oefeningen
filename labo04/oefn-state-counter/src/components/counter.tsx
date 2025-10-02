import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const omhoog = () => {
        setCount(count + 1)
    }

    const omlaag = () => {
        setCount(count - 1)
    }

    const getColor = () => {
        if (count > 0) return "green"
        if (count < 0) return "red"
        return "black"
    }

    return (
        <>
            <button onClick={omhoog}>+</button>
            <div
                style={{color: getColor()}}>
                    {count}
            </div>
            <button onClick={omlaag}>-</button>
        </>
    )
}

export default Counter