import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./ProductDetails.css";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addProductRating, getSingleProduct } from "../../utils/queries";
import axios from "axios";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import { get_similarProduct } from "../../utils/queries";
import { useSelector } from "react-redux";


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
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
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
  // totalRatings
  const [rating, setRating] = useState(0);
  const [sumRating, setSumRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [starPercentage, setStarPercentage] = useState({
    OneStar: 0,
    TwoStar: 0,
    ThreeStar: 0,
    FourStar: 0,
    FiveStar: 0,
  });
  const [addReview, setAddReview] = useState("");
  const [totalReview, setTotalReview] = useState(0);
  const [getReview, setReview] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [singleProductData, setSingleProductData] = useState();
  const [ProductLoading, setProductLoading] = useState("");
  const [img, setImg] = useState("");
  const [similer, setSimiler] = useState([]);


  const navigate = useNavigate();
  const params = useParams();
  // console.log("params----------", params.productId);
  const P_ID = params.productId;

  const get_single_Product = async () => {
    // console.log("P_ID------------------", P_ID);
    try {
      setProductLoading(true);
      const res = await getSingleProduct(P_ID);
      // console.log("res-------->>>>>>>>>", res.data.singleProduct.title);
      setSingleProductData(res.data.singleProduct);
      setProductLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const get_similar_product = async () => {
    const res = await get_similarProduct(P_ID);
    setSimiler(res.data.product);
  }

  useEffect(() => {
    get_single_Product();
    get_similar_product();
  }, [P_ID]);

  const isLogin = useSelector((state) => state.auth.isAuth);

  const token = localStorage.getItem("authToken");

  // console.log("singleProductData---------->>>>>", singleProductData);

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

  const Ratingpercentage = [
    {
      name: "Excellent",
      percentage: "FiveStar",
      color: "bg-green-600",
    },
    {
      name: "Very Good",
      percentage: "FourStar",
      color: "bg-cyan-400",
    },
    {
      name: "Good",
      percentage: "ThreeStar",
      color: "bg-yellow-400",
    },
    {
      name: "Avarage",
      percentage: "TwoStar",
      color: "bg-orange-600",
    },
    {
      name: "Poor",
      percentage: "OneStar",
      color: "bg-red-600",
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
    // console.log("selekbmgkvcbvckbjgf", e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleAddToCart = async (e) => {
    console.log("itemID---------------", P_ID);
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://node-mongodb-api-4zq2.onrender.com/api/cart`,
        {
          id: P_ID,
          size: selectedOption
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response.....---------->>", res);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // console.log(selectedOption);

  // add rating logic
  const AddRating = async () => {
    if (isLogin) {
      try {
        const res = await axios.post(`https://node-mongodb-api-4zq2.onrender.com/api/rating/${P_ID}`,
          { rating },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        toast.success("thank you for the rating");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Login your account");
    }
  }

  // getRating logic
  const Get_Rating = async () => {
    try {
      const res = await axios.get(`https://node-mongodb-api-4zq2.onrender.com/api/totalRating/${P_ID}`);
      setSumRating(res.data.overallRating);
      setTotalRating(res.data.totalRatings);
      setStarPercentage({
        OneStar: res.data.OneStar,
        TwoStar: res.data.TwoStar,
        ThreeStar: res.data.ThreeStar,
        FourStar: res.data.FourStar,
        FiveStar: res.data.FiveStar,
      })
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Get_Rating();
  }, []);

  // Add review logic
  const AddReview = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const res = await axios.post(`https://node-mongodb-api-4zq2.onrender.com/api/review/${P_ID}`,
          { addReview },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("login your account");
    }
  }

  const Get_Review = async () => {
    try {
      const res = await axios.get(`https://node-mongodb-api-4zq2.onrender.com/api/totalReview/${P_ID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      setTotalReview(res.data.total_review);
      setReview(res.data.reviews.reverse());
      // setUserReviewRating(res.data.reviews.rating.rating);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Get_Review();
  }, []);

  // console.log("getReview---", getReview);

  return (
    <>
      {ProductLoading ? (
        <div className="py-36 flex justify-center items-center">
          <RingLoader />
        </div>
      ) : (
        <>
          {singleProductData && (
            <div>
              {/* product details */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
                {/* product image  */}
                <div className="flex flex-col items-center">
                  <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                    {!img ? <img alt="" src={singleProductData.imageUrl[0]} className="h-full w-full object-cover object-center" /> :
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />}
                  </div>
                  <div className="flex flex-wrap space-x-5 justify-center">
                    {singleProductData.imageUrl.map((item, index) => (
                      <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 hover:border-2 hover:border-black">
                        <img
                          src={item}
                          onMouseOver={() => setImg(item)}
                          alt=""
                          className="flex h-full w-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* product info */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-semibold text-gray-900">
                      {singleProductData.title}
                    </h1>
                    <p className="text-lg text-gray-900 opacity-60 pt-1">{singleProductData.brand}</p>
                    <div className="flex space-x-5 items-center text-lg text-gray-900 mt-6">
                      <p className="font-semibold">₹{singleProductData.discountedPrice.toFixed(0)}</p>
                      <p className="opacity-50 line-through">₹{singleProductData.price}</p>
                      <p className="text-green-600 font-semibold">{singleProductData.discountPersent}% Off</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex items-center">
                        {startArray.map((el, i) => (
                          <h1
                            key={el.id}
                            className="text-yellow-500 text-4xl"
                          >
                            {sumRating > i ? el.icon : el.icon1}
                          </h1>
                        ))}
                        <p className="opacity-50 text-sm ml-3">{totalRating} Ratings</p>
                        <p className="text-sm font-medium ml-3 text-indigo-600 hover:text-indigo-500">
                          {totalReview} Reviews
                        </p>
                      </div>
                      <p>Rating: {sumRating.toFixed(1)}/5</p>
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 my-3">
                        Size
                      </h3>
                    </div>
                    <form
                      action=""
                      onSubmit={(e) => handleAddToCart(e)}
                      className="flex flex-col items-start gap-4"
                    >
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

                      <button
                        type="submit"
                        className="bg-violet-500 text-white p-3 rounded-lg"
                      >
                        ADD TO CART
                      </button>
                    </form>
                  </div>

                  <div>
                    <p>{singleProductData.description}</p>
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

              <section className="flex flex-col gap-3 my-20 mx-3 lg:px-14">
                <div>
                  <h1 className="text-lg font-semibold">Recent Review & Rating</h1>
                </div>
                <div className="border border-gray-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {getReview?.length > 0 ? (
                      <>
                        <div>
                          {getReview.slice(0, 3).map((item) => (
                            <ProductReviewCard data={item} />
                          ))}
                          <div className="flex justify-center">
                            <button onClick={() => navigate(`/allreview/${P_ID}`)} className="text-center text-blue-600 underline underline-offset-4 hover:text-blue-400">Show All Review & Rating</button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="p-5">
                        <h1 className="text-xl font-bold">No Review founded</h1>
                      </div>
                    )}
                    {totalRating > 0 ? (
                      <div className="my-3 px-4">
                        <h1 className="font-semibold">Product Ratings</h1>
                        <div className="flex gap-2 items-center">
                          <div className="flex text-yellow-500">
                            {startArray.map((el, i) => (
                              <h1
                                key={el.id}
                                className="text-yellow-500 text-xl"
                              >
                                {sumRating > i ? el.icon : el.icon1}
                              </h1>
                            ))}
                          </div>
                          <div>
                            <h1 className="opacity-70">{totalRating} Ratings</h1>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-8">
                          {Ratingpercentage.map((item) => (
                            <div className="flex items-center">
                              <div className="w-24 pr-2">
                                <p>{item.name}</p>
                              </div>
                              {/* <div></div> */}
                              <div className="h-2 bg-gray-200 w-[60%] lg:w-[40%] rounded-full">
                                <div
                                  className={`h-2 ${item.color} rounded-full `}
                                  style={{ width: `${starPercentage[item.percentage]}%` }}
                                ></div>
                              </div>
                              <span className="pl-5">{`${(starPercentage[item.percentage])?.toFixed(0)}%`}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-5">
                        <h1 className="text-xl font-bold">No Rating found</h1>
                      </div>
                    )}


                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col space-y-5 p-5">
                      <div className="">
                        <h1 className="text-center font-semibold">Write A Product Review</h1>
                      </div>
                      <div>
                        <form action="" className="flex flex-col space-y-3" onSubmit={AddReview}>
                          <textarea name="" id="" cols="30" rows="5" onChange={(e) => setAddReview(e.target.value)} className="border-2 border-gray-400 p-2 rounded-lg" placeholder="Enter your review here"></textarea>
                          <button className="p-2 border-2 border-gray-400 rounded-lg">ADD Review</button>
                        </form>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-col space-y-5">
                        <div>
                          <h1 className="text-center font-semibold">Write A Product Rating</h1>
                        </div>
                        <div className="flex flex-col space-y-5 py-5 border-2 border-gray-400 rounded-lg items-center">
                          <div className="flex">
                            {startArray.map((el, i) => (
                              <h1
                                key={el.id}
                                onClick={() => handleRatingClick(i + 1)}
                                className={`${rating > i
                                  ? "text-yellow-500 text-4xl"
                                  : "text-yellow-500 text-4xl"
                                  }`}
                              >
                                {rating > i ? el.icon : el.icon1}
                              </h1>
                            ))}
                          </div>
                          <p>Rating: {rating}/5</p>
                          <div>
                            <button className="p-2 border-2 border-gray-400 rounded-lg" onClick={AddRating}>ADD Rating</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* similer products */}

              <section className="flex flex-col items-center lg:items-start px-10 lg:px-14 py-5">
                <h1 className="pb-5 text-xl font-bold ml-3">Similer Products</h1>
                <div className="flex flex-wrap space-y-5 space-x-2">
                  {similer.map((item) => (
                    <HomeSectionCard product={item} />
                  ))}
                </div>
              </section>
            </div>
          )}
        </>
      )}

    </>
  );
};

export default ProductDetails;
