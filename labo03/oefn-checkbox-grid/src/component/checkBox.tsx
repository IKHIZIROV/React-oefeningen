interface Box {
    size? : number;
}

const CheckBox = ({size=50} : Box) => {
    const boxes : boolean[][] = Array.from({length : size})

    const showPosition : React.MouseEventHandler<HTMLInputElement> = (event) => {
        let result =
            `
                ${event.target.id}: is checked
            `
        alert(result)
    }

    return (
        <>
            {
                boxes.map((_, i) => 
                    <input 
                        type="checkbox"
                        onClick={showPosition}
                        id={`${i}`}
                    />
                )
            }
        </>
    )
}

export default CheckBox