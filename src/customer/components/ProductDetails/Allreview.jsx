import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

const Allreview = () => {

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

    const [getReview, setReview] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("authToken");

    const params = useParams();
    const P_ID = params.productId;

    const Get_Review = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.LOCALHOST_URL}api/totalReview/${P_ID}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
            setLoading(false);
            setReview(res.data.reviews.reverse());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Get_Review();
    }, [])


    return (
        <>
            {loading ? (
                <div className="py-36 flex justify-center items-center">
                    <RingLoader />
                </div>
            ) : (
                <>
                    <div className="p-5">
                        <div className="flex justify-center">
                            <h1 className="text-xl font-bold">Review & Rating</h1>
                        </div>
                        {getReview.map((item, index) => (
                            <section key={index} className="flex items-center my-3 border-2 border-gray-500 rounded-lg">
                                <div className="p-5">
                                    <img
                                        src="https://uploads-ssl.webflow.com/6318ee7f8cd2577347722ef7/6356d2ab4380f2598b46410c_avatar%3Drange%2C%20medical%20contact%3Dfalse%2C%20size%3D128.png"
                                        alt=""
                                        className="rounded-full w-[4rem] h-[4rem] border-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>
                                        <p className="text-lg font-semibold">{item.user.firstName}</p>
                                        <p className="opacity-70">
                                            {new Date(item.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                    <div className="flex text-yellow-500">
                                        {startArray.map((el, i) => (
                                            <div>
                                                {item.rating?.rating > i ? el.icon : el.icon1}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="">{item.review}</p>
                                </div>
                            </section>
                        ))}
                    </div >
                </>
            )}
        </>
    );
};

export default Allreview;