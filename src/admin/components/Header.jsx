import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Modal from "./Modal";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="relative">
        <HiMenu className="text-3xl sm:hidden" onClick={handleSidebar} />
        <hr className="border border-black mb-5" />
        {openSidebar && (
          <Modal openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        )}
      </div>
    </>
  );
};

export default Header;
