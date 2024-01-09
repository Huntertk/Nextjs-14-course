import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';


const PostCard = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="blog psot image" priority />
            </div>
            <span className={styles.date}>09/01/2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{props.post.title}</h1>
            <p className={styles.desc}>{props.post.body}</p>
            <Link className={styles.link} href={`/blog/${props.post.id}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard