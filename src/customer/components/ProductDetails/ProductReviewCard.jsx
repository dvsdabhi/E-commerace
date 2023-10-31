import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductReviewCard = () => {
  return (
    <>
      <div>
        <section className="flex border-2 border-gray-400 items-center my-3">
          <div className="p-5">
            <img
              src="https://uploads-ssl.webflow.com/6318ee7f8cd2577347722ef7/6356d2ab4380f2598b46410c_avatar%3Drange%2C%20medical%20contact%3Dfalse%2C%20size%3D128.png"
              alt=""
              className="rounded-full w-[4rem] h-[4rem] border-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p>Divyesh</p>
              <p>April 5,2023</p>
            </div>
            <div className="flex text-yellow-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>Nice Product,I loved this shirt</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductReviewCard;
