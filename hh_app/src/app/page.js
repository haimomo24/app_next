import React from 'react'

import Slider from './components/pagehome/Slider'
import Other from './components/pagehome/Other'
import Badmintonproduct from './components/pagehome/Badmintonproduct'
import ShoesProduct from './components/pagehome/ShoesProduct'
import BaloProduct from './components/pagehome/BaloProduct'
import New from './components/new/New'

const page = () => {
  return (
    <div>
     <Slider/>
     <Other/>
     <Badmintonproduct/>
     <ShoesProduct/>
     <BaloProduct/>
     <New/>
    </div>
  )
}

export default page