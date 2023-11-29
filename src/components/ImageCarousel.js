import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ImageCarousel = ({images}) =>{
    const [index, setIndex] = useState(0);
    console.log(images)
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel style = {{marginLeft: "10px"}} activeIndex={index} onSelect={handleSelect}>
            {images.map(link =>         
                <Carousel.Item>
                    <Image src= {link} thumbnail />
                </Carousel.Item> 
            )}
      </Carousel>
    );
};


export default ImageCarousel;