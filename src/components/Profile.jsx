import React, { useEffect, useState } from "react";
import { users } from "../Constants";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { GrClose } from "react-icons/gr";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Profile({ open, setOpen }) {
  const [users1, setusers1] = useState({});

  useEffect(() => {
    if (localStorage.getItem("Number")) {
      const user = users.filter(
        (user) => user.Number === localStorage.getItem("Number")
      );
      if (user) {
        setusers1(user);
      }
    }
  }, []);

  console.log(users1);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#ffd4bd] shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg text-gray-900 font-bold">
                          My Profile
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <GrClose className="h-4 w-4 " aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <section
                        className="vh-100"
                        style={{ backgroundColor: "#ffd4bd" }}
                      >
                        <MDBContainer className="py-5 h-100">
                          <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol lg="6" className="mb-4 mb-lg-0">
                              <MDBCard
                                className="mb-3"
                                style={{ borderRadius: ".5rem" }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol
                                    md="4"
                                    className="gradient-custom text-center text-black"
                                    style={{
                                      borderTopLeftRadius: ".5rem",
                                      borderBottomLeftRadius: ".5rem",
                                    }}
                                  >
                                    <div className="flex items-center justify-center">
                                      <MDBCardImage
                                        src="https://cdn-icons-png.flaticon.com/512/560/560277.png"
                                        alt="Avatar"
                                        className="my-5"
                                        style={{
                                          width: "160px",
                                          height: "160px",
                                        }}
                                        fluid
                                      />
                                    </div>
                                    <p className="font-semibold text-xl">
                                      {users1[0]?.name || ""}
                                    </p>
                                    <p className="font-light text-xl">
                                      Bpl Card Holder
                                    </p>
                                    <MDBIcon far icon="edit mb-5" />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody className="p-4 font-semibold">
                                      <p>Personal Information</p>
                                      <hr className="mt-0 mb-4" />
                                      <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                          <MDBTypography tag="h6">
                                            AGE
                                          </MDBTypography>
                                          <MDBCardText className="text-muted font-light">
                                            {users1[0]?.Age || ""}
                                          </MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                          <MDBTypography tag="h6">
                                            Phone
                                          </MDBTypography>
                                          <MDBCardText className="text-muted font-light">
                                            {users1[0]?.Number || ""}
                                          </MDBCardText>
                                        </MDBCol>
                                      </MDBRow>

                                      <MDBTypography tag="h6">
                                        BPL Card Number
                                      </MDBTypography>
                                      <hr className="mt-0 " />
                                      <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                          <p className="font-light">
                                            {users1[0]?.bplCard || ""}
                                          </p>

                                          <MDBCardText className="text-muted"></MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                          <MDBTypography tag="h6">
                                            Address
                                          </MDBTypography>
                                          <MDBCardText className="text-muted font-light">
                                            {users1[0]?.address || ""}
                                          </MDBCardText>
                                        </MDBCol>
                                      </MDBRow>

                                      <div class="block md:flex items-center justify-between xs:pr-4">
                                        <div>
                                          <button
                                            alt="LOG OUT"
                                            onClick={
                                              () => {
                                                localStorage.removeItem(
                                                  "Number"
                                                );
                                                window.location.reload();
                                              }
                                            }
                                          >
                                            <i>L</i>
                                            <i>O</i>
                                            <i>G</i>
                                            <i>&nbsp;</i>
                                            <i>O</i>
                                            <i>U</i>
                                            <i>T</i>
                                          </button>
                                        </div>
                                      </div>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </section>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Profile;
