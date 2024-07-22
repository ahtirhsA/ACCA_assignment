import React,{useState} from 'react'
import Popup from 'reactjs-popup'

import './KickOff.css'

const KickOff=()=>{


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
        <div className='bigg'>

        <div className='box1'>
            <h1 className='head'> Kick off your ACCA Prep journey with IndigoLearn </h1>
            <p className='pa'> Sign-in and get instant access to our FREE Courses</p>
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
            <select className='form-control sel' onChange={qualFunc} value={qual} >
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

export default KickOff