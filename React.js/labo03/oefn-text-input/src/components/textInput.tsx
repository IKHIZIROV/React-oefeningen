interface Input {
    size? : number;
}

const TextInput = ({size = 50} : Input) => {
    const numbers : number[] = [0,1,2,3,4,5,6,7]

    const changeBox : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        let result : string = 
        `
            Id: ${event.target.id}
            Nieuwe value: ${event.target.value}
        `
        alert(result)
    }

    return (
        <>
            {numbers.map((_, i) => 
                <input 
                    key={i} 
                    type="text" 
                    style={{height: size, width: size}}
                    id={`${i}`}
                    onChange={changeBox}
                />
            )}
        </>
    )
}

export default TextInput