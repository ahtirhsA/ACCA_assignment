import React,{useState} from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {motion,AnimatePresence} from 'framer-motion'

import './Nav.css'

const Nav=()=>{
 
    const [isdisp,setDisp]=useState(false)

    const toggleFunc=()=>{
        setDisp(!isdisp)
    }

  return (
    <div>
    <nav className='nav1'>
        <div className='align33'>
       <MenuOutlinedIcon style={{fontWeight:23, color:'#ffffff'}} onClick={toggleFunc}/>
       <h3 className='h33'> IndigoLearn </h3>
       </div> 
       <ul className='navul'>
        <li className='navli'> Why Choose Us</li>
        <li className='navli'> What will u Learn </li>
        <li className='navli'> Placement</li>
        <li className='navli' style={{marginRight:0}}> Kick Start</li>
       </ul>

       <button className='navButt'>
        <AccountCircleRoundedIcon style={{fontWeight:20, color:'black',marginRight:4}}/>
        <p className='lsp '> Login/Sign Up</p>
       </button>
    </nav>
    <AnimatePresence>
    {isdisp?
    <motion.div className='sidebar' initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}}>
    <ul className='navul1'>
        <li className='navli1'> Why Choose Us</li>
        <li className='navli1'> What will u Learn </li>
        <li className='navli1'> Placement</li>
        <li className='navli1' style={{marginRight:0}}> Kick Start</li>
       </ul>
    </motion.div>:''}
    </AnimatePresence>
    </div> 
  )
}

export default Nav 