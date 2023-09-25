import React from 'react'
import Novosti from '../../Components/NOVOSTI/Novosti'

import Uslugi from '../../Components/Uslugi/Uslugi'

function Home() {
  return (
    <div className='Home'>
      <Novosti/>
          <Uslugi/>
    </div>
  )
}

export default Home