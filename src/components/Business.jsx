import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, points, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      
      <ul className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] '>
        {points.map((point, index) => (
          <li key={index}>
            <div className={`md:ml-6 ${styles.flexCenter} w-[8px] h-[8px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-[7px] `} style={{ display: 'inline-block' }}></div>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Innovation <br className='sm:block hidden'/></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.
        <br className='sm:block hidden'/><br className='sm:block hidden'/>
The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.
<br className='sm:block hidden'/><br className='sm:block hidden'/>
The open ear design makes able glasses a complete smart glasses device for everyone
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
