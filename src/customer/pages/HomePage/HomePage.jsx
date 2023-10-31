import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import Signup from "../../components/Signup/Signup";
const HomePage = () => {
  return (
    <>
      <div className="relative">
        <div className="mt-9">
          <MainCarousel />
          <div className="py-10 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel
              data={mens_kurta}
              sectionName={"Men's Kurta"}
            />
            <HomeSectionCarousel
              data={mens_kurta}
              sectionName={"Men's Shoes"}
            />
            <HomeSectionCarousel
              data={mens_kurta}
              sectionName={"Men's Shirt"}
            />
            <HomeSectionCarousel
              data={mens_kurta}
              sectionName={"Women's Saree"}
            />
            <HomeSectionCarousel
              data={mens_kurta}
              sectionName={"Women's Dress"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
