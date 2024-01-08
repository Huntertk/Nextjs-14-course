"use client"
import { useState } from 'react';
import styles from './links.module.css'
import NavLinks from './navlinks/NavLinks';


const links = [
    {
        title:"Homepage",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
    {
        title:"Blog",
        path:"/blog"
    },
];

const Links = () => {
    const [open, setOpen] = useState(false)

    //Temp
    const session = true;
    const isAdmin = true;
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link, i) => <NavLinks item={link} key={i} />)}
            {session ? (
                <>
                {
                    isAdmin && ( <NavLinks item={{title:"Admin", path:"/admin"}} />)        
                }
                <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLinks item={{title:"Login", path:"/login"}} />
                )}
        </div>
        <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link, i) => <NavLinks item={link} key={i} />)}
            </div>
        }
    </div>
  )
}

export default Links