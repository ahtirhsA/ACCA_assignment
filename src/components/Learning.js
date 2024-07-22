import React from 'react'
import './Learning.css'

const Learning=()=>{
    return (
        <div>
            <h1 className='lheading'> What will you Learn in ACCA? </h1>
            <div className='lcmn'>
            <div className='lcard'>
                <h1 className='lcardHead'> Knowledge Level </h1>
                <ul className='lul'>
                    <li className='lli'> Business Technology</li>
                    <li className='lli'> Management Accounting</li>
                    <li className='lli'> Financial Accounting</li>
                </ul>
                <h3 className='lfooter'> 3 papers </h3>
            </div>

            <div className='lcard'>
                <h1 className='lcardHead'> Skill Level </h1>
                <ul className='lul'>
                    <li className='lli'> Financial Management</li>
                    <li className='lli'> Performance Management</li>
                    <li className='lli'> Taxation</li>
                    <li className='lli'> Financial Reporting</li>
                    <li className='lli'>Audit and Assurance </li>
                    <li className='lli'> Business Technology and Systems</li>
                </ul>
                <h3 className='lfooter'> 6 papers </h3>
            </div>

            <div className='lcard'>
                <h1 className='lcardHead'> Professional Level </h1>
                <h1 className='lh'> Strategic Professional Essentials </h1>
                <ul>
                    <li className='lli'> Strategic Business Leadership (SBL)</li>
                    <li className='lli mb-0'> Strategic Business Reporting (SBR)</li>
                </ul>
                <h1 className='lh'>Strategic Professional Options </h1>
                <ul>
                    <li className='lli'> Advanced Management Audit (AMAA)</li>
                    <li className='lli'> Advanced Financial Management (AFM)</li>
                    <li className='lli'> Advanced Performance Management (APM) </li>
                    <li className='lli'> Advanced Audit (AAA)</li>
                </ul>
                <h3 className='lfooter'> 4 papers </h3>
            </div>

            </div> 
        </div>
    )
}

export default Learning