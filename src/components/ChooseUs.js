import React from 'react'
import './ChooseUs.css'
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';




const ChooseUs=()=>{
   return (
    <div>
      <h1 className='cheading'> Why Choose Us? </h1>
      
     
     <div className='calign'>

      <div className='ccard'>
        <WbIncandescentOutlinedIcon style={{fontSize:40}}/>
        <h1 className='chead'> Expert Faculty </h1>
        <p className='cpara'> We provide expert faculty with extensive industry experience for ACCA, offering in-depth guidance and practical insights. Their instructors ensure students grasp complex concepts and excel in their exams.</p>
      </div>

      <div className='ccard'>
        <GroupsOutlinedIcon style={{fontSize:40}}/>
        <h1 className='chead'>   Complete Success Package </h1>
        <p className='cpara'> Indigo Learn's Complete Success Package provides a holistic approach with expert faculty, detailed study materials, and interactive support. It ensures thorough preparation with personalized coaching and practice resources tailored to student needs.</p>
      </div>

      <div className='ccard' style={{marginRight:0}}>
        <AllInclusiveIcon style={{fontSize:40}}/>
        <h1 className='chead'>  Placements  </h1>
        <p className='cpara'> Indigo Learn assists with placements by offering career guidance, interview preparation, and industry connections. Their support helps students enhance their employability and secure job opportunities in their desired fields. </p>
      </div>
   
   </div> 
    </div>
   )
}

export default ChooseUs