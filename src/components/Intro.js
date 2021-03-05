import React from 'react';
import drink1 from '../img/drink1.jpg';

const Intro = () => {
  return (
    <div>
       <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Bring <span>Cocktails</span></h2>
          </div>
          <div className="hide">
            <h2>Straight To Your</h2>
          </div>
          <div className="hide">
            <h2><span>Door</span></h2>
          </div>
        </div>
        <p>To see a list of what we sell then please click the button</p>
        <button>Menu</button>
      </div>
      <div className="image">
       <img src={drink1} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Intro
