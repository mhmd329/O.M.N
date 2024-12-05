import React from 'react'
import './Foter.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
 const Footter = () => {
  return (
    <footer>
        <div className='row'>
<div className='col-md-6 f-c'>
<ul className='foter-nav d-flex'>
    <li>
        <a href='#'>About us</a>
    </li>
    <li>
        <a href='#'>Blog</a>
    </li>
    <li>
        <a href='#'>Press</a>
    </li>
    <li>
        <a href='#'>IOS App</a>
    </li>
    <li>
        <a href='#'>Android App</a>
    </li>
</ul>
</div>
<div className='col-md-6 f-ls'>
<ul className='foter-nav d-flex'>
    <li>
        <a href='#'> <FontAwesomeIcon className='icon1' icon={faFacebook}/> </a>
    </li>
   
    <li>
        <a href='#'> <FontAwesomeIcon className='icon2' icon={faTwitter}/> </a>
    </li>
   
    <li>
        <a href='#'> <FontAwesomeIcon className='icon3' icon={faGooglePlusG}/> </a>
    </li>
   
    <li>
        <a href='#'> <FontAwesomeIcon className='icon4' icon={faCamera}/> </a>
    </li>
   
   
   
</ul>
</div>
        </div>
        <div className='row'>
<p className='fot'>
Copyright © 2021 by Omnifood. All rights reserved.
</p>
        </div>
    </footer>
  )
}
export default Footter