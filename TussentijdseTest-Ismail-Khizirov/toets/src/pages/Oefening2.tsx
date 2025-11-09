import { useEffect, useState } from "react";
import type { Duckie } from "../types"
import { Link } from "react-router-dom";

const Oefening2 = () => {

    // NOTE: werkt wel, maar print de duckies niet uit :(
    // Als je op een duckie klikt verwijst die jouw wel naar de detail pagina

    const [duckies, setDuckies] = useState<Duckie[]>([])
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
            }
        }
        
        loadDuckies();
    }, []);

    return(
        <>
            <div>
                {
                    loading ?
                    <div>Loading...</div> :
                    duckies.map((duck) => (
                        <li
                            key={duck.id}
                        >
                            <Link to={`/oefening2/${duck.id}`}>
                                {duck.image}                            
                            </Link>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default Oefening2