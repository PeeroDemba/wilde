import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdCancel,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

function SideBar({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("EUR ($)");

  return toggle === true ? (
    <nav className="w-screen min-h-screen flex lg:grid lg:grid-cols-4 xl:grid-cols-3 absolute z-[9999] top-0 left-0">
      <div className="hidden w-0 lg:w-full lg:block lg:col-span-1 bg-[#273f2bb3]"></div>
      <div className="xl:col-span-2 lg:col-span-3 bg-[#ebe0ce] px-4 md:px-16 lg:py-8 flex flex-col gap-12 items-center w-full">
        <div className="flex justify-between gap-2 md:gap-0 items-center py-6 border-b border-gray-500 w-[90%] fixed lg:relative lg:w-full lg:left-0 top-0 left-[5%] bg-[#ebe0ce]">
          <div className="flex gap-2 md:gap-6 lg:w-1/2 justify-between lg:justify-start items-center">
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setSelect1((v) => !v);
                setSelect2(false);
              }}
            >
              <div
                id=""
                tabIndex={0}
                className="px-3 hover:bg-black/10 text-[18px] border border-black border-solid focus-visible:outline-[#b2e6bb] focus-visible:outline focus-visible:outline-2 outline-offset-2 pr-6 cursor-pointer py-2 rounded-[5rem] z-20 bg-transparent appearance-none"
              >
                <p className="pr-4">{currency}</p>
              </div>
              {select1 && (
                <ul className="bg-white rounded-md mt-2 text-[20px] absolute w-[130px]">
                  <li
                    onClick={() => {
                      setCurrency("EUR ($)");
                      setToggle(false);
                    }}
                    className="border-b border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-tl-md rounded-tr-md"
                  >
                    EUR ($)
                  </li>
                  <li
                    onClick={() => {
                      setCurrency("GBP ($)");
                      setToggle(false);
                    }}
                    className="px-3 py-3 hover:bg-[#f3ece2]"
                  >
                    GBP ($)
                  </li>
                  <li
                    onClick={() => {
                      setCurrency("USD ($)");
                      setToggle(false);
                    }}
                    className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                  >
                    USD ($)
                  </li>
                </ul>
              )}
              {select1 ? (
                <MdOutlineKeyboardArrowUp
                  className="absolute top-3 right-2 z-10"
                  size="1.5rem"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="absolute top-3 right-2 z-10"
                  size="1.5rem"
                />
              )}
            </div>
            <div
              className="relative cursor-pointer hidden lg:block"
              onClick={() => {
                setSelect2((v) => !v);
                setSelect1(false);
              }}
            >
              <div
                id=""
                tabIndex={0}
                className="px-3 hover:bg-black/10 text-[18px] border border-black border-solid focus-visible:outline-[#b2e6bb] focus-visible:outline focus-visible:outline-2 outline-offset-2 pr-6 cursor-pointer py-2 rounded-[5rem] z-20 bg-transparent appearance-none"
              >
                <p className="pr-4">{language}</p>
              </div>
              {select2 && (
                <ul className="bg-white rounded-md mt-2 text-[20px] absolute w-[125px]">
                  <li
                    onClick={() => {
                      setLanguage("English");
                      setToggle(false);
                    }}
                    className="border-b border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-tl-md rounded-tr-md"
                  >
                    English
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("Francais");
                      setToggle(false);
                    }}
                    className="px-3 py-3 hover:bg-[#f3ece2]"
                  >
                    Francais
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("Deutsch");
                      setToggle(false);
                    }}
                    className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                  >
                    Deutsch
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("Italiano");
                      setToggle(false);
                    }}
                    className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                  >
                    Italiano
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("Espanol");
                      setToggle(false);
                    }}
                    className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                  >
                    Espanol
                  </li>
                </ul>
              )}
              {select2 ? (
                <MdOutlineKeyboardArrowUp
                  className="absolute top-3 right-2 z-10"
                  size="1.5rem"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="absolute top-3 right-2 z-10"
                  size="1.5rem"
                />
              )}
            </div>
          </div>
          <div
            className="relative cursor-pointer lg:hidden block"
            onClick={() => {
              setSelect2((v) => !v);
              setSelect1(false);
            }}
          >
            <div
              id=""
              tabIndex={0}
              className="px-3 hover:bg-black/10 text-[18px] border border-black border-solid focus-visible:outline-[#b2e6bb] focus-visible:outline focus-visible:outline-2 outline-offset-2 pr-6 cursor-pointer py-2 rounded-[5rem] z-20 bg-transparent appearance-none"
            >
              <p className="pr-4">{language}</p>
            </div>
            {select2 && (
              <ul className="bg-white rounded-md mt-2 text-[20px] absolute w-[125px]">
                <li
                  onClick={() => {
                    setLanguage("English");
                    setToggle(false);
                  }}
                  className="border-b border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-tl-md rounded-tr-md"
                >
                  English
                </li>
                <li
                  onClick={() => {
                    setLanguage("Francais");
                    setToggle(false);
                  }}
                  className="px-3 py-3 hover:bg-[#f3ece2]"
                >
                  Francais
                </li>
                <li
                  onClick={() => {
                    setLanguage("Deutsch");
                    setToggle(false);
                  }}
                  className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                >
                  Deutsch
                </li>
                <li
                  onClick={() => {
                    setLanguage("Italiano");
                    setToggle(false);
                  }}
                  className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                >
                  Italiano
                </li>
                <li
                  onClick={() => {
                    setLanguage("Espanol");
                    setToggle(false);
                  }}
                  className="border-t border-gray-400 px-3 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                >
                  Espanol
                </li>
              </ul>
            )}
            {select2 ? (
              <MdOutlineKeyboardArrowUp
                className="absolute top-3 right-2 z-10"
                size="1.5rem"
              />
            ) : (
              <MdOutlineKeyboardArrowDown
                className="absolute top-3 right-2 z-10"
                size="1.5rem"
              />
            )}
          </div>
          <div className="flex gap-6 items-center">
            <button className="rounded-[5rem] hidden lg:block px-4 py-1 bg-black text-[#ebe0ce] text-[18px]">
              Log in
            </button>
            <MdCancel
              tabIndex={0}
              color="black"
              size="2rem"
              className="cursor-pointer focus-visible:border focus-visible:rounded-md focus-visible:border-black "
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>
        </div>
        <div className="lg:grid flex flex-col lg:grid-cols-2 lg:gap-4 w-full pt-[8rem] md:pt-[10rem] lg:pt-0">
          <div className="flex flex-col gap-6 lg:pb-0 pb-[3rem]">
            <p className="text-[1.25rem] italic">Wilde destinations</p>
            <div>
              <div
                tabIndex={0}
                className="flex items-center gap-4 hover:text-[#3e6545] cursor-pointer"
              >
                <IoLocationOutline size="1.5rem" />
                <p className="text-[2.5rem]">Berlin</p>
              </div>
              <div
                tabIndex={0}
                className="flex items-center gap-4 hover:text-[#3e6545] cursor-pointer"
              >
                <IoLocationOutline size="1.5rem" />
                <p className="text-[2.5rem]">Edinburgh</p>
              </div>
              <div
                tabIndex={0}
                className="flex items-center gap-4 hover:text-[#3e6545] cursor-pointer"
              >
                <IoLocationOutline size="1.5rem" />
                <p className="text-[2.5rem]">London</p>
              </div>
              <div
                tabIndex={0}
                className="flex items-center gap-4 hover:text-[#3e6545] cursor-pointer focus-visible:border focus-visible:rounded-md focus-visible:border-black                             "
              >
                <IoLocationOutline size="1.5rem" />
                <p className="text-[2.5rem]">Manchester</p>
              </div>
            </div>
            <p className="text-[1.25rem] italic">
              Can&apos;t find your location?
            </p>
            <p className="md:text-[1.25rem]">
              Explore the locations of our sister brand, Staycity Aparthotels.{" "}
              <span
                tabIndex={0}
                className="underline hover:text-[#3e6545] focus-visible:p-1 focus-visible:border focus-visible:rounded-md focus-visible:border-black"
              >
                Staycity
              </span>
            </p>
          </div>
          <div className="text-[1.25rem] flex flex-col lg:border-l lg:border-black/30 lg:pl-[2rem]">
            <div className="border-b border-t border-black/30 py-8 flex-col flex gap-2 lg:order-2">
              <p className="italic mb-2">About Wilde Aparthotels</p>
              <p
                tabIndex={0}
                className="focus-visible:border focus-visible:p-1  hover:text-[#3e6545] cursor-pointer hover:underline-offset-4  hover:underline hover:underline-[#3e6545] focus-visible:rounded-md focus-visible:border-black"
              >
                Contact us
              </p>
              <p
                tabIndex={0}
                className="focus-visible:border focus-visible:p-1 focus-visible:rounded-md  hover:text-[#3e6545] cursor-pointer hover:underline-offset-4  hover:underline hover:underline-[#3e6545] focus-visible:border-black"
              >
                Careers
              </p>
              <p
                tabIndex={0}
                className="focus-visible:border focus-visible:p-1 focus-visible:rounded-md focus-visible:border-black  hover:text-[#3e6545] cursor-pointer hover:underline-offset-4  hover:underline hover:underline-[#3e6545]"
              >
                Terms & Conditions
              </p>
            </div>
            <div className="pb-8 flex-col pt-8 lg:pt-0 flex gap-2 border-b border-black/30 lg:border-none lg:order-1">
              <p
                tabIndex={0}
                className="focus-visible:border focus-visible:p-1 hover:text-[#3e6545] cursor-pointer hover:underline-offset-4  hover:underline hover:underline-[#3e6545] focus-visible:rounded-md focus-visible:border-black"
              >
                Manage my booking
              </p>
              <p
                tabIndex={0}
                className="focus-visible:border focus-visible:p-1  hover:text-[#3e6545] cursor-pointer hover:underline-offset-4  hover:underline hover:underline-[#3e6545] focus-visible:rounded-md focus-visible:border-black"
              >
                Online check-in
              </p>
            </div>
            <div className="flex-col flex gap-2 text-[1rem] pt-8 lg:pb-0 pb-16 lg:order-3">
              <p
                tabIndex={0}
                className="underline focus-visible:p-1 hover:text-[#3e6545] cursor-pointer hover:underline-[#3e6545] underline-offset-4"
              >
                FAQ
              </p>
              <p
                tabIndex={0}
                className="underline focus-visible:p-1 hover:text-[#3e6545] cursor-pointer hover:underline-[#3e6545] underline-offset-4"
              >
                Blog
              </p>
              <p
                tabIndex={0}
                className="underline focus-visible:p-1 hover:text-[#3e6545] cursor-pointer hover:underline-[#3e6545] underline-offset-4"
              >
                Sign up and save
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="py-3 border md:hidden border-black w-full -mt-[3rem] mb-[3rem]"
        >
          LOG IN
        </button>
      </div>
    </nav>
  ) : undefined;
}

export default SideBar;
