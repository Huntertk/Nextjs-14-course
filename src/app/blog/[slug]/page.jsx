import styles from './singlePost.module.css';
import Image from 'next/image';



const SinglePostPage =async (props) => {
  
  const getData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.slug}`, {cache:"no-store"})
      if(!res.ok){
        throw new Error("Something Went Wrong")
      }
      return res.json()
    } catch (error) {
      console.log(error);
    }
  }
  const data = await getData()
  console.log(props);
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
        <h1 className={styles.title}>{data.title}</h1>
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
          {data.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage