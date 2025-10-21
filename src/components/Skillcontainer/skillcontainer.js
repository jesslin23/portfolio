import React from 'react'
import {Element} from 'react-scroll'
import { LinearProgress } from '@mui/material'
import bg3 from '../../../src/images/bg3.jpg'
import './skillcontainer.css'
const skillcontainer = () => {
  return (
       <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer_image'>
            <img src={bg3} alt=''></img>
        </div>
        <div className='skillcontainer_text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer_skillset'>
                <h5>HTML,CSS</h5>
                <div className='skillcontainer_slider slider'>
                    <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillcontainer_skillset'>
                <h5>JAVASCRIPT</h5>
                <div className='skillcontainer_slider slider'>
                    <LinearProgress variant='determinate' value={75} />
                </div>
            </div>
            <div className='skillcontainer_skillset'>
                <h5>REACT JS</h5>
                <div className='skillcontainer_slider slider'>
                    <LinearProgress variant='determinate' value={50} />
                </div>
            </div>
            <div className='skillcontainer_skillset'>
                <h5>JAVA</h5>
                <div className='skillcontainer_slider slider'>
                    <LinearProgress variant='determinate' value={70} />
                </div>
                </div>
        </div>
       </Element>
  )
}

export default skillcontainer