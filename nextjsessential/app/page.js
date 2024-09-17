import Link from "next/link";
import Header from "@/components/header";

const Home = () => {
  return (
    <main>
      <Header />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href={'/about'}>About Page</Link></p>
    </main>
  )
}

export default Home