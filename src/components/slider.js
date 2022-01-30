import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css'

function SliderComponent() {
    return (
        <div className='container slideOuterContainer'>
            <div style={{ color: 'rgb(255,255,255)' }}>
                <h1 style={{ color: 'yellow', fontStyle: 'italic', textAlign: 'center' }}>Accurate Weather Data!!!Think Weather Lens</h1>
                <div className="p-3">
                    <h2 className='border-bottom border-warning text-center py-3' id="about">ABOUT US</h2>
                    <h5 className="py-2">A weather app lets you do that wherever you are, whenever you like.</h5>
                    <p> A good weather app helps you decide if you'll need to bring an umbrella to work, or prepare for more serious conditions. With wild weather across the country, particularly hurricanes threatening coastal states, it's a good idea to check the forecast or radar for upcoming conditions. A weather app lets you do that wherever you are, whenever you like. </p>
                        <p>When testing weather apps, we spent most of our time evaluating the effectiveness of their design. An ideal weather app is visually pleasing and easy to use. </p>
                   
                    <p>For what it's worth, the apps were all quite accurate during testing. Despite earlier conspiracies, the rollout of the 5G wireless network shouldn’t ruin these weather forecasts. Besides, right now you should be staying inside anyway to help curb the ongoing pandemic, even on the nicest of days. If you're really concerned about accuracy, consider getting a weather station of your own. Though weather stations are more about recording your local data than about getting forecasts, setting up and maintaining a weather station is a fun science project—just maybe not right before a hurricane hits.</p>
                </div>
            </div>
            <Carousel interval={1000} className='my-3' >
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.pinimg.com/236x/8d/d6/1f/8dd61fa9b182c87fa1a234956be5432b.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'rgb(0,0,0)' }}>
                        <h3 className="fs-1">Where You Get Your Weather Matters</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.pinimg.com/564x/a7/78/5c/a7785cacd83d047427cfbf346aea439e.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3 className="fs-1">Bringing Weather to Life</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.pinimg.com/564x/32/89/29/3289292afc5642030a1e7854d8bd27f5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3 className="fs-1">The Sounds of Weather. Hear It,See It, Live It</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SliderComponent;


/*


<div class="my-4" id="testimonals">
                <h3 class="text-center fw-bolder my-3">Testimonals </h3>

                <div class="carousel slide mx-5" id="carouselSlide" data-bs-ride="carousel" data-bs-interval="1000">
                   <ol class="carousel-indicators">
                       <li class="active" data-bs-target="#carouselSlide" data-bs-slide-to="0"> </li>
                       <li data-bs-target="#carouselSlide" data-bs-slide-to="1"> </li>
                       <li data-bs-target="#carouselSlide" data-bs-slide-to="2"> </li>
                   </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="images/testimonal1.jpg" alt="testimonal1">

                            <div class="carousel-caption">
                               <img src="images/testimg.jpg" alt="testimg" style="width:20%; border-radius:50px;">
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis cum dignissimos ut cupiditate cumque, ratione provident hic atque eos repellendus ipsa dolores ea, nobis pariatur natus nam, magni similique?</p>
                                <span>- Rose</span>
                            </div>
                       </div>

                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/testimonal2.jpg" alt="testimonal2">

                            <div class="carousel-caption">
                                <img src="images/testimg2.jpg" alt="testimg2"  style="width:20%; border-radius:50px;">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis cum dignissimos ut cupiditate cumque, ratione provident hic atque eos repellendus ipsa dolores ea, nobis pariatur natus nam, magni similique?</p>
                                 <span>-Binita</span>
                             </div>
                        </div>

                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/testimonal3.jpg" alt="testimonal3">

                            <div class="carousel-caption">
                                <img src="images/testimg3.jpg" alt="testimg3"  style="width:20%; border-radius:50px;">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis cum dignissimos ut cupiditate cumque, ratione provident hic atque eos repellendus ipsa dolores ea, nobis pariatur natus nam, magni similique?</p>
                                 <span>-Krish</span>
                             </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" role="button" href="#carouselSlide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>

                    <a class="carousel-control-next" role="button" href="#carouselSlide" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>   */