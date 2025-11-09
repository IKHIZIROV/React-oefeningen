import { rainbow, type HexColor } from "rainbow-colors-array-ts";
import { useState } from "react";
import styles from "../styles/oefening1.module.css"

const Oefening1 = () => {

    // NOTE: negeer de errors, het werkt normaal als het moet

    const colors : HexColor[] = rainbow(100, "hex", true);

    const [colorList, setColorList] = useState<HexColor[]>([])
    const [selectedColor, setSelectedColor] = useState<HexColor>()

    const addToColorList = (hex : HexColor) => {
        setColorList([...colorList, hex])
    }

    const selectColor = (color : HexColor) => {
        setSelectedColor(color)
    }

    const removeColor = (color : HexColor) => {
        const newColorList = colorList.filter((c) => c !== color)
        setColorList(newColorList)
    }

    return(
        <>
            <div style={{margin:50}}>
                Lijst van colors:
                <br />
                <br />
                <button
                    onClick={() => removeColor(selectedColor)}
                >
                    Delete selected color
                </button>
                <div style={{display:"flex", flexWrap:"wrap", margin:50, gap:5, border:"1px solid black", padding:10 }} >
                    {
                        colorList.map((color) => (
                            <li
                                key={color.hex}
                                style={{backgroundColor:color, width:100, height:100}}
                                className={color == selectedColor ? styles.selected : ""}
                                onClick={() => selectColor(color)}
                            >
                                {color}
                            </li>
                        ))
                    }
                </div>
            </div>

            <div 
                style={{display:"flex", flexWrap:"wrap", margin:50, gap:5}}
            >
                {
                    colors.map((color) => (
                        <li 
                            style={{backgroundColor:color.hex, width:100, height:100, border:"1px solid black"}}
                            key={color.hex}
                            onClick={() => addToColorList(color.hex)}
                        >
                            {color.hex}
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default Oefening1