import React from 'react'

import Partner from '../../Components/Partner/Partner'

import Novosti from '../../Components/NOVOSTI/Novosti'


import Uslugi from '../../Components/Uslugi/Uslugi'
import Products from '../../Components/Products/Products'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <Products/>
      <Novosti/>

          <Uslugi/>
          <Partner/>
          <Footer/>


    </div>
  )
}

export default Home