import { Avatar } from '@material-ui/core';
import React from 'react'
import "./css/UttarBox.css";
function UttarBox() {
  return (
    <div className='uttarBox'>
        <div className='uttarBox_info'>
       <Avatar/>
        </div>
        <div className='uttarBox_uttar'>
            <h5>What is your question or link?</h5>
        </div>
    </div>
  );
}

export default UttarBox