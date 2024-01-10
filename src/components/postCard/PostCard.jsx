import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';


const PostCard = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          {
            props.post.img &&
            <div className={styles.imgContainer}>
                <Image src={props.post.img} fill alt="blog psot image" priority />
            </div>
            }
            <span className={styles.date}>09/01/2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{props.post.title}</h1>
            <p className={styles.desc}>{props.post.desc}</p>
            <Link className={styles.link} href={`/blog/${props.post.slug}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard