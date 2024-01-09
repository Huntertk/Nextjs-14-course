import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Our Company</h2>
          <h1 className={styles.title}>
            We Create Ideas into reality
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sapiente natus esse exercitationem? Saepe ut facere dolorem totam optio necessitatibus nihil accusantium! Quas fugiat vel quos vero! Officia, debitis totam!
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10K</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10K</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10K</h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/about.png"} alt='about out company image' fill className={styles.img} />
        </div>
      </div>
  )
}

export default AboutPage