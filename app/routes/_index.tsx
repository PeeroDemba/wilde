import {
  RiArrowRightSLine,
  RiMastercardLine,
  RiMenuFill,
  RiVisaLine,
} from "react-icons/ri";
import type { Route } from "./+types/_index";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SideBar from "~/components/SideBar";
import { FaFacebookF, FaInstagram, FaMap, FaTiktok } from "react-icons/fa";
import Reviews from "~/components/Reviews";
import Map from "~/components/Map";
import Explore from "~/components/Explore";
import Membership from "~/components/Membership";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineLocationOn,
} from "react-icons/md";
import { GrAmex, GrSubtractCircle } from "react-icons/gr";
import Search from "~/components/Search";
import { useInView } from "react-intersection-observer";
import { FiPlusCircle } from "react-icons/fi";
import { data } from "../data.ts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wilde" },
    { name: "description", content: "Welcome to Wilde!" },
  ];
}

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [viewPhotos, setViewPhotos] = useState(false);
  const [search, setSearch] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [city, setCity] = useState(false);
  const [aparthotel, setAparthotel] = useState(false);
  const [date, setDate] = useState(false);
  const [guests, setGuests] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("EUR ($)");
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0,
    initialInView: false,
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const open = city || aparthotel || date || guests;

  return (
    <div
      className={openReviews || viewPhotos ? "overflow-y-hidden h-screen" : ""}
    >
      <div className="group">
        <img
          src="/images/wilde-chat-icon_60px-1.png"
          alt="Chat Box"
          className="fixed top-[calc((110vh-60px)/2)] right-0 z-20 lg:w-[60px] lg:h-[60px] h-[40px] w-[40px]"
        />
        <div className="fixed top-[calc((110vh-60px)/2)] group-hover:cursor-pointer right-0 h-[60px] z-30 rounded-tl-2xl rounded-bl-2xl w-[60px] group-hover:bg-black/25"></div>
      </div>
      <header ref={ref} className="bg-[#ebe0ce] relative">
        <nav
          className={`w-[calc(100vw-2rem)] ${
            inView || inView2 ? "flex" : "hidden"
          } md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] py-4 lg:py-6 fixed top-0 left-4 md:left-8 lg:left-16 justify-between z-[9998] items-center text-[20px] border-b border-black/30`}
        >
          <p className="text-[#ebe0ce] text-[15px] md:text-[1rem] lg:text-black">
            Wilde Aparthotels
          </p>
          <div className="flex gap-4 md:gap-6 items-center">
            <button className="rounded-[5rem] px-3 md:px-4 py-1 text-black bg-[#f3ece2] text-[14px] md:text-[18px] hover:bg-[#ebe0ce]">
              Log in
            </button>
            <RiMenuFill
              color="white"
              size="1.5rem"
              className="cursor-pointer"
              onClick={() => {
                setToggle(true);
              }}
            />
          </div>
        </nav>

        <div className="lg:grid lg:grid-cols-2 flex h-[65vh] lg:h-screen relative">
          <div className="lg:px-16 w-full md:px-0 bg-[url('/images/231012_wilde_staycity_outside_shots-with-couple_0179-1_final_web.webp')] lg:bg-none bg-no-repeat bg-center bg-cover">
            <div className="border-b lg:px-0 w-full px-4 md:px-6  border-[#bbb] h-full lg:backdrop-brightness-100 backdrop-brightness-[.6]">
              <p className="lg:text-[80px] xl:text-[90px] text-[#ebe0ce] lg:text-black text-[52.5px] leading-[57.5px] md:text-[60px] pt-20 md:pt-32 lg:leading-[90px] xl:leading-[100px] h-full">
                Life begins in{" "}
                <span className="bg-[url('/images/wilde-underline.svg')] bg-no-repeat bg-bottom">
                  London
                </span>
              </p>
            </div>
          </div>
          <div
            onClickCapture={() => {
              setSearch(true);
            }}
            className="bg-[#f3ece2] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white rounded-md p-4 w-[90%] items-center lg:hidden h-[8rem] md:h-[6rem] absolute bottom-[5vh] left-[5%] flex justify-between"
          >
            <div>
              <p className="md:text-[1.4rem] font-semibold">
                Start Your Search
              </p>
              <p>Add dates, guests, apartments</p>
            </div>
            <div>
              <button
                type="button"
                className="text-[#f3ece2] bg-black py-1 px-4 rounded-[5rem]"
              >
                SEARCH
              </button>
            </div>
          </div>
          {search && <Search setSearch={setSearch} />}
          <div className="bg-cover hidden lg:block bg-[url('/images/231012_wilde_staycity_outside_shots-with-couple_0179-1_final_web.webp')] bg-no-repeat bg-center">
            <div className="h-full w-full bg-black/30"></div>
          </div>
        </div>
        <div className="absolute top-[65vh] left-[calc((100vw-915px)/2)]">
          <div className="bg-[#f3ece2] hidden w-[915px] h-[4.5rem] lg:grid grid-cols-5 mb-[0.05rem]">
            <button
              onClick={() => {
                setCity((v) => !v);
                setGuests(false);
                setAparthotel(false);
                setDate(false);
              }}
              type="button"
              className={`px-2 py-3 ${
                !open && "hover:bg-[#d8cbb6]"
              } cursor-pointer border-r border-black/30 ${
                !city && open && "bg-[#d8cbb6]"
              } focus-visible:border-2 focus-visible:border-black/30`}
            >
              <p className="text-[#777]">CITY</p>
              <p>London</p>
            </button>
            <button
              onClick={() => {
                setAparthotel((v) => !v);
                setGuests(false);
                setCity(false);
                setDate(false);
              }}
              type="button"
              className={`px-2 py-3 ${
                !open && "hover:bg-[#d8cbb6]"
              } cursor-pointer border-r border-black/30 ${
                !aparthotel && open && "bg-[#d8cbb6]"
              } focus-visible:border-2 focus-visible:border-black/30`}
            >
              <p className="text-[#777]">APARTHOTEL</p>
              <p>Checkpoint Charlie</p>
            </button>
            <button
              onClick={() => {
                setDate((v) => !v);
                setGuests(false);
                setAparthotel(false);
                setCity(false);
              }}
              type="button"
              className={`px-2 py-3 ${
                !open && "hover:bg-[#d8cbb6]"
              } cursor-pointer border-r border-black/30 ${
                !date && open && "bg-[#d8cbb6]"
              } focus-visible:border-2 focus-visible:border-black/30`}
            >
              <p className="text-[#777]">DATE</p>
              <p>Check in - Check out</p>
            </button>
            <button
              onClick={() => {
                setGuests((v) => !v);
                setCity(false);
                setAparthotel(false);
                setDate(false);
              }}
              type="button"
              className={`px-2 py-3 ${
                !open && "hover:bg-[#d8cbb6]"
              } cursor-pointer border-r border-black/30 ${
                !guests && open && "bg-[#d8cbb6]"
              } focus-visible:border-2 focus-visible:border-black/30`}
            >
              <p className="text-[#777]">GUESTS</p>
              <p>1 guest, 1 apartment</p>
            </button>
            <button
              type="button"
              className="px-2 bg-black flex justify-center items-center text-[20px] py-3 cursor-pointer focus-visible:border-2 focus-visible:border-white"
            >
              <p className="text-white">SEARCH</p>
            </button>
          </div>
          {city && (
            <div className="bg-[#f3ece2] p-6 hidden lg:flex flex-col gap-4 w-max">
              <p className="text-[28px]">Where to?</p>
              <p className="italic">Locations that feed the soul</p>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                  <MdOutlineLocationOn
                    size="1.5rem"
                    className="text-[#273f2b]"
                  />
                  <p className="text-[36px]">Berlin</p>
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                  <MdOutlineLocationOn
                    size="1.5rem"
                    className="text-[#273f2b]"
                  />
                  <p className="text-[36px]">London</p>
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                  <MdOutlineLocationOn
                    size="1.5rem"
                    className="text-[#273f2b]"
                  />
                  <p className="text-[36px]">Edinburgh</p>
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                  <MdOutlineLocationOn
                    size="1.5rem"
                    className="text-[#273f2b]"
                  />
                  <p className="text-[36px]">Manchester</p>
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                </div>
              </div>
            </div>
          )}
          {aparthotel && (
            <div className="bg-[#f3ece2] p-6 hidden lg:flex flex-col gap-4 w-max relative left-[11.25rem]">
              <p className="text-[28px]">Where in London?</p>
              <button
                type="button"
                className="rounded-[4px] hover:bg-[#273f2b]/70 py-[14px] px-24 bg-[#273f2b] text-[#f3ece2]"
              >
                ALL APARTHOTELS
              </button>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                  <p className="text-[18px]">Liverpool Street</p>
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                  <p className="text-[18px]">Paddington</p>
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                  <p className="text-[18px]">Aldgate Tower Bridge</p>
                </div>
                <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer py-2">
                  <RiArrowRightSLine size="2rem" className="text-[#b9cdbb]" />
                  <p className="text-[18px]">Covent Garden</p>
                </div>
              </div>
            </div>
          )}
          {date && (
            <div className="bg-[#f3ece2] p-6 hidden lg:flex flex-col gap-6 w-max relative">
              <p className="text-[28px]">Choose your dates</p>
              <div className="flex">
                <div className="flex flex-col gap-y-8 gap-x-6 pl-8 pr-10 border-r border-black/20 pb-20">
                  <p className="font-semibold text-center text-[14px]">
                    February 2025
                  </p>
                  <div className="grid grid-cols-7 gap-6 text-[12px] text-[#2e2739]">
                    <p>Mo</p>
                    <p>Tu</p>
                    <p>We</p>
                    <p>Th</p>
                    <p>Fr</p>
                    <p>Sa</p>
                    <p>Su</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-8 gap-x-6 pl-[2.75rem] pr-8 pb-10">
                  <p className="font-semibold text-center text-[14px]">
                    March 2025
                  </p>
                  <div className="grid grid-cols-7 gap-6 text-[12px] text-[#2e2739]">
                    <p>Mo</p>
                    <p>Tu</p>
                    <p>We</p>
                    <p>Th</p>
                    <p>Fr</p>
                    <p>Sa</p>
                    <p>Su</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {guests && (
            <div className="bg-[#f3ece2] p-6 lg:flex flex-col gap-6 w-max relative hidden">
              <div className="flex">
                <div className="flex flex-col pr-5 gap-4 border-r border-black/20">
                  <p className="text-[28px]">Apartments</p>
                  <div className="flex justify-between gap-[8.5rem] items-center">
                    <p className="text-[24px]">Total</p>
                    <div className="bg-[#0000000a] rounded-[5rem] flex items-center justify-between">
                      <GrSubtractCircle
                        size="2.5rem"
                        className="bg-transparent"
                      />
                      <p className="text-[14px] px-5">1</p>
                      <FiPlusCircle
                        size="2.5rem"
                        className="bg-[#f3ece2] rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-5 gap-4">
                  <p className="text-[28px]">Guests</p>
                  <div className="flex justify-between items-center gap-5 border-b border-black/30 py-2">
                    <div>
                      <p className="text-[24px]">Adults</p>
                      <p className="text-[20px]">Ages 18 and above</p>
                    </div>
                    <div className="bg-[#0000000a] rounded-[5rem] flex items-center justify-between">
                      <GrSubtractCircle
                        size="2.5rem"
                        className="bg-transparent"
                      />
                      <p className="text-[14px] px-5">1</p>
                      <FiPlusCircle
                        size="2.5rem"
                        className="bg-[#f3ece2] rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-5 border-b border-black/30 py-2">
                    <div>
                      <p className="text-[24px]">Teens</p>
                      <p className="text-[20px]">Ages 13 and 17</p>
                    </div>
                    <div className="bg-[#0000000a] rounded-[5rem] flex items-center justify-between">
                      <GrSubtractCircle
                        size="2.5rem"
                        className="bg-transparent"
                      />
                      <p className="text-[14px] px-5">1</p>
                      <FiPlusCircle
                        size="2.5rem"
                        className="bg-[#f3ece2] rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-5 border-b border-black/30 py-2">
                    <div>
                      <p className="text-[24px]">Children</p>
                      <p className="text-[20px]">Ages 3-12</p>
                    </div>
                    <div className="bg-[#0000000a] rounded-[5rem] flex items-center justify-between">
                      <GrSubtractCircle
                        size="2.5rem"
                        className="bg-transparent"
                      />
                      <p className="text-[14px] px-5">1</p>
                      <FiPlusCircle
                        size="2.5rem"
                        className="bg-[#f3ece2] rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-5 py-2">
                    <div>
                      <p className="text-[24px]">Infants</p>
                      <p className="text-[20px]">Ages 2 and below</p>
                    </div>
                    <div className="bg-[#0000000a] rounded-[5rem] flex items-center justify-between">
                      <GrSubtractCircle
                        size="2.5rem"
                        className="bg-transparent"
                      />
                      <p className="text-[14px] px-5">1</p>
                      <FiPlusCircle
                        size="2.5rem"
                        className="bg-[#f3ece2] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <SideBar toggle={toggle} setToggle={setToggle} />
      </header>
      {toggle && (
        <section className="bg-[#ebe0ce] xl:px-[12rem] px-[7rem] pt-8 h-[35vh]">
          <div className="border-b border-[#999] flex gap-40 md:pb-16">
            <div className="w-2/5">
              <p className="text-[28px] mb-4">4 Aparthotels in London</p>
              <a
                href="#"
                className="rounded-[5rem] hover:bg-[#d1c7b6] py-3 px-6 flex items-center gap-4 border border-[#999] w-max"
              >
                <span className="border-r border-[#999] pr-4">
                  <FaMap />
                </span>
                <span className="text-[18px]">Map</span>
              </a>
            </div>
            <div className="w-3/5">
              <p className="text-[22px]">
                Why London? World-class art, ravishing food and pubs older than
                certain countries. Any more questions?
              </p>
            </div>
          </div>
        </section>
      )}
      {!toggle && (
        <main>
          {isBigScreen ? (
            <section className="bg-[#ebe0ce] xl:px-[12rem] px-4 md:px-[6rem] lg:px-[7rem] min-h-[35vh] md:h-[35vh] pt-8">
              <div className="lg:border-b lg:border-black/30 flex gap-40 pb-16">
                <div className="lg:w-2/5 w-full">
                  <p className="text-[28px] mb-4">4 Aparthotels in London</p>
                  <p className="text-[20px] mb-12 lg:hidden">
                    Why London? World-class art, ravishing food and pubs older
                    than certain countries. Any more questions?
                  </p>
                  <a
                    href="#"
                    className="rounded-[5rem] hover:bg-[#d1c7b6] py-3 px-6 flex items-center gap-4 border border-[#999] w-max"
                  >
                    <span className="border-r border-[#999] pr-4">
                      <FaMap />
                    </span>
                    <span className="text-[18px]">Map</span>
                  </a>
                </div>
                <div className="w-3/5 hidden lg:block">
                  <p className="text-[22px]">
                    Why London? World-class art, ravishing food and pubs older
                    than certain countries. Any more questions?
                  </p>
                </div>
              </div>
            </section>
          ) : (
            <section
              ref={ref2}
              className="bg-[#ebe0ce] xl:px-[12rem] px-4 md:px-[6rem] lg:px-[7rem] min-h-[35vh] md:h-[35vh] pt-8"
            >
              <div className="lg:border-b lg:border-black/30 flex gap-40 pb-16">
                <div className="lg:w-2/5 w-full">
                  <p className="text-[28px] mb-4">4 Aparthotels in London</p>
                  <p className="text-[20px] mb-12 lg:hidden">
                    Why London? World-class art, ravishing food and pubs older
                    than certain countries. Any more questions?
                  </p>
                  <a
                    href="#"
                    className="rounded-[5rem] hover:bg-[#d1c7b6] py-3 px-6 flex items-center gap-4 border border-[#999] w-max"
                  >
                    <span className="border-r border-[#999] pr-4">
                      <FaMap />
                    </span>
                    <span className="text-[18px]">Map</span>
                  </a>
                </div>
                <div className="w-3/5 hidden lg:block">
                  <p className="text-[22px]">
                    Why London? World-class art, ravishing food and pubs older
                    than certain countries. Any more questions?
                  </p>
                </div>
              </div>
            </section>
          )}
          <section className="bg-[#ebe0ce] flex flex-col gap-8 lg:gap-0">
            {data.map((e, i) => (
              <Reviews
                key={i}
                data={e}
                index={i}
                openReviews={openReviews}
                setOpenReviews={setOpenReviews}
                viewPhotos={viewPhotos}
                setViewPhotos={setViewPhotos}
              />
            ))}
          </section>
          <section className="lg:pt-32 bg-[#ebe0ce]">
            <Map />
          </section>
          <section>
            <Explore />
          </section>
          <section>
            <Membership />
          </section>
          <section className="bg-[#f3ece2] py-[10rem] px-4 md:px-[2rem] lg:px-[5rem] xl:px-[8rem] grid grid-cols-2 md:flex md:justify-between gap-4 lg:gap-8 items-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/87756295-d694-4086-b693-f36422aa55d4.svg"
                alt="Amenity icons"
                className="w-[60px] h-[60px]"
              />
              <p className="italic text-[20px] lg:text-[28px]">How wonderful</p>
              <p className="lg:text-[1.20rem]">
                We delight our members with 10% off all stays
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/50c129ac-7a34-41d2-abed-851de0e208a3.svg"
                alt="Amenity icons"
                className="w-[60px] h-[60px]"
              />
              <p className="italic text-[20px] lg:text-[28px]">
                Forever flexible
              </p>
              <p className="lg:text-[1.20rem]">
                Enjoy flexible booking and free cancellation options
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/a81d65b9-094d-45d5-b330-a7105fb49db5.svg"
                alt="Amenity icons"
                className="w-[60px] h-[60px]"
              />
              <p className="italic text-[20px] lg:text-[28px]">
                At your service
              </p>
              <p className="lg:text-[1.20rem]">
                Our reception team are on hand to make your wish a reality
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="/images/1e7bcb6e-7b7c-4f99-82b8-e98a22d30ab6.svg"
                alt="Amenity icons"
                className="w-[60px] h-[60px]"
              />
              <p className="italic text-[20px] lg:text-[28px]">Stay longer</p>
              <p className="lg:text-[1.20rem]">
                Relish 20% off stays over 7 nights
              </p>
            </div>
          </section>
        </main>
      )}
      {!toggle && (
        <footer className="min-h-screen bg-[#273f2b] text-[#ebe0ce] py-16">
          <div className="flex lg:flex-row flex-col gap-12 px-4 md:px-8 lg:px-16 justify-between">
            <div className="flex lg:flex-row flex-col gap-16 lg:gap-8">
              <div>
                <p className="italic text-[20px] mb-6">Service</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    January Sale
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    FAQ
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Dog Friendly Stays
                  </a>
                </div>
              </div>
              <div>
                <p className="italic text-[20px] mb-6">Our Company</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Sustainability
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Press & Media
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Board of Directors
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Development
                  </a>
                </div>
              </div>
              <div>
                <p className="italic text-[20px] mb-6">Partner services</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Car hire
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Airport transfer
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Events & Activities
                  </a>
                  <a
                    href="#"
                    className="text-[20px] cursor-pointer hover:underline hover:underline-offset-4 focus-visible:border focus-visible:border-white"
                  >
                    Upgrade Your Stay
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="italic text-[20px] mb-6">Newsletter</p>
              <div className="flex justify-between items-center gap-4 border-b border-[#ebe0ce38] pb-4">
                <input
                  type="text"
                  className="w-[85%] h-10 pr-2 bg-transparent text-[20px] outline-none"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="lg:rounded-[5rem] rounded-2xl bg-[#ebe0ce] w-[5.5rem] text-[#273f2b] py-2 px-2"
                >
                  Sign up
                </button>
              </div>
              <p className="mt-4 mb-6 text-[18px]">
                Sign up for special offers and lashings of wanderlust
              </p>
              <div className="flex gap-6 items-center mt-6">
                <FaInstagram size="1.75rem" />
                <FaFacebookF size="1.75rem" />
                <FaXTwitter size="1.75rem" />
                <FaTiktok size="1.75rem" />
              </div>
            </div>
          </div>
          <div className="lg:pt-40 pt-20 pb-20 border-none lg:border-b lg:border-[#ebe0ce3d] lg:grid lg:grid-cols-2 flex flex-col lg:items-center">
            <div className="flex gap-2 md:gap-6 pb-12 lg:pb-0 items-center px-4 md:px-8 lg:px-16">
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setSelect2((v) => !v);
                  setSelect1(false);
                }}
              >
                <p className="italic text-[18px] mb-4">Languages</p>
                <div
                  id=""
                  tabIndex={0}
                  className="px-5 w-[8rem] md:w-[12rem] hover:bg-white/20 text-[18px] focus-visible:border-[#cbe9d0] focus-visible:outline-none focus-visible:border-[0.25rem] outline-offset-2 pr-6 cursor-pointer py-2 rounded-[5rem] border z-20 bg-transparent border-[#ebe0ce38] appearance-none"
                >
                  <p className="pr-4">{language}</p>
                </div>
                {select2 && (
                  <ul className="bg-[#ebe0ce] rounded-md mt-2 text-[16px] absolute top-[5.5rem] md:bottom-[3.25rem] left-0 w-[8rem] md:w-[12rem] text-black">
                    <li
                      onClick={() => {
                        setLanguage("English");
                      }}
                      className="border-b border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-tl-md rounded-tr-md"
                    >
                      English
                    </li>
                    <li
                      onClick={() => {
                        setLanguage("Francais");
                      }}
                      className="px-5 py-3 hover:bg-[#f3ece2]"
                    >
                      Francais
                    </li>
                    <li
                      onClick={() => {
                        setLanguage("Deutsch");
                      }}
                      className="border-t border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                    >
                      Deutsch
                    </li>
                    <li
                      onClick={() => {
                        setLanguage("Italiano");
                      }}
                      className="border-t border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                    >
                      Italiano
                    </li>
                    <li
                      onClick={() => {
                        setLanguage("Espanol");
                      }}
                      className="border-t border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                    >
                      Espanol
                    </li>
                  </ul>
                )}
                {select2 ? (
                  <MdOutlineKeyboardArrowUp
                    className="absolute bottom-3 right-2 z-10"
                    size="1.5rem"
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className="absolute bottom-3 right-2 z-10"
                    size="1.5rem"
                  />
                )}
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setSelect1((v) => !v);
                  setSelect2(false);
                }}
              >
                <p className="italic text-[18px] mb-4">Currency</p>
                <div
                  id=""
                  tabIndex={0}
                  className="px-5 w-[9rem] md:w-[12rem] hover:bg-white/20 text-[18px] focus-visible:border-[#cbe9d0] focus-visible:outline-none focus-visible:border-[0.25rem] outline-offset-2 pr-6 cursor-pointer py-2 rounded-[5rem] border z-20 bg-transparent border-[#ebe0ce38] appearance-none"
                >
                  <p className="pr-4">{currency}</p>
                </div>
                {select1 && (
                  <ul className="bg-[#ebe0ce] rounded-md mt-2 text-[16px] absolute top-[5.5rem] md:bottom-[3.25rem] left-0 w-[9rem] md:w-[12rem] text-black">
                    <li
                      onClick={() => {
                        setCurrency("EUR ($)");
                      }}
                      className="border-b border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-tl-md rounded-tr-md"
                    >
                      EUR ($)
                    </li>
                    <li
                      onClick={() => {
                        setCurrency("GBP ($)");
                      }}
                      className="px-5 py-3 hover:bg-[#f3ece2]"
                    >
                      GBP ($)
                    </li>
                    <li
                      onClick={() => {
                        setCurrency("USD ($)");
                      }}
                      className="border-t border-gray-400 px-5 py-3 hover:bg-[#f3ece2] rounded-bl-md rounded-br-md"
                    >
                      USD ($)
                    </li>
                  </ul>
                )}
                {select1 ? (
                  <MdOutlineKeyboardArrowUp
                    className="absolute bottom-3 right-2 z-10"
                    size="1.5rem"
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className="absolute bottom-3 right-2 z-10"
                    size="1.5rem"
                  />
                )}
              </div>
            </div>
            <p className="italic pt-8 pb-16 lg:pb-0 lg:pt-0  text-[20px] px-4 md:px-8 lg:px-0 lg:border-none border-b border-t border-[#ebe0ce38]">
              Part of the <span className="underline">Staycity Group</span>
            </p>
          </div>
          <div className="lg:px-16 px-4 md:px-8 pt-0 lg:pt-12 flex lg:flex-row flex-col gap-14 lg:items-center">
            <div className="flex gap-4 items-center">
              <div className="py-1 px-4 rounded-lg border border-[#ebe0ce38]">
                <RiVisaLine size="2.25rem" />
              </div>
              <div className="py-1 px-4 rounded-lg border border-[#ebe0ce38]">
                <RiMastercardLine size="2.25rem" />
              </div>
              <div className="py-1 px-4 rounded-lg border border-[#ebe0ce38]">
                <GrAmex size="2.25rem" />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 lg:items-center">
              <a
                href="#"
                className="text-[16px] cursor-pointer rounded-md underline underline-offset-4 focus-visible:outline focus-visible:outline-white focus-visible:outline-solid focus-visible:border focus-visible:border-black focus-visible:border-solid"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[16px] cursor-pointer rounded-md underline underline-offset-4 focus-visible:outline focus-visible:outline-white focus-visible:outline-solid focus-visible:border focus-visible:border-black focus-visible:border-solid"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                tabIndex={-1}
                className="text-[16px] cursor-pointer rounded-md underline underline-offset-4 focus-visible:outline focus-visible:outline-white focus-visible:outline-solid focus-visible:border focus-visible:border-black focus-visible:border-solid"
              >
                Cookies
              </a>
            </div>
            <div>
              <p>© 2025, Staycity Ltd</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
