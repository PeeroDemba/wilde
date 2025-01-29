import { MdCancel, MdOutlineKeyboardArrowDown } from "react-icons/md";

function Search({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section
      id="reviewslistsection"
      className="bg-[#273f2bb3]/80 z-[9999] fixed overflow-y-scroll top-0 left-0 flex justify-center items-center w-screen min-h-screen"
    >
      <div
        className="flex justify-center items-center relative overflow-y-scroll top-0 left-0 w-full h-[100vh]"
        id="reviewslist"
      >
        <div className="bg-[#ebe0ce] w-screen rounded-md absolute flex flex-col justify-between h-screen top-0 px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-end items-center">
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
              <div className="border-b border-black/20 py-4 flex justify-between gap-4 items-center">
                <p>CITY</p>
                <div className="flex items-center gap-2">
                  <p>London</p>
                  <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                </div>
              </div>
              <div className="border-b border-black/20 py-4 flex justify-between gap-4 items-center">
                <p>APARTHOTEL</p>
                <div className="flex items-center gap-2">
                  <p>All Aparthotels</p>
                  <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                </div>
              </div>
              <div className="border-b border-black/20 py-4 flex justify-between gap-4 items-center">
                <p>DATE</p>
                <div className="flex items-center gap-2">
                  <p>Check in - Check out</p>
                  <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                </div>
              </div>
              <div className="border-b border-black/20 py-4 flex justify-between gap-4 items-center">
                <p>GUESTS</p>
                <div className="flex items-center gap-2">
                  <p>1 guest, 1 apartment</p>
                  <MdOutlineKeyboardArrowDown className="" size="1.5rem" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4 mt-4 items-center">
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
