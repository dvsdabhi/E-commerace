import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/Logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import WomenAssessories from "../WomenAssessories/WomenAssessories";
import Signup from "../Signup/Signup";
import SignIn from "../SignIn/SignIn";

const Navigation1 = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [womenAccessoriesData, setWomenAccessories] = useState(false);
  const [Id, setID] = useState("");
  const [signup, setSignup] = useState(false);
  const [signInbox, setSignin] = useState(false);

  const OpenSideBar = () => {
    setOpenMenu(true);
  };

  const handleSignup = () => {
    setSignup(!signup);
  };

  const handleMouseEnter = (id) => {
    setWomenAccessories(true);
    setID(id);
  };
  return (
    <>
      <div className="flex justify-between px-4 md:px-2 py-5 md:py-3 border-b items-center">
        <div className="flex w-full items-center sm:hidden xsm:hidden md:flex 2xl:flex">
          <div className="flex w-full gap-10 md:gap-5 items-center">
            <div>
              <img src={logo} alt="" className="h-10" />
            </div>
            <div>
              <ul className="flex justify-evenly gap-7 md:gap-3">
                <li>
                  <Link
                    to={"#"}
                    className={`${
                      Id === "women" &&
                      "text-blue-700 underline underline-offset-8"
                    }`}
                    onMouseEnter={() => handleMouseEnter("women")}
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className={`${
                      Id === "men" &&
                      "text-blue-700 underline underline-offset-8"
                    }`}
                    onMouseEnter={() => {
                      handleMouseEnter("men");
                    }}
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="hover:text-blue-700 hover:underline hover:underline-offset-8"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="hover:text-blue-700 hover:underline hover:underline-offset-8"
                  >
                    Stores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center sm:hidden xsm:hidden md:flex 2xl:flex">
          <div className="flex w-full gap-10 md:gap-5 justify-end items-center">
            <button
              className="hover:text-blue-700 hover:bg-pink-50 p-2"
              onClick={handleSignup}
            >
              SIGNIN
            </button>
            <CgProfile className="text-2xl" />
            <div className="flex border rounded-lg p-2">
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
              <span>
                <FiSearch className="cursor-pointer text-2xl text-gray-500" />
              </span>
            </div>
            <HiOutlineShoppingBag className="text-2xl text-gray-500" />
          </div>
        </div>
        <FiMenu
          className="text-2xl md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={OpenSideBar}
        />
        <div className="flex items-center gap-2 p-5 sm:p-0 xsm:p-0">
          <button className="hover:text-blue-700 hover:bg-pink-50 p-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
            SIGNIN
          </button>
          <CgProfile className="text-2xl md:hidden lg:hidden xl:hidden 2xl:hidden" />
          <FaCartShopping className="text-xl md:hidden lg:hidden xl:hidden 2xl:hidden" />
        </div>
        {signup && (
          <Signup signup={signup} setSignup={setSignup} setSignin={setSignin} />
        )}
        {signInbox && <SignIn setSignup={setSignup} setSignin={setSignin} />}
      </div>
      {OpenMenu === true && <Sidebar setOpenMenu={setOpenMenu} />}
      {womenAccessoriesData && (
        <WomenAssessories
          setWomenAccessories={setWomenAccessories}
          womenAccessoriesData={womenAccessoriesData}
          Id={Id}
          setID={setID}
        />
      )}
    </>
  );
};

export default Navigation1;
