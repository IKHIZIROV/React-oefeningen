import { useEffect, useState } from "react";

interface RandomValueProps {
    min: number;
    max: number;
}

const getRandomGetal = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const RandomValue = ({min, max} : RandomValueProps) => {

    const [randomValue, setRandomValue] = useState(getRandomGetal(min, max))

    useEffect(() => {
        let handle = setInterval(() => {
            setRandomValue(getRandomGetal(min, max))
        }, 1000)

        return () => {
            clearInterval(handle);
        }
    }, [])

    return (
        <>
            <div>Random value between {min} and {max}: {randomValue}</div>
        </>
    );
}

export default RandomValue;