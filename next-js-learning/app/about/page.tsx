import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <Link href={'/about/contact'} className="text-7xl text-green-600">Contact</Link>
      
    </div>
  )
}

export default AboutPage