import React from 'react'
import KickOff from './components/KickOff'
import Placement from './components/Placement'
import Learning from './components/Learning'
import ChooseUs from './components/ChooseUs'
import Eligibility from './components/Eligibility'
import Acca from './components/Acca'
import Nav from './components/Nav'

const App=()=>{
  return (
    <div>
      <Nav/>
      <Acca/>
      <br/> 
      <ChooseUs/> 
      <br/>
      <Eligibility/> 
      <br/>
      <Learning/>
      <br/> 
      <Placement/>
      <br/> 
      <KickOff/> 
    </div>
  )
}

export default App


/*

  */