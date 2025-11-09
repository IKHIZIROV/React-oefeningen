import styles from "../App.module.css";

interface HeaderDetails {
    name: string;
    time: string;
    pfp: string;
}

const Header = (props: HeaderDetails) => {
    return (
        <>
            <div className={styles.header}>
            <div className={styles.options}>
                <i className="fa fa-chevron-down"></i>
            </div>
            <img
                className={styles.co_logo}
                src={props.pfp}
            />
            <div className={styles.co_name}>
                <a href="#">{props.name}</a>
            </div>
            <div className={styles.time}>
                <a href="#">{props.time}</a> · <i className="fa fa-globe"></i>
            </div>
            </div>
        </>
    )
}

export default Header