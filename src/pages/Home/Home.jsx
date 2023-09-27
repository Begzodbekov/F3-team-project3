import React from 'react'
import Novosti from '../../Components/NOVOSTI/Novosti'

import Uslugi from '../../Components/Uslugi/Uslugi'
import Products from '../../Components/Products/Products'
import Hero from '../../Components/Hero/Hero'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <Products/>
      <Novosti/>
      <Uslugi/>
    </div>
  )
}

export default Home