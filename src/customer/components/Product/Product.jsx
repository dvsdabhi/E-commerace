import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProdactCard from "./ProdactCard";
// import { mens_kurta } from "../../../Data/mens_kurta";
import { getAllProduct, getFilterProduct } from "../../utils/queries.js";
import { filters, singleFilter } from "./FilterData";
import { IoFilterSharp } from "react-icons/io5";
// import { URLSearchParams } from "url";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Circles, MutatingDots, TailSpin } from "react-loader-spinner";
import { RingLoader } from "react-spinners";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [allProductData, setAllProductData] = useState([]);
  // const [searchParamms,setSearchParamms] = useState("");
  const [ProductLoading, setProductLoading] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const params = useParams()
  console.log(params.lavelOne, params.lavelThree, "000");
  const [lavelOneValue, setlavelOneValue] = useState("");
  const [lavelThree, setlavelThree] = useState("");


  // useEffect(()=>{
  //   setSearchParamms(new URLSearchParams(location.search));
  // },[]);

  const handleFilter = (value, sectionID) => {
    // console.log("value----->>>>>>>",value);
    // console.log("sectionID----->>>>>>>",sectionID);
    const searchParamms = new URLSearchParams(location.search);
    console.log("searchParamms--->>>", searchParamms.get("color"));
    let filterValue = searchParamms.getAll(sectionID);
    // console.log("filterValue", filterValue);
    // console.log("split values++++",filterValue.split(","))
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      // console.log("value delete---->>>>>",filterValue);
      if (filterValue.length === 0) {
        // console.log("heloooooooooooooo",location.search);
        searchParamms.delete(sectionID);
        // console.log("heloooooooooooooo",location.search);
      }
    } else {
      filterValue.push(value);
    }
    // console.log("filterValue---------", filterValue);

    if (filterValue.length > 0) {
      searchParamms.set(sectionID, filterValue.join(","));
    }
    const query = searchParamms.toString();
    navigate({ search: `?${query}` });
  };

  const handleRadioFilterChange = async (e, sectionID) => {
    if (sectionID === "price") {
      const searchParamms = new URLSearchParams(location.search);
      searchParamms.set(sectionID, e.target.value);
      const query = searchParamms.toString();
      // console.log("query-------price---->>>", query);
      const price = query.split("&");
      // console.log("price-------price---->>>", price);
      let price_range;
      for (let item of price) {
        if (item.includes("price=")) {
          price_range = item.split("=")[1];
        }
      }

      // console.log("price_range", price_range);
      try {
        setProductLoading(true);
        const response = await axios.get(
          `https://node-mongodb-api-4zq2.onrender.com/api/search/price/${params.lavelOne}/${params.lavelThree}/${price_range}`
        );
        setAllProductData(response.data.filterPriceRange);
        setProductLoading(false);
      } catch (error) {
        toast.error("not found discount");
      }
      navigate({ search: `${query}` });
    }

    if (sectionID === "discount") {
      const searchParamms = new URLSearchParams(location.search);
      searchParamms.set(sectionID, e.target.value);
      const query = searchParamms.toString();
      console.log("query-------discount---->>>", query);
      const discount = query.split("&");
      console.log("discount-------discount---->>>", discount);
      let dis_value;
      for (let item of discount) {
        if (item.includes("discount=")) {
          dis_value = item.split("=")[1];
        }
      }
      console.log("dis_value", dis_value);

      try {
        setProductLoading(true);
        const response = await axios.get(
          `https://node-mongodb-api-4zq2.onrender.com/api/search/percentage/${params.lavelOne}/${params.lavelThree}/${dis_value}`
        );
        setAllProductData(response.data.filterPercentage);
        setProductLoading(false);
      } catch (error) {
        toast.error("not found discount");
      }
      navigate({ search: `${query}` });
    }
  };

  const get_All_Product = async () => {
    try {
      setProductLoading(true);
      const res = await getAllProduct();
      // console.log("response-------->>>>>>>>>>", res.data.product);
      setAllProductData(res.data.product);
      setProductLoading(false);
    } catch (error) {
      toast.error("no product found");
    }
  };

  const categoryWiseProduct = async () => {
    try {
      setProductLoading(true);
      const res = await getFilterProduct(params.lavelOne, params.lavelThree);
      setAllProductData(res.data.product);
      setProductLoading(false);
      // console.log("response------", res);
    } catch (error) {
      toast("no product found")
    }
  }

  useEffect(() => {
    // get_All_Product();
    // if(params)
    categoryWiseProduct();
  }, [params.lavelOne, params.lavelThree]);

  const handleSort = (sortType) => {
    if (sortType === "lowToHigh") {
      const sortArray = [...allProductData].sort(
        (item1, item2) => item1.discountedPrice - item2.discountedPrice
      );
      setAllProductData(sortArray);
    }
    if (sortType === "highToLow") {
      const sortArray = [...allProductData].sort(
        (item1, item2) => item2.discountedPrice - item1.discountedPrice
      );
      setAllProductData(sortArray);
    }
  };

  const sortOptions = [
    {
      name: "Price: Low to High",
      current: false,
      clickHandler: () => handleSort("lowToHigh"),
    },
    {
      name: "Price: High to Low",
      current: false,
      clickHandler: () => handleSort("highToLow"),
    },
  ];

  console.log("allProductData=--=-=-=-=-=-=-=-", allProductData);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 cursor-pointer">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <>
                              {/* <p>{option.sort}</p> */}
                              <a href="#"
                                onClick={option.clickHandler}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            </>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <div>
                <div className="flex justify-between items-center py-10">
                  <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                  <span>
                    <IoFilterSharp className="text-2xl" />
                  </span>
                </div>
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.lable}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  {singleFilter.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    onChange={(e) => {
                                      handleRadioFilterChange(e, section.id);
                                    }}
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.lable}
                                  </label>
                                </div>
                              ))}
                              <div className="flex space-x-5">
                                <input type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onClick={categoryWiseProduct} />
                                <label htmlFor="">All</label>
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>

              {ProductLoading ? (
                <div className="lg:col-span-4 w-full  flex items-center justify-center">
                  <RingLoader
                    height="80"
                    width="80"
                    color="#808080"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                <>
                  {/* Product grid */}
                  <div className="lg:col-span-4 w-full">
                    <div className="flex flex-wrap justify-center bg-white py-5">
                      {allProductData.map((item, index) => (
                        <ProdactCard key={index} product={item} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
