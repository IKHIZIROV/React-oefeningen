import { useEffect, useState } from "react";
import type { Duckie } from "../types";

const DetailDuckie = () => {

    // NOTE: hier wordt normaal de details van de duckie getoond
    // maar had geen tijd om dit verder uit te werken...

    const [duckies, setDuckies] = useState<Duckie[]>([])
    
        useEffect(() => {
            const loadDuckies = async() => {
                try {
                    let response = await fetch(`https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json`);
                    let data : Duckie = await response.json();
                    setDuckies([...duckies, data]);
                    console.log("Succes! Status code: ", 200 )
                } catch(e) {
                    console.error(e)
                } finally {
                }
            }
            
            loadDuckies();
        }, []);

    return(
        <>
            
        </>
    )
}

export default DetailDuckie