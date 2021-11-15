import "./Carousel.css";

let numPics = 3;
let counter = 1;
let carouselWindow = document.getElementById("#carousel-window")!;
const CarouselUp = () => {
    if (counter < numPics) {
        counter = counter + 1;
        carouselWindow.style.backgroundImage = `url(../images/carousel/image${counter}.jpeg`;
    } else if (counter = numPics) {
        carouselWindow.style.backgroundImage = `url(../images/carousel/image1.jpeg)`;
        counter = 1;
    };
};
const CarouselDown = () => {
    if (counter > 1) {
        counter = counter - 1;
        carouselWindow.style.backgroundImage = `url(../images/carousel/image${counter}.jpeg)`;
        console.log("Down")
    } else if (counter = 1) {
        carouselWindow.style.backgroundImage = `url(../images/carousel/image3.jpeg)`;
        counter = numPics;

    };
};




export default function Carousel() {
    return (
        <div id="carousel">
            <div id="carousel-window">
                <div className="slider_nav">
                    <span className="slider_nav__button"><i id="left" className="fas fa-chevron-circle-left" onClick={() => CarouselDown()}></i></span>
                </div>
                <div className="slider_nav">
                    <span className="slider_nav__button"><i id="right" className="fas fa-chevron-circle-right" onClick={() => CarouselUp()}></i></span>
                </div>    
            </div>
        </div>
    );

}