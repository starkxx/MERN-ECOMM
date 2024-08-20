import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
     </div>
     <div className="descriptionbox-description">
       <p>An ecommerce website is an online platform.......</p> 
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
       </p>
     </div>
    </div>
  )
}

export default DescriptionBox