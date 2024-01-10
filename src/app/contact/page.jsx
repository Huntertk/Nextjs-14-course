import styles from './contact.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'Contact Page',
  description: 'This is Contact Page',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt='contact image' fill priority className={styles.img}  />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="Email" placeholder='Email' />
          <input type="number" placeholder='Phone (Optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
          <button type='submit' className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage