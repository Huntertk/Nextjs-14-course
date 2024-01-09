import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={"https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          fill 
          priority 
          alt='post image'  
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <Image 
          src={"https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          priority 
          alt='post image'
          className={styles.avatar}
          width={50}
          height={50}
        />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>MD TAUFIK</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Publised</span>
          <span className={styles.detailValue}>09/01/2024</span>
        </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste ea sapiente. Optio, laborum quis accusamus at, nostrum consectetur nesciunt ratione quo, nulla dolore doloremque animi repellat! Rerum, deserunt porro!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage