import React from "react";
import { navigation } from "../../../Data/NavbarData";
import { Link } from "react-router-dom";

const WomenAssessories = ({
  setWomenAccessories,
  womenAccessoriesData,
  Id,
  setID,
}) => {
  const Data = [];
  navigation.categories.map((category) => {
    // console.log(category);
    if (category.id === Id) {
      Data.push(category);
    }
  });

  const handleMouseLeave = () => {
    setWomenAccessories(!womenAccessoriesData);
  };
  return (
    <>
      <div
        className="flex justify-between w-full bg-white py-16 px-24 absolute z-50 mt-16 sm:hidden xsm:hidden md:flex xl:flex 2xl:flex shadow-2xl"
        onMouseLeave={() => {
          handleMouseLeave();
          setID("");
        }}
      >
        <div className="flex justify-around w-full">
          {Data.map((category) => (
            <>
              <div className="flex justify-around w-full">
                {category.sections.map((product) => (
                  <div className="">
                    <h1 className="font-bold px-1">{product.name}</h1>
                    <div className="flex flex-col gap-3 py-3 text-gray-500">
                      {product.items.map((data) => (
                        <>
                          <div className="flex px-1">
                            <ul className="">
                              <li>
                                <Link>{data.name}</Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex gap-5 ">
                {category.featured.map((item) => (
                  <>
                    <div className="">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="rounded-xl h-[230px] md:h-[190px]"
                      />
                      <div className="py-5">
                        <h1>{item.name}</h1>
                        <p className="text-gray-500">Shop now</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
          {/* <div>Clothing</div>
          <div>Accessories</div>
          <div>Brands</div> */}
        </div>
      </div>
    </>
  );
};

export default WomenAssessories;
