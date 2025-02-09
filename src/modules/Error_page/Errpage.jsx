import React from 'react'
import "./Errpage.css";

const Errpage = () => {
  return (
    <div className='error'>
        <div class="mainbox">
            <div class="err">404</div>
            <div class="msg">Maybe this page moved? Got deleted? Never existed in the first place?<p>Let's go <a href="/app">home</a> and try from there.</p></div>
        </div>
      
    </div>
  )
}
export default Errpage;




