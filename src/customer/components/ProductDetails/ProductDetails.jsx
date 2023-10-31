import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./ProductDetails.css";
import ProductReviewCard from "./ProductReviewCard";

const ProductDetails = () => {
  const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };

  const [rating, setRating] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleRatingClick = (newRating) => {
    if (newRating === rating) {
      setRating(newRating - 1);
    } else {
      setRating(newRating);
    }
  };

  const handlerSelect = (e) => {
    console.log("selekbmgkvcbvckbjgf", e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* product image  */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="flex h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* product info           */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <p className="text-lg text-gray-900 opacity-60 pt-1">The Basic</p>
              <div className="flex space-x-5 items-center text-lg text-gray-900 mt-6">
                <p className="font-semibold">₹199</p>
                <p className="opacity-50 line-through">₹211</p>
                <p className="text-green-600 font-semibold">5% Off</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center">
                  {startArray.map((el, i) => (
                    <h1
                      key={el.id}
                      onClick={() => handleRatingClick(i + 1)}
                      className={`${
                        rating > i
                          ? "text-yellow-500 text-4xl"
                          : "text-yellow-500 text-4xl"
                      }`}
                    >
                      {rating > i ? el.icon : el.icon1}
                    </h1>
                  ))}
                  <p className="opacity-50 text-sm ml-3">56540 Ratings</p>
                  <p className="text-sm font-medium ml-3 text-indigo-600 hover:text-indigo-500">
                    3870 Reviews
                  </p>
                </div>
                <p>Rating: {rating}/5</p>
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 my-3">Size</h3>
              </div>
              <form action="" className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <label
                      htmlFor={`size-${s.name}`}
                      className="radio-button"
                      style={{
                        backgroundColor:
                          selectedOption === s.name ? "" : "#ffffff",
                      }}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={s.name}
                        checked={selectedOption === s.name}
                        onChange={handlerSelect}
                        id={`size-${s.name}`}
                      />
                      {s.name}
                    </label>
                  ))}
                </div>

                <button className="bg-violet-500 text-white p-3 rounded-lg">
                  ADD TO CART
                </button>
              </form>
            </div>

            <div>
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Highlights</h3>
              <ul className="flex flex-col gap-2 list-disc px-4 text-gray-700">
                {product.highlights.map((item) => (
                  <li>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Details</h3>
              <p className="text-gray-700">{product.details}</p>
            </div>
          </div>
        </section>

        {/* Rating and reviews */}

        <section className="my-14">
          <div>
            <h1 className="text-lg font-semibold">Recent Review & Rating</h1>
          </div>
          <div>
            <ProductReviewCard/>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
