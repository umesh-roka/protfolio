import React from 'react'

import { RefProvider } from './RefContext'
import Components from './Components'
import Header from '../ui/Header'


const Home = () => {
  return (
   <RefProvider>
    <Header/>
 <Components/>

 </RefProvider>
  )
}

export default Home
