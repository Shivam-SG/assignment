import React from 'react'
import Banner from './Banner'
import Trusted from './Trusted'
import Services from './Services'
import About from './About'
import WhyChoose from './WhyChoose'
import OurVideo from './OurVideo'
import Collab from './Collab'
import NewsLetter from './NewsLetter'
import Whyregister from './Whyregister'
import ServicesMobile from './ServicesMobile'
import FAQ from './FAQ'
import TestimonialSlider from './Comments'
import Blogs from './Blogs'
import Procss from './Procss'
import Client from './Client'

const Home = () => {
  return (
    <div><Banner/><Trusted/><Services/><About/><WhyChoose/><OurVideo/><Client/><Procss/><Blogs/><TestimonialSlider/><FAQ/><ServicesMobile/><Whyregister/><NewsLetter/><Collab/></div>
  )
}

export default Home