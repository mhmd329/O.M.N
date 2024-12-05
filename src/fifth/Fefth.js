import React from 'react'
import './fefth.css'
import { faStar  ,faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Fefth = () => {
  return (
   <section className='sc5' id='sc5'>
    <div className='parent-h'>
        <h2>
        We're currently in these cities
        </h2>
    </div>
    
    <div className='row cites'>
<div className='col-md-3 lispon'>
    <img
    src='https://omn-alpha.netlify.app/resources/img/lisbon-3.jpg'
    alt='s'
    />
<h3>Lisbon</h3>
<div className='feature '>
    <FontAwesomeIcon icon={faUserAlt}/>
    1600+ happy eaters

</div>
<div className='feature'>
    <FontAwesomeIcon icon={faStar}/>60+ top chefs

</div>
<div className='feature'>
<FontAwesomeIcon icon={faTwitter} />
<a href='#'> @omnifood_lx</a>
</div>

</div>
<div className='col-md-3'>
    <img
    src='https://omn-alpha.netlify.app/resources/img/san-francisco.jpg'
    alt='s'
    />
<h3>San Francisco</h3>
<div className='feature'>
    <FontAwesomeIcon icon={faUserAlt}/>
    3700+ happy eaters

</div>
<div className='feature'>
    <FontAwesomeIcon icon={faStar}/>160+ top chefs

</div>
<div className='feature'>
<FontAwesomeIcon icon={faTwitter} />
<a href='#'> @omnifood_lx</a>
</div>

</div>
<div className='col-md-3'>
    <img
    src='https://omn-alpha.netlify.app/resources/img/berlin.jpg'
    alt='s'
    />
<h3>Berlin</h3>
<div className='feature'>
    <FontAwesomeIcon icon={faUserAlt}/>
    2300+ happy eaters

</div>
<div className='feature'>
    <FontAwesomeIcon icon={faStar}/>110+ top chefs

</div>
<div className='feature'>
<FontAwesomeIcon icon={faTwitter} />
<a href='#'> @omnifood_lx</a>
</div>

</div>
<div className='col-md-3'>
    <img
    src='https://omn-alpha.netlify.app/resources/img/london.jpg'
    alt='s'
    />
<h3>London</h3>
<div className='feature'>
    <FontAwesomeIcon icon={faUserAlt}/>
    1200+ happy eaters

</div>
<div className='feature'>
    <FontAwesomeIcon icon={faStar}/>50+ top chefs

</div>
<div className='feature'>
<FontAwesomeIcon icon={faTwitter} />
<a href='#'> @omnifood_lx</a>
</div>

</div>
    </div>
   </section>
  )
}
