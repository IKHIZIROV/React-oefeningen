interface Color {
    color : string;
    size? : number;
}

const ColorSquare = ({color, size = 100} : Color) => {
    const showColor : React.MouseEventHandler<HTMLDivElement>= () => {
        alert(color)
    }

    return (
        <>
            <div
                onClick={showColor}
                style={{
                    backgroundColor: color,
                    width: size,
                    height: size,
                    display: "inline-block",
                    cursor: "pointer"
                }}/>
        </>
    )
}

export default ColorSquare