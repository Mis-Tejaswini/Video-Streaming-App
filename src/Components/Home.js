import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
       <div className="card-container"  >
       
       <CardGroup>
      
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px', margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px', margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px',margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
    </CardGroup>

    <CardGroup>
      
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px', margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px', margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="col-md-4" style={{ width: '18rem' ,padding: '10px',margin:'20px'}}>
      <Card.Img variant="top" src="Image/bg3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
    </CardGroup>
    </div>
    </div>
  )
}
export default Home;
