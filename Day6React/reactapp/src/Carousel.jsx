import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="carousel-image" src="../src/assets/fashion.jfif" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="carousel-image" src="../src/assets/elec.jfif" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src="../src/assets/food.jfif" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;