function Map() {
  return (
    <div className="bg-[#c4683cb3] h-[60vh] lg:h-[80vh] flex justify-center items-center cursor-pointer relative">
      <div className="bg-[#ccc] absolute top-0 left-0 w-full h-full z-10 hover:bg-transparent"></div>
      <div className="md:w-1/2 w-2/3 h-3/5 relative flex justify-center items-center">
        <img
          src="/images/tinywow_vector-3-_27466474.webp"
          alt="Arrows"
          className="md:h-40 md:w-40 h-20 w-20 absolute top-0 right-0"
        />
        <img
          src="/images/tinywow_vector-3-_27466474.webp"
          alt="Arrows"
          className="md:h-40 md:w-40 h-20 w-20 rotate-[90deg] absolute bottom-0 right-0"
        />
        <img
          src="/images/tinywow_vector-3-_27466474.webp"
          alt="Arrows"
          className="md:h-40 md:w-40 h-20 w-20 rotate-[180deg] absolute bottom-0 left-0"
        />
        <img
          src="/images/tinywow_vector-3-_27466474.webp"
          alt="Arrows"
          className="md:h-40 md:w-40 h-20 w-20 rotate-[270deg] absolute top-0 left-0"
        />
        <p className="text-white text-[24px] md:text-[32px]">
          Click to Load Map
        </p>
      </div>
    </div>
  );
}

export default Map;
