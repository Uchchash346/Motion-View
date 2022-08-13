import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import image1 from '../components/images/image1.jpg';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.jpg';



const Slider = () => {
    return (
        <Carousel>
            <div>
                <Image
                    src={image1}
                    alt='image1'
                />
            </div>
            <div>
                <Image
                    src={image2}
                    alt='image1'
                />
            </div>
            <div>
                <Image
                    src={image3}
                    alt='image1'
                />
            </div>
        </Carousel>
    );
};

export default Slider;