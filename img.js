import React from 'react';
import {Carousel} from "react-bootstrap"

function CarouselFadeExample() {
   
    return (
       
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nitdgp.ac.in/uploads/azadiamrit.jpg"
             alt="first slide"
          />
          <Carousel.Caption>
            <h3>Main Gate</h3>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nitdgp.ac.in/uploads/academic_1550x51721_(1).jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Main Academic Building</h3>
      
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nitdgp.ac.in/uploads/azadiamrit.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Main Gate</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
}

export default CarouselFadeExample;