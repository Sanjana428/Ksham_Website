import React from 'react'
import { 
  Innoexist, 
  Business, 
  Working, 
  Clients, 
  CTA, 
  Footer, 
  Contact,
  About,
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Innoexist/>
          <Business/>
          <Working/>
          <About/>
          <Testimonials/>
          <Clients/>
          <Contact/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App