import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Images} from "../../assets/_data";

class SimpleSlider extends React.Component {
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
    };

    // console.log('[Carousel] Images: ' + Images);
    const slides = Images.map((img, index) => {
      let imgUrl = img.src;

      return (
        <div key={index}>
          <img src={imgUrl} alt={img.alt} />
        </div>
      );
    });

    return <Slider {...settings}>{slides}</Slider>;
  }
}

export default SimpleSlider;
