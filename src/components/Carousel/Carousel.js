import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Images} from "../../assets/_data";

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.style = props.style;
    }
      
    render() {
        var settings = {
            className: "slider carousel",
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        if(this.style === 'scroll') {
            settings = {
                className: "slider carousel-featured",
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                centerPadding: 30,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
                ]
            };
        }

        // console.log('[Carousel] Images: ' + Images);
        const slides = Images.map((img, index) => {
            let imgUrl = img.src;

            return (
            <div key={index}>
                <img src={imgUrl} alt={img.alt} />
                <span>{img.alt}</span>
            </div>
            );
        });

        return (
            <section className="featured-items-wrap">
                {/* <h2>Style: {this.style}</h2> */}
                <Slider {...settings}>{slides}</Slider>
            </section>
        );
    }
}

export default SimpleSlider;
