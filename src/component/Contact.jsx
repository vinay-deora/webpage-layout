import React from 'react'

const Contact = () => {
  return (
<div className='contact' id='contact'>
<main>
    <h1>Contact Us</h1>
<form>

<div>
    <label> Name </label>
    <input type="text" required placeholder='Abc' />
    
</div>
<div>
    <label> Email </label>
    <input type="Email" required placeholder='Abc@gmail.com' />

</div>
<div>
    <label> Message</label>
    <input type="Text" required placeholder='Tell us about yourself' />

</div>
<button type='submit'>Submit</button>
</form>

</main>
</div>
  )
}

export default Contact
