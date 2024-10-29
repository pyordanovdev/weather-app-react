import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DisplayForecastData from "./DisplayForecastData";
function SlickSlider({ dataObject }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {Object.keys(dataObject).map((key, index) => {
        return (
          <DisplayForecastData
            key={index}
            date={key}
            forecastDataObject={dataObject[key]}
          />
        );
      })}
    </Slider>
  );
}

export default SlickSlider;
