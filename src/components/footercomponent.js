import React from 'react';

function FooterComponent() {
  return (
    <div className='container footer' style={{ color: 'white' }}>
      <h2 className='border-bottom border-warning text-center py-3 mt-4' style={{ color: 'rgb(255,255,255)' }}>CONTACT US</h2>
      <div className='row my-3' id="contact">
        <div className='col'>
          &copy;Copyright
        </div>

        <div className='col' >
          <ul>
            <li> <a href="https://www.facebook.com"> <i className="fab fa-facebook"></i></a>   </li>
            <li> <a href="https://twitter.com/" > <i className="fab fa-twitter-square"></i></a>   </li>
            <li> <a href="https://www.google.com/gmail/"> <i className="fab fa-google-plus"></i></a>   </li>
          </ul>
        </div>

      </div>
    </div>)
}


export default FooterComponent;