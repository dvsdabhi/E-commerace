import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 465 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <Carousel responsive={responsive}>{items}</Carousel>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
