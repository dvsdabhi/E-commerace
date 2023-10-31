import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full relative bottom-0 flex flex-col gap-10 bg-black">
        <div className="container flex xsm:flex-col xsm:gap-4 justify-between mx-auto text-white p-5">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl">Company</h1>
            </div>
            <div className="flex flex-col items-center xsm:items-start text-gray-400">
              <button className="text-lg">About</button>
              <button className="text-lg">Blog</button>
              <button className="text-lg">Jobs</button>
              <button className="text-lg">Press</button>
              <button className="text-lg">Partners</button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl">Solutions</h1>
            </div>
            <div className="flex flex-col items-center xsm:items-start text-gray-400">
              <button className="text-lg">Marketing</button>
              <button className="text-lg">Analytics</button>
              <button className="text-lg">Commerce</button>
              <button className="text-lg">Insights</button>
              <button className="text-lg">Support</button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl">Documentation</h1>
            </div>
            <div className="flex flex-col items-center xsm:items-start text-gray-400">
              <button className="text-lg">Guides</button>
              <button className="text-lg">API Status</button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl">Legal</h1>
            </div>
            <div className="flex flex-col items-center xsm:items-start text-gray-400">
              <button className="text-lg">Claim</button>
              <button className="text-lg">Privacy</button>
              <button className="text-lg">Terms</button>
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-center mb-6">
          <p>@2023 My Company.All rights reserved</p>
          <p>Made with love by Me.</p>
          <p>Icons made by Freepik from www.flaticon.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
