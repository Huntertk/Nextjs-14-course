

const BlogPostPage = ({params}) => {
  console.log(params);
  
  return (
    <main>
      <h1>Blog Post {params.slug}</h1>
    </main>
  )
}

export default BlogPostPage