interface ColorSquareProps {
    color?: string;
    size?: number;
}

const ColorSquare = ({size = 100, color = "red"}: ColorSquareProps) => {
    // const {size, color} = props; => niet zo maar zo ^^

    return (
        <div style={{height: size, width: size, backgroundColor: color}}/>
    )
}

export default ColorSquare