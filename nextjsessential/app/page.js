import Link from "next/link";

const Home = () => {
  console.log("hello");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={'/about'}>About Page</Link>
    </main>
  )
}

export default Home