import React from 'react'
import './ImageHome.css'

function ImageHome() {
  return (
    <div>
    <div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
      <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>
    
    </div>
  )
}

export default ImageHome