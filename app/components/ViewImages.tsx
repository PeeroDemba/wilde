import { IoMdPlay } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { data } from "../data.ts";

function ViewImages({
  setViewPhotos,
  index,
}: {
  setViewPhotos: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}) {
  return (
    <section className="bg-[#ebe0ce] fixed z-[9999] top-0 left-0 w-full h-full py-28 md:px-12 overflow-y-scroll">
      <div className="flex justify-center md:justify-end ">
        <MdCancel
          tabIndex={0}
          color="#ebe0ce"
          size="2.5rem"
          className="cursor-pointer fixed right-4 top-12 md:right-16 z-30 md:top-16 bg-black rounded-full focus-visible:border focus-visible:rounded-md focus-visible:border-black "
          onClick={() => {
            setViewPhotos(false);
          }}
        />
      </div>
      <div className="md:p-16 md:px-24 mb-[24px]">
        <div className="flex flex-col gap-2 h-full">
          <div tabIndex={0} className="cursor-pointer group relative">
            <img src={data[index].images[0]} alt="Room 1" className="w-full" />
            <div className="p-8 flex z-20 top-[calc((100%-128px)/2)] left-[calc((100vw-128px)/2)] absolute md:top-[calc((100%-96px)/2)] md:left-[calc((100vw-26rem)/2)] justify-center items-center group-hover:bg-black/80 rounded-full bg-black/40">
              <IoMdPlay size="4rem" className="pl-1 text-[#eee]" />
            </div>
          </div>
          <div className="md:flex grid grid-cols-2 items-center gap-2 md:h-[200px] lg:h-[300px]">
            <img
              tabIndex={0}
              src={data[index].images[1]}
              alt="Room 2"
              className="h-full w-full object-cover hover:brightness-75 cursor-pointer"
            />
            <img
              tabIndex={0}
              src={data[index].images[2]}
              alt="Room 3"
              className="h-full w-full object-cover hover:brightness-75 cursor-pointer"
            />
          </div>
          <div className="cursor-pointer">
            <img
              tabIndex={0}
              src={data[index].images[0]}
              alt="Room 1"
              className="hover:brightness-75 cursor-pointer w-full"
            />
          </div>
          <div className="md:flex grid grid-cols-2 items-center gap-2 md:h-[200px] lg:h-[300px]">
            <img
              tabIndex={0}
              src={data[index].images[1]}
              alt="Room 2"
              className="h-full w-full object-cover hover:brightness-75 cursor-pointer"
            />
            <img
              tabIndex={0}
              src={data[index].images[2]}
              alt="Room 3"
              className="h-full w-full object-cover hover:brightness-75 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewImages;
