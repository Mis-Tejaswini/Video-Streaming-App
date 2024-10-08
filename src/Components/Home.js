import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Home () {
  return (

    <div className="carousel-container">

        <h1> Welcome to Video Streaming Application </h1>

        <Carousel>
      <Carousel.Item>
      <div className="carousel-slide">
        <img src='Image/bg1.jpg'/>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="carousel-slide">
        <img src='Image/video-app.jpg'/>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      
      <div className="carousel-slide">
        <img src='Image/video-app1.jpg'/>
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Home;
