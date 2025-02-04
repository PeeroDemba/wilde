import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GrSubtractCircle } from "react-icons/gr";
import {
  MdCancel,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineLocationOn,
} from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

function Search({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [city, setCity] = useState(false);
  const [aparthotel, setAparthotel] = useState(false);
  const [date, setDate] = useState(false);
  const [guests, setGuests] = useState(false);

  return (
    <section
      id="reviewslistsection"
      className="bg-[#273f2bb3]/80 z-[9999] fixed overflow-y-scroll top-0 left-0 flex justify-center items-center w-screen min-h-screen"
    >
      <div
        className="flex justify-center items-center relative overflow-y-scroll top-0 left-0 w-full h-[100vh]"
        id="reviewslist"
      >
        <div className="bg-[#ebe0ce] w-screen rounded-md absolute flex flex-col justify-between h-screen top-0 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-end items-center px-4">
              <MdCancel
                tabIndex={0}
                color="black"
                size="2rem"
                className="cursor-pointer focus-visible:border focus-visible:border-black focus-visible:rounded-none "
                onClick={() => {
                  setSearch(false);
                }}
              />
            </div>
            <div>
              <div
                onClick={() => {
                  setCity((v) => !v);
                  setGuests(false);
                  setAparthotel(false);
                  setDate(false);
                }}
                tabIndex={0}
                className="border-b px-4 border-black/20 py-4 flex justify-between gap-4 items-center"
              >
                <p>CITY</p>
                <div className="flex items-center gap-2">
                  <p>London</p>
                  {city ? (
                    <MdOutlineKeyboardArrowUp className="" size="1.5rem" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                  )}
                </div>
              </div>
              {city && (
                <div className="bg-[#f3ece2] px-6 py-10 flex flex-col gap-4 w-full">
                  <p className="text-[28px]">Where to?</p>
                  <p className="italic">Locations that feed the soul</p>
                  <div className="flex flex-col">
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                      <MdOutlineLocationOn
                        size="1.5rem"
                        className="text-[#273f2b]"
                      />
                      <p className="text-[36px]">Berlin</p>
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                      <MdOutlineLocationOn
                        size="1.5rem"
                        className="text-[#273f2b]"
                      />
                      <p className="text-[36px]">London</p>
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                      <MdOutlineLocationOn
                        size="1.5rem"
                        className="text-[#273f2b]"
                      />
                      <p className="text-[36px]">Edinburgh</p>
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer">
                      <MdOutlineLocationOn
                        size="1.5rem"
                        className="text-[#273f2b]"
                      />
                      <p className="text-[36px]">Manchester</p>
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div
                onClick={() => {
                  setAparthotel((v) => !v);
                  setGuests(false);
                  setCity(false);
                  setDate(false);
                }}
                tabIndex={0}
                className="border-b px-4 border-black/20 py-4 flex justify-between gap-4 items-center"
              >
                <p>APARTHOTEL</p>
                <div className="flex items-center gap-2">
                  <p>All Aparthotels</p>
                  {aparthotel ? (
                    <MdOutlineKeyboardArrowUp className="" size="1.5rem" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                  )}
                </div>
              </div>
              {aparthotel && (
                <div className="bg-[#f3ece2] px-6 py-10 flex flex-col gap-4 w-full">
                  <p className="text-[28px]">Where in London?</p>
                  <button
                    type="button"
                    className="rounded-[4px] py-[14px] px-24 text-black border border-black/25"
                  >
                    ALL APARTHOTELS
                  </button>
                  <div className="flex flex-col">
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                      <p className="text-[18px]">Liverpool Street</p>
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                      <p className="text-[18px]">Paddington</p>
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer border-b border-black/20 py-2">
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                      <p className="text-[18px]">Aldgate Tower Bridge</p>
                    </div>
                    <div className="flex gap-3 items-center hover:opacity-50 cursor-pointer py-2">
                      <RiArrowRightSLine
                        size="2rem"
                        className="text-[#b9cdbb]"
                      />
                      <p className="text-[18px]">Covent Garden</p>
                    </div>
                  </div>
                </div>
              )}
              <div
                onClick={() => {
                  setDate((v) => !v);
                  setGuests(false);
                  setAparthotel(false);
                  setCity(false);
                }}
                tabIndex={0}
                className="border-b px-4 border-black/20 py-4 flex justify-between gap-4 items-center"
              >
                <p>DATE</p>
                <div className="flex items-center gap-2">
                  <p>Check in - Check out</p>
                  {date ? (
                    <MdOutlineKeyboardArrowUp className="" size="1.5rem" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                  )}
                </div>
              </div>
              {date && (
                <div className="bg-[#f3ece2] px-6 py-10 flex flex-col gap-6 w-full relative">
                  <p className="text-[28px]">Choose your dates</p>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-y-8 gap-x-6 px-20 pb-10">
                      <p className="font-semibold text-center text-[14px]">
                        February 2025
                      </p>
                      <div className="grid grid-cols-7 gap-8 text-[12px] text-[#2e2739]">
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
                    <div className="flex flex-col gap-y-8 gap-x-6 px-20 pb-10">
                      <p className="font-semibold text-center text-[14px]">
                        March 2025
                      </p>
                      <div className="grid grid-cols-7 gap-8 text-[12px] text-[#2e2739]">
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
              <div
                onClick={() => {
                  setGuests((v) => !v);
                  setCity(false);
                  setAparthotel(false);
                  setDate(false);
                }}
                tabIndex={0}
                className="border-b px-4 border-black/20 py-4 flex justify-between gap-4 items-center"
              >
                <p>GUESTS</p>
                <div className="flex items-center gap-2">
                  <p>1 guest, 1 apartment</p>
                  {guests ? (
                    <MdOutlineKeyboardArrowUp className="" size="1.5rem" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                  )}
                </div>
              </div>
              {guests && (
                <div className="bg-[#f3ece2] px-6 py-10 flex flex-col gap-6 w-full relative">
                  <div className="flex flex-col-reverse gap-6">
                    <div className="flex justify-between gap-4 items-center">
                      <p className="text-[36px]">Apartments</p>
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
                    <div className="flex flex-col gap-4">
                      <p className="text-[36px]">Total number of guests</p>
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
                      <div className="flex justify-between items-center gap-5 py-2 border-b border-black/30">
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
          </div>
          <div className="flex w-full gap-4 mt-4 items-center px-4">
            <button
              type="button"
              className="w-1/2 text-[18px] hover:text-[#273f2b] border border-black/30 py-[12px] px-8"
            >
              CLEAR ALL
            </button>
            <button
              type="button"
              className="rounded-[4px] w-1/2 hover:bg-[#273f2b]/70 py-[14px] px-8 bg-[#273f2b] text-[#f3ece2]"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
