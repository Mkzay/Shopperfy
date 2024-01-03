const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-7 p-5 h-[60vh] border border-[#e3e3e3] rounded-3xl bg-gradient-to-r from-gradient1 to gradient2 mb-28 md:w-9/12 md:gap-5">
      <h1 className="text-2xl text-center font-semibold md:text-4xl">
        Get Exclusive Offers In Your Email
      </h1>
      <p className="text-lg text-center font-semibold md:text-xl">
        Subscribe to our newsletter and stay updated
      </p>
      <form className="flex items-center justify-center">
        <input
          className="w-52 h-10 bg-[#616161] outline-none pl-5 text-white text-sm placeholder:text-white placeholder:text-sm md:w-80"
          type="email"
          placeholder="Your Email Address"
          required
        />
        <button className="bg-black h-10 w-24 text-white p-5 flex items-center text-sm">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
