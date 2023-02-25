import React from 'react'
import './css/WidgetContent.css'

function WidgetContent() {
  return (
    <div className='widget_contents'>
        <div className='widget_content'>
            <img src=' https://1.bp.blogspot.com/-Iuo6R-kkxRM/XOpe5lrpaYI/AAAAAAAAIZM/J_Fii8KSPVY-RCO4gCNdilAkQMslfgyFwCLcBGAs/s1600/p2.JPG' alt='photo' />
            <div className='widget_contentTitle'>
                <h5>Technical News</h5>
                <p>What's new going on in the technical field</p>
            </div>
        </div>
        <div className='widget_content'>
            <img src='https://nahswingspan.com/wp-content/uploads/2018/04/Rumors-logo.png' alt='photo' />
            <div className='widget_contentTitle'>
                <h5>Rumors</h5>
                <p>What is going on in the college</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent;