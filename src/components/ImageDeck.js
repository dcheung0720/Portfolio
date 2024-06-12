import Carousel from 'react-bootstrap/Carousel';

const ImageDeck = ({images, handleImageOpen}) =>{

    const handleChildClick = (e) => {
        e.stopPropagation();
    };


    return <div style = {{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
            backgroundColor: "rgba(255,255,255,0.3)", zIndex: 3,
            display: "flex", justifyContent: "center", alignItems: "center"}}
            onClick={handleImageOpen}>
                
        <Carousel style={{zIndex: 200}} onClick={handleChildClick}>
            {images.map(link => 
                <Carousel.Item>
                    <img src = {link}></img>
                </Carousel.Item>
            )}
        </Carousel>
    </div>
};

export default ImageDeck;