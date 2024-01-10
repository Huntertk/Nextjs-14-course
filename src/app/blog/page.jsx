import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import {getPosts } from '@/lib/data'

// const getData = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache:"no-store"})
//     if(!res.ok){
//       throw new Error("Something Went Wrong")
//     }
//     return res.json()
//   } catch (error) {
//     console.log(error);
//   }
// }

const BlogPage = async () => {
  const posts = await getPosts()
 
  return (
    <div className={styles.container}>
      {
        posts.map((post) => {
          return <div key={post.id} className={styles.post}>
        <PostCard post={post} />
      </div>
        })
      }
    </div>
  )
}

export default BlogPage