import React from 'react'
import Title from '../components/title'
import Feed from '../components/data'
import '../styles/fonts.css'
import '../styles/all-page.css';
import Page_1 from '../components/Header';
import RelationShip from '../components/RalationShip';
import VideoContainer from '../components/VideoContainer';
import Footer from '../components/Footer';

export default function index() {
  return (
    <div className='w-full flex flex-col custom-font'>
      <Page_1/>

      <VideoContainer/>

      {/* wellcome page */}
      <Title title='دامغان یدک'/>
      <Feed
        img={require('../assets/img/IMG-20250220-WA0004.jpg')}
        header='حوضه ی خدماتی:'
        text='مناطقی که امداد خودرو امداد یدک به شما امداد رسانی میکند
        محور دامغان-شاهرود،در شرق
        محور دامغان-سمنان،درغرب
        در شمال شهرستان شامل های دامغان به چشمه علی 
        چشمه علی به سه راهی فولاد محله
        سه راهی فولاد محله به کیاسر
        در جنوب شهرستان شامل محورهای
        دامغان به معلمان
        معلمان به جندق'
      />
    
      {/* resume */}
      <Title title="نمونه خدمات"/>
      <Feed
        img={require('../assets/img/IMG-20250220-WA0003.jpg')}
        header='بهمن ۱۴۰۳'
        text='انتقال خودرو سواری کوییک به دامغان'
      />

      <Footer/>
      
      <RelationShip />
    </div>
  )
}

