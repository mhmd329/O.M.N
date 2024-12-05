import React, { useState } from 'react'
import './sceit.css'
 const Sceit = () => {

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!checked);
    };
  return (
    <section className='sceit'>
<div>
    <h2>We're happy to hear from you</h2>
</div>
<div className='row'>
<form>
    <div className='row'>
<div className='col-md-4 awaw'>
<label for='name'>
    Name
</label>
</div>
<div className='col-md-6 tanyn'>
<input type='text'required placeholder='Your name'/>

</div>
    </div>
    <div className='row'>
<div className='col-md-4 awaw'>
<label for='ُEmail'>
    Email
</label>
</div>
<div className='col-md-6 tanyn'>
<input type='email'required placeholder='Your email'/>

</div>
    </div>
   
    <div className='row'>
<div className='col-md-4 awaw'>
<label for='find us'>
    How did you find us?
</label>
</div>
<div className='col-md-6 tanyn'>
<select>
    <option value="friends" selected>Friends</option>
    <option value="search" selected>Search engine</option>
    <option value="ad" selected>Advertisement</option>
    <option value="other" selected>Other</option>
    
</select>

</div>

 <div className='row'>
<div className='col-md-4 awaw'>
<label for='ُEmail'>
Newsletter?
</label>
</div>
<div className='col-md-6 tanyn check-box'>
<input type="checkbox"  onChange={handleCheckboxChange} />

Yes, please
</div>
    </div>
 <div className='row'>
<div className='col-md-4 awaw'>
<label for='ُEmail'>
Drop us a line</label>
</div>
<div className='col-md-6 tanyn '>
<textarea name="message" placeholder="Your message" rows="10" cols="50" >

</textarea>

</div>
    </div>
 <div className='row'>
<div className='col-md-4 awaw'>
<label for='ُEmail'>
</label>
</div>
<div className='col-md-6 tanyn '>
<button className='difbt'> Send it!</button>

</div>
    </div>
    </div>
</form>
</div>

    </section>
  )
}
export default Sceit