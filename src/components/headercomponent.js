import React from 'react'
import SliderComponent from './slider';


const HeaderComponent = (props) => {
    return (
        <div className='container header my-3'>
            <div className='row'>
                <div className='col-12 col-lg-6 text-md-start'>
                    <div className='logo my-3'></div>
                </div>

                <div className='col-12 col-lg-6'>
                    <ul className='links'>
                        <li><a className='btn btn-outline-light' href='#about'>About</a></li>
                        <li><a className='btn btn-outline-light' href='#search'>Search Weather  <i className='fas fa-search ps-2'></i> </a></li>
                        <li><a className='btn btn-outline-light' href='#contact'>Contact us</a></li>
                    </ul>
                </div>
            </div>

           <SliderComponent/>

        </div>
    )
};

export default HeaderComponent;

