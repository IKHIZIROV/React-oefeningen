import { Link, Outlet } from "react-router-dom"

const Root = () => {
    return(
        <>
            <header>
                Tussentijdse Toets
                <nav>
                    <li><Link to={"/oefening1"}>Oefening 1</Link></li>
                    <li><Link to={"/oefening2"}>Oefening 2</Link></li>
                    <li><Link to={"/oefening3"}>Oefening 3</Link></li>
                </nav>
            </header>
            <footer>

            </footer>
            <Outlet/>
        </>
    )
}

export default Root