import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../src/img/bannar/bannar-1.jpg'
import bannar2 from '../../../src/img/bannar/bannar-2.jpg'
import bannar3 from '../../../src/img/bannar/bannar-3.jpg'

const Bannar = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: "550px" }}
                    className="d-block w-100"
                    src={bannar1}
                    alt="First slide"
                />
                <Carousel.Caption>

                    <h2 className='text-primary' >Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px" }}
                    className="d-block w-100"
                    src={bannar2}
                    alt="Second slide"
                />

                <Carousel.Caption>

                <h2 className='text-primary' >Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px" }}
                    className="d-block w-100"
                    src={bannar3}
                    alt="Third slide"
                />

                <Carousel.Caption>

                <h2 className='text-primary' >Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;