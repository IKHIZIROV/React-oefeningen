import styles from "../App.module.css"

const Reference = () => {
    return(
        <div className={styles.reference}>
          <img className={styles.reference_thumb} src="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png" />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              The Ultimate Guide to Napping Like a Cat | CatNapTips
            </div>
            <div className={styles.reference_subtitle}>
              Learn the art of napping, feline style! Just follow these simple tips.
            </div>
            <div className={styles.reference_font}>catnaptips.com</div>
          </div>
        </div>
    )
}

export default Reference