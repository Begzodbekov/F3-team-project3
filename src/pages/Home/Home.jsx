import React from 'react'

import Partner from '../../Components/Partner/Partner'

import Novosti from '../../Components/NOVOSTI/Novosti'


import Uslugi from '../../Components/Uslugi/Uslugi'

function Home() {
  return (
    <div className='Home'>
      <Novosti/>
          <Uslugi/>
          <Partner/>
    </div>
  )
}

export default Home