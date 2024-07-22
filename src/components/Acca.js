import React,{useState} from 'react'
import Popup from 'reactjs-popup'
import './Acca.css'
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


const Acca=()=>{

    const [phone,setPhone]=useState('')

    const [mail,setMail]=useState('')

    const [qual,setQual]=useState('')

    const [int,setInt]=useState('')


    const [err,setErr]=useState(false)

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const phoneFunc=(event)=>{
       setPhone(event.target.value)
    }

    const mailFunc=(event)=>{
        setMail(event.target.value)
     }

     const qualFunc=(event)=>{
      setQual(event.target.value)
     }

     const intFunc=(event)=>{
       setInt(event.target.value)
     }


     const handlePopupClose = () => {
        setIsPopupOpen(false);
      };
     
     const subFunc=(event)=>{
          event.preventDefault()
          
          if (phone.trim()==='' || mail.trim()==='' || int.trim()===''){
            setErr(true)
          }
          else{
            setErr(false)
            setIsPopupOpen(true)
          }
     }
 

   return (
      <div className='dmain'>
          <div>
            <h1 className='head1'> Become ACCA in 18 months </h1>
            <p className='pa1'> To become an ACCA in 18 months, follow a structured study plan with expert guidance and interactive resources. Consistently practice and assess your knowledge to stay on track and prepare effectively for the exams.</p>
            
            <div className='d-flex flex-row'>

             <div className='card1'>
              <div className='d-flex flex-row'>
               <GroupIcon style={{fontWeight:window.innerWidth<=860?3:8}}/>
               <p className='pa11'> Faculty </p>
              </div> 
              <p className='pa111'> 100 Experts </p>
             </div>

             
             <div className='card1'>
              <div className='d-flex flex-row'>
               <LibraryBooksIcon sstyle={{fontWeight:window.innerWidth<=860?3:8}}/>
               <p className='pa11'> Thousands of Books </p>
              </div> 
              <p className='pa111'> 1000+ Books available </p>
             </div>

             <div className='card1'>
              <div className='d-flex flex-row'>
               <FamilyRestroomIcon style={{fontWeight:window.innerWidth<=860?3:8}}/>
               <p className='pa11'> Students Enrolled </p>
              </div> 
              <p className='pa111'> Above 100000 </p>
             </div>

             <div className='card1'>
              <div className='d-flex flex-row'>
               <WorkOutlineOutlinedIcon style={{fontWeight:window.innerWidth<=860?3:8}}/>
               <p className='pa11'> Placements </p>
              </div> 
              <p className='pa111'> 1,23,4567</p>
             </div>

            </div> 
             
             <button className='dbutton' type='button'> Download Brochure </button>
          </div>


        <form className='form' onSubmit={subFunc}>
           <h1 className='heading'> Aspiring to be an ACCA? Get in touch with us!</h1>
           <div className='inp-con'>
             <p className='err'> {phone.trim()===''? 'required*':''}</p>
            <input placeholder='Phone Number*' type='tel' className='form-control inp' onChange={phoneFunc} value={phone}/>
           </div>

           <div className='inp-con'>
           <p className='err'> {mail.trim()===''? 'required*':''}</p>
            <input placeholder='Email ID' type='email' className='form-control inp' onChange={mailFunc} value={mail}/>
           </div>

          
           <div className='inp-con'>
            <select className='form-control sel' onChange={qualFunc} value={qual}>
                <option value='' disabled selected> Current Qualification </option>
               <option value='highSchool' className='opt'> High School </option>
               <option value='intermediate' className='opt'> Intermediate </option>
               <option value='graduation' className='opt'> Graduation </option>
               <option value='postGraduation' className='opt'> Post Graduation </option>
            </select>
           </div>

           <div className='inp-con'>
           <p className='err'> {int.trim()===''? 'required*':''}</p>
            <select className='form-control sel' onChange={intFunc} value={int}>
                <option value='' disabled selected> Interested in  </option>
               <option value='accountant' className='opt'> Accountant </option>
               <option value='auditor' className='opt'> Auditor </option>
               <option value='financial' className='opt'> Financial Analyst </option>
               <option value='consultant' className='opt'> Consultant </option>
            </select>
           </div>

           <button className='butt' type='submit' > Request Call Back </button>

            <p className='err'> {err?'Some fields are empty':''}</p>

            <Popup
            modal
            open={isPopupOpen}
            onClose={handlePopupClose}
            >
                {close => (
                    <>
                    <div className="poppopup">
                        <p className='popHead'>SUCCESS</p>
                        <button
                        type="button"
                        className="trigger-button ok"
                        onClick={close}
                        >
                            OK
                        </button>
                    </div>
                    </>
        )}
      </Popup>
        </form>

      </div>
   )
}

export default Acca 