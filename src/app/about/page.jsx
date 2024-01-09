import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
        <Image src="/about.png" alt="image" width={500} height={500} priority />
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/18013547/pexels-photo-18013547/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="image" 
          fill 
        />
      </div>
    </div>
  )
}

export default AboutPage