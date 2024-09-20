import Link from "next/link"

const ContactPage = () => {
  return (
    <div>
        <h1 className="text-7xl">Contact</h1>
        <Link href={'/'} className="text-7xl text-green-600">Home</Link>
    </div>
  )
}

export default ContactPage