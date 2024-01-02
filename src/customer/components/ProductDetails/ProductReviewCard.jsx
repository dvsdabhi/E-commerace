import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductReviewCard = ({ data }) => {

  const startArray = [
    {
      id: 0,
      icon: <AiFillStar />,
      icon1: <AiOutlineStar />,
    },
    {
      id: 1,
      icon: <AiFillStar />,
      icon1: <AiOutlineStar />,
    },
    {
      id: 2,
      icon: <AiFillStar />,
      icon1: <AiOutlineStar />,
    },
    {
      id: 3,
      icon: <AiFillStar />,
      icon1: <AiOutlineStar />,
    },
    {
      id: 4,
      icon: <AiFillStar />,
      icon1: <AiOutlineStar />,
    },
  ];

  const timestamp = new Date(data.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = timestamp.toLocaleDateString('en-US', options);

  // console.log("rating-=-=-", data.rating?.rating);
  return (
    <>
      <div>
        <section className="flex items-center my-3">
          <div className="p-5">
            <img
              src="https://uploads-ssl.webflow.com/6318ee7f8cd2577347722ef7/6356d2ab4380f2598b46410c_avatar%3Drange%2C%20medical%20contact%3Dfalse%2C%20size%3D128.png"
              alt=""
              className="rounded-full w-[4rem] h-[4rem] border-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-lg font-semibold">{data.user.firstName}</p>
              <p className="opacity-70">{formattedDate}</p>
            </div>
            <div className="flex text-yellow-500">
              {startArray.map((el, i) => (
                <div>
                  {data.rating?.rating > i ? el.icon : el.icon1}
                </div>
              ))}
            </div>
            <p className="">{data.review}</p>
          </div>
        </section>
      </div >
    </>
  );
};

export default ProductReviewCard;
