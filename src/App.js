import React, { useState } from 'react';
import './App.css';
let App = () => {
  return(
    <div>
      <header>
<div className='text'>
English Language Tutors
</div>
<div className='logo'>
<img className='logol' src="../images/Tutor.png" alt="logo"/>
</div>
</header>
<main>
<div className='Standart-shapka'>
<ul>
    <li>Standart</li>
    <li>35 000тг</li>
  </ul>
</div>

<div className='Standart-footer'>
  <ul>
    <li>Group form of training</li>
    <li>An experienced teacher</li>
    <li>12 hours per month</li>
    <li>The duration of the lesson is 60 minutes</li>
  </ul>
</div>
<div className='button-first'><button className='button-first-but'>sign up</button></div>

<div className='Silver-shapka'>
<ul>
    <li>Advanced</li>
    <li>50 000тг</li>
  </ul>
</div>
<div className='Silver-footer'>
  <ul>
    <li>Individual form of training</li>
    <li>Foreign teacher</li>
    <li>12 hours per month</li>
    <li>The duration of the lesson is 60 minutes</li>
  </ul>
</div>
<div className='button-second'><button className='button-second-but'>sign up</button></div>


<div className='Professional-shapka'>
<ul>
    <li>Professional</li>
    <li>80 000тг</li>
  </ul>
</div>
<div className='Professional-footer'>
  <ul>
    <li>Individual form of training</li>
    <li>Foreign teacher</li>
    <li>16 hours per month</li>
    <li>The duration of the lesson is 80 minutes</li>
  </ul>
</div>
<div className='button-third'><button className='button-third-but'>sign up</button></div>
</main>
<footer>
<div className='footer'>
<div className='contacts'>Contacts:</div>
<div className='number'>+77016677853</div>
<div className='address'>Address: Almaty city,Auezov st. 65</div>
</div>

</footer>




</div>
  );
}

export default App;


