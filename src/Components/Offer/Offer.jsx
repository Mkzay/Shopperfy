const Offer = () => {
  return (
    <div className="flex flex-col gap-14 p-10 md:gap-24 bg-gradient-to-r from-gradient1 to gradient2 lg:flex-row md:px-36">
      <div className="flex flex-1 flex-col items-start justify-center gap-4">
        <h1 className="text-lg font-bold md:text-3xl">EXCLUSIVE</h1>
        <h1 className="text-lg font-bold md:text-5xl">Offers For You</h1>
        <p className="font-semibold text-base">ONLY ON BEST SELLER PRODUCTS</p>
        <button className="bg-[#ff4141] h-12 w-36 rounded-3xl text-white">Check Now</button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img className="w-80 md:w-9/12" src="/exclusive_image.png" alt="" />
      </div>
    </div>
  );
};

export default Offer;
