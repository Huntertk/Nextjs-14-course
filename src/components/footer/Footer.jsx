import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MD TAUFIK</div>
      <div className={styles.text}>
        copyright all rights reserved.
      </div>
    </div>
  )
}

export default Footer