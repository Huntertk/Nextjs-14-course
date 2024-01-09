"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationPageTest = () => {
    //CLIENT SIDE NAVIGATION
    const pathname = usePathname()
    console.log(pathname);
    const searchParam = useSearchParams()
    const q = searchParam.get('q') 
    console.log(q);
    const router = useRouter()
    const handleClick = () => {
        return router.push("/contact")
    }
  return (
    <div>
        <p>Pathname = {pathname}</p>
        <p>query =  {q}</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default NavigationPageTest