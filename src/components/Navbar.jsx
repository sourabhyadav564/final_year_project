import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import CartOne from "./Carttwo";
import Profile from "./Profile";
// import About from "./About";
import { Link } from 'react-router-dom';
import Homepagecompfive from "./Homepagecompfive";
import Login from "./Login";

function Navbar() {
  // const myRef = useRef(null);
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
      <section className="shadow mt-0 py-5 w-screen lg:h-max">
        <div className="flex items-center mx-auto overflow-hidden font-medium h-16 flex-row justify-between px-4 mt-0 w-screen lg:h-24">
          <a className="my-11 border-none outline-0 outline-offset-0 outline-none h-14">
            <h1 className="tracking-tighter text-3xl text-black font-extrabold p-5 border-solid my-20 border-black border-2 outline-offset-0 outline-0 outline-none py-1 mt-0">
              RATION HOUSE
            </h1>
          </a>
          <div className="hidden bg-white items-center md:flex md:text-sm md:gap-x-6 md:flex-row lg:border-black lg:border-2 lg:rounded-sm xl:mr-5 ">
            {/* <a
              className="inline-block w-full py-2 mx-0 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center lg:mx-3 lg:font-bold hover:cursor-pointer"
              href="/"
            >
              HOME
            </a> */}
            {/* <Link to="/about" > */}
              <a
                className="inline-block w-full py-2 mx-0 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center lg:mx-3 lg:font-bold hover:cursor-pointer"
                href="/about"
               >
                ABOUT
              </a>
              <a
                className="inline-block w-full py-2 mx-0 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center lg:mx-3 lg:font-bold hover:cursor-pointer"
                onClick={()=>{setOpenLogin(true);}}
              >
                LOGIN
              </a>
            {/* </Link> */}
            <a
              className="inline-block hover:cursor-pointer w-full py-2 mx-0 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center lg:mx-3 lg:font-bold"
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
              PROFILE
            </a>
            <a className="inline-block w-full py-2 mx-0 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center lg:mx-3 lg:font-bold hover:cursor-pointer" onClick={() => {
              scrollTo(0, 2290);
            }}>
              ORDER NOW
            </a>
            <a
              onClick={() => {
                setOpenCart(true);
              }}
              //href="/account/login"
              className="inline-block w-full py-2 mx-0 font-medium text-left px-2 h-full border-0 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-0 bg-primary text-black lg:py-4 lg:px-4 lg:font-bold xl:mx-0 hover:cursor-pointer"
            >
              CART
            </a>
          </div>
          <div className="flex items-center gap-x-2 md:hidden z-10">
            <Menu as="div">
              <Menu.Button>
                <span>
                  <svg
                    className="w-full text-4xl mt-2 md:hidden"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </span>
              </Menu.Button>
              <Menu.Items
                as="ul"
                className="absolute text-gray-900 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg left-px right-px pl-2 pt-5 pb-4"
              >
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      className={
                        "group flex items-center w-full px-2 py-2 text-sm" +
                        (active ? "bg-primary text-white" : "")
                      }
                      href="#"
                    >
                      Intro
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      className={
                        "group flex items-center w-full px-2 py-2 text-sm" +
                        (active ? "bg-primary text-white" : "")
                      }
                      // href="#"
                      onClick={() => {
                        myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Order Now
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      className={
                        "group flex items-center w-full px-2 py-2 text-sm" +
                        (active ? "bg-primary text-white" : "")
                      }
                    // href="#"
                    >
                      Login
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <a
                      className={
                        "group flex items-center w-full px-2 py-2 text-sm" +
                        (active ? "bg-primary text-white" : "")
                      }
                      // href="#"
                      onClick={() => {
                        setOpenCart(true);
                      }}
                    >
                      Cart
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </section>
      <Profile open={openProfile} setOpen={setOpenProfile} />
      <CartOne open={openCart} setOpen={setOpenCart} />
      <Login open={openLogin} setOpen={setOpenLogin} />
    </>
  );
}

export default Navbar;
