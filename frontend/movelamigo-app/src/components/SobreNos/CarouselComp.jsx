import React from 'react';
import { Carousel } from 'react-bootstrap'
import helena from './images/elena-rabkina-eVVzwsNhNf4-unsplash.jpg'
import sobrenos1 from './images/sobrenos1.jfif'
import sobrenos2 from './images/sobrenos2.jfif'
import sobrenos3 from './images/sobrenos3.jfif'
import sobrenos4 from './images/sobrenos4.jfif'


export default function CarouselComp() {
        

  return (
            <div className='slider'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={helena}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sobrenos1}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sobrenos2}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sobrenos3}
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sobrenos4}
                        alt="Fifth slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
      }
