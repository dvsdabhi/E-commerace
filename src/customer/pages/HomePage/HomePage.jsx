import React, { useEffect, useState } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import Signup from "../../components/Signup/Signup";
import { get_dresses } from "../../utils/queries";
import { get_sarees } from "../../utils/queries";

const HomePage = () => {
  const [dress, setDress] = useState([]);
  const [saree, setSarees] = useState([]);

  const dresses = async () => {
    try {
      const res = await get_dresses();
      // console.log("dresses------->>>>>>", dresses);
      setDress(res.data.dresses)
    } catch (error) {
      console.log(error.message);
    }
  }

  const sarees = async () => {
    try {
      const res = await get_sarees();
      console.log("sarees------->>>>>>", res);
      setSarees(res.data.sarees);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    dresses();
    sarees();
  }, [])

  console.log(saree);
  return (
    <>
      <div className="relative">
        <div className="mt-9">
          <MainCarousel />
          <div className="py-10 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel
              data={dress}
              sectionName={"New Dresses"}
            />
            <HomeSectionCarousel
              data={saree}
              sectionName={"New saree"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
