// import React from 'react'
// import './Header.css'

// // const Header = () => {
// //     return (
// //         <div className='header'>
// //             <div className='header-contents'>
// //                 <h2>Order your favourite food here</h2>
// //                 <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
// //                 <button>View Menu</button>
// //             </div>
// //         </div>
// //     )
// // }

// export default Header
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      {/* Background Video */}
      <video className="header-video" autoPlay loop muted playsInline>
        <source  className='Video-size' src="/public/videos/header_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content Overlay */}
      <div className="header-contents">
        <h1>
         Order your <br/>
         favourite food here
         </h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
          ingredients and culinary expertise. 
          
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header

