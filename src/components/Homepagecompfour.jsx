import Profile from "./Profile.jsx";
import React, { useState } from "react";
import Login from "./Login.jsx";

export const Homepagecompfour = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-10 py-5 lg:px-10 xl:px-10 2xl:px-10 px-4">
      <div
        className="order-2 lg:order-1 xl:order-1 2xl:order-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 pr-10 xs:flex sm:flex md:flex xs:justify-around sm:justify-around md:justify-around"
        data-aos="flip-right"
      >
        <img
          alt="No alt"
          src="https://cdn.pixabay.com/photo/2015/02/27/22/28/india-652857_960_720.png"
          className="border-2 border-black lg:w-80 xl:w-80 2xl:w-80 lg:ml-20 xl:ml-20 2xl:ml-20"
          style={{ transform: "rotate(6deg)" }}
        />
      </div>
      <div className="order-1 lg:order-2 xl:order-2 2xl:order-2 lg:px-14 xl:px-14 2xl:px-14 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full flex-col justify-center ">
        <h1
          className="text-2xl font-bold"
          style={{ color: "#e48c71" }}
          data-aos="fade-up"
        >
          YOUR PERSONAL DATA IS SAFE WITH US
        </h1>
        <h1 className="font-bold mt-10 text-5xl" data-aos="flip-right">
          GOVT. ENSURES YOUR{" "}
        </h1>
        <h1 className="text-5xl font-bold " data-aos="flip-right">
          SAFETY FIRST
        </h1>
        <p className="font-bold mt-3 text-base " data-aos="flip-right">
          Govt. of India ensures the safety of your personal data and ensures
          that it is not misused. No one can access your personal data without
          your permission. Only you can access your data.
        </p>
        <p className="font-bold mt-3 text-base " data-aos="flip-right"></p>
        <a
          //href="/account/login"
          className="inline-block py-2 mx-0 px-2 text-center border-black border-2 rounded font-bold w-72 mt-5 text-black hover:cursor-pointer"
          style={{ backgroundColor: "#f1d4ca" }}
          data-aos="flip-right"
          onClick={() => {
            if(localStorage.getItem("Number"))
            {
              setOpenProfile(true);
            }
            else
            {
              setOpenLogin(true);
            }
          }}
        >
          YOUR PROFILE
        </a>
      </div>
      <Profile open={openProfile} setOpen={setOpenProfile} />
      <Login open={openLogin} setOpen={setOpenLogin} />
    </div>
  );
};
export default Homepagecompfour;
