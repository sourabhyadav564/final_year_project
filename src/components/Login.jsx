import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import { users } from "../Constants";
// import VanillaTilt from "vanilla-tilt";

export default function Login({ open, setOpen, children, title }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            <div className="inline-block align-bottom bg-[#ffd4bd] rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle" >
              <div className="pt-5 px-6 sm:flex justify-between items-center">
                <div className="text-black-20 text-lg capitalize pl-6 flex-1 text-center font-semibold">
                  {title}
                </div>
                <GrClose
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="bg-[#ffd4bd] px-4 sm:p-6 sm:pb-4 w-full h-full">
                <div className="h-[400px] w-[500px]">
                  <div class="fixed pin items-center w-[500px] h-[500px]">
                    <div class="relative mx-6 md:mx-auto w-full z-20 m-8">
                      <div class=" bg-[#ffd4bd] rounded-lg ">
                        <h1 class="text-center text-6xl p-8 text-green-dark">
                          Login
                        </h1>

                        <form class="pt-6 pb-2 my-2">
                          <div class="mb-4">
                            <label
                              class="block text-sm font-bold mb-2"
                              for="email"
                            >
                              Mobile Number
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 "
                              id="number"
                              type="text"
                              maxLength="10"
                              placeholder="Enter Your Mobile Number"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-bold mb-2"
                              for="email"
                            >
                              Password
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 "
                              id="password"
                              type="password"
                              maxLength="10"
                              placeholder="Enter Your Password"
                            />
                          </div>
                          <div class="block md:flex items-center justify-between">
                            <div>
                              <button alt="LOG IN" onClick={(e) => {
                                e.preventDefault();
                                users.map((user) => {
                                  if (user.Number === document.getElementById("number").value && user.password === document.getElementById("password").value) {
                                
                                    localStorage.setItem("Number", document.getElementById("number").value);
                                    setOpen(false);
                                    window.location.reload();
                                  }
                                  else
                                    alert("Wrong Credentials");
                                });

                              }}>
                                <i>L</i>
                                <i>O</i>
                                <i>G</i>
                                <i>&nbsp;</i>
                                <i>I</i>
                                <i>N</i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
