const LoginSignup = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-gradient1 to gradient2 w-full h-screen">
      <div className="flex flex-col items-start justify-center gap-8 bg-white w-11/12 h-[70%] md:w-9/12 md:h-[55%] lg:w-[45%] lg:h-[65%]  shadow-2xl -mt-20 md:-mt-16">
        <h2 className="text-2xl font-semibold pl-5">Sign Up</h2>
        <form className="flex flex-col items-center justify-center w-full gap-5">
          <input
            className="w-11/12 h-12 border border-[#5c5c5c] pl-5 outline-none placeholder:text-sm"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-11/12 h-12 border border-[#5c5c5c] pl-5 outline-none placeholder:text-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-11/12 h-12 border border-[#5c5c5c] pl-5 outline-none placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <button className="w-11/12 h-12 pl-5 bg-[#ff4141] text-white text-sm font-medium flex items-center justify-center outline-none cursor-pointer">
            Continue
          </button>
        </form>
        <div className="flex flex-col pl-5 gap-3 -mt-5">
          <p className="text-sm text-[#5c5c5c]">
            Already have an account?
            <span className="text-[#ff4141] font-medium">Login here</span>
          </p>
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" />
            <p className="text-sm text-[#5c5c5c]">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
