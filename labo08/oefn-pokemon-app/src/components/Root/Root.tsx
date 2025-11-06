import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"

const Root = () => {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/pokemon">Pokemon</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    )
};

export default Root;