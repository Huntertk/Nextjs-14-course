import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative through Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio molestiae neque dicta ab expedita voluptatibus atque, recusandae aut distinctio placeat voluptate corporis, quasi doloribus officiis. Culpa repellendus excepturi in voluptatum.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" fill alt="brands image" className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src={"/hero.gif"} className={styles.heroImg} fill />
    </div>
  </div>;
};

export default Home;