import React from 'react'
import styles from '../style'
import Button from './Button'
import call from '../assets/call.png'; 
import mail from '../assets/mail.png'; 


const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 ss:text-[30px] text-[30px] ` }>
          <div className="flex items-center">
            <img src={call} className='w-[48px] h-[48px] rounded-full' alt="call icon" />
            <span className="ml-2">call us | +91 9373124725</span>
          </div>
          <br/>
          <div className="flex items-center">
            <img src={mail} className='w-[48px] h-[48px] rounded-full' alt="mail icon" />
            <span className="ml-2">Email | kshaminnovation@gmail.com</span>
          </div>
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
      
    </section>
  )
}

export default CTA

