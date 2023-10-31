import React from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { navigation } from "../../../Data/NavbarData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Sidebar = ({ setOpenMenu }) => {
  const close_Sidebar = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="h-full bg-white w-80 z-50 fixed inset-0 overflow-y-scroll">
        <div className="flex justify-end p-5 border-b">
          <GrClose onClick={close_Sidebar} className="text-xl" />
        </div>
        <div className="p-3 text-lg border-b">
          <Tabs>
            <TabList className="flex justify-around border-b p-4">
              {navigation.categories.map((category) => (
                <>
                  <Tab
                    key={category.id}
                    className="hover:text-blue-600 hover:underline hover:underline-offset-8"
                  >
                    <div className="">{category.name}</div>
                  </Tab>
                </>
              ))}
            </TabList>
            {navigation.categories.map((category) => (
              <TabPanel key={category.name} className="py-5">
                <div className="flex gap-3">
                  {category.featured.map((item) => (
                    <div className="py-4">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="border rounded-xl"
                      />
                      <div className="pt-7">
                        <a href="" className="text-lg font-medium">
                          {item.name}
                        </a>
                        <p className="text-lg font-normal">Shop</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {category.sections.map((item) => (
                    <>
                      <h1 className="font-semibold text-lg my-4">
                        {item.name}
                      </h1>
                      <div className="flex flex-col gap-5">
                        {item.items.map((product) => (
                          <ul>
                            <li>
                              <Link to="" className="text-gray-500">
                                {product.name}
                              </Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col items-start gap-4 border-b text-lg py-4">
            <button className="">
              <Link>Company</Link>
            </button>
            <button>
              <Link>Stores</Link>
            </button>
          </div>

          <div className="flex flex-col items-start gap-4 border-b text-lg py-4 mb-6">
            <button>
              <Link>Sign in</Link>
            </button>
            <button>
              <Link>Create account</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
