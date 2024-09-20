import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href={'/about'} className="text-7xl text-green-600">About</Link>
    </div>
  )
}

export default Home