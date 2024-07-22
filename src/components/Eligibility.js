import React from 'react'
import './Eligibility.css'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';




const Eligibility=()=>{

    return (
        <div className='ecmn'>

        <div className='ecard'>
          <h1 className='ehead'> Levels</h1>
          <div className='d-flex flex-row'>
          <AutoStoriesIcon style={{fontSize:20}}/>
          <p className='epara'> Three (13 papers)</p>
          </div> 
        </div>

        <div className='ecard'>
          <h1 className='ehead'> Duration</h1>
          <div className='d-flex flex-row justify-content-center'>
          <AvTimerOutlinedIcon style={{fontSize:20}}/>
          <p className='epara'> 6 - 30 months</p>
          </div> 
        </div>

        <div className='ecard'>
          <h1 className='ehead'> Exams </h1>
          <div className='d-flex flex-row justify-content-center'>
          <ComputerOutlinedIcon style={{fontSize:20}}/>
          <p className='epara'> Quantitative (Online)</p>
          </div> 
        </div>

        <div className='ecard' style={{marginRight:0}}>
          <h1 className='ehead'> Exemptions </h1>
          <div className='d-flex flex-row justify-content-center'>
          <ReceiptLongOutlinedIcon style={{fontSize:20}}/>
          <p className='epara'>Upto 9 papers</p>
          </div> 
        </div>


        </div> 
    )

}

export default Eligibility