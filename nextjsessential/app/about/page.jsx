import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <main>
        <h1>About Page</h1>
        <p><Link href={'/'}>Home</Link></p>
    </main>
  )
}

export default AboutPage