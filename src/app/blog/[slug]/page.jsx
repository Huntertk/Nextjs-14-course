import { getPost } from '@/lib/data';
import styles from './singlePost.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import PostUser from '@/components/postUser/PostUser';



const SinglePostPage =async (props) => {
  
  // const getData = async () => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.slug}`, {cache:"no-store"})
  //     if(!res.ok){
  //       throw new Error("Something Went Wrong")
  //     }
  //     return res.json()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const data = await getPost(props.params.slug);
  return (
    <div className={styles.container}>
     {data.img && <div className={styles.imgContainer}>
        <Image 
          src={data.img} 
          fill 
          priority 
          alt='post image'  
          className={styles.img}
        />
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.detail}>
        
        <Suspense fallback={<h1>Loading.....</h1>}>
          <PostUser userId={data.userId}/>
        </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Publised</span>
          <span className={styles.detailValue}>{data.createdAt.toString().slice(4,16)}</span>
        </div>
        </div>
        <div className={styles.content}>
          {/* {data.body} */}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage