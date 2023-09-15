import React, { useState } from "react";
import { Transition, Disclosure } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";
import TextSlider from "./MainTextSlider";
import Nav1 from "../parts/NavMenu1";
import Nav1a from "../parts/NavMenu1a";
import Nav2 from "../parts/NavMenu2";
import Nav2a from "../parts/NavMenu2a";
import Nav3 from "../parts/NavMenu3";
import Nav3a from "../parts/NavMenu3a";
import Nav4 from "../parts/NavMenu4";
import Nav5 from "../parts/NavMenu5";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full z-50">
      <div className="w-full absolute bg-th-background font-roboto h-24 md:h-28"></div>
      <nav className=" h-24 md:h-28">
        <div>
          <div class=" max-w-screen-lg mx-auto relative  flex justify-between pt-6 md:pt-10 items-center">
            <a
              href="/"
              className="flex text-lg font-semibold rounded-lg tracking-wide "
            >
              <div className="transform -translate-y-2 ml-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1224 1116"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="35">
                    <path d="M271.12 557.36c0-188.26 152.62-340.88 340.88-340.88S952.88 369.1 952.88 557.36 800.26 898.24 612 898.24 271.12 745.62 271.12 557.36z"></path>
                    <path d="M417.21 558c0-107.58 87.209-194.79 194.79-194.79S806.79 450.419 806.79 558 719.581 752.79 612 752.79 417.21 665.581 417.21 558zM447.02 258.64s25.907-42.147 86.274-179.53c15.195-34.582 151.28-31.51 164.74-2.55 65.043 139.94 78.954 182.82 78.954 182.82M776.98 857.36s-25.907 42.147-86.274 179.54c-15.195 34.58-151.28 31.51-164.74 2.55-65.043-139.94-78.954-182.82-78.954-182.82M911.36 393.02s42.147 25.907 179.54 86.274c34.58 15.195 31.51 151.28 2.55 164.74-139.94 65.043-182.82 78.954-182.82 78.954M312.64 722.98s-42.147-25.907-179.53-86.274c-34.582-15.195-31.511-151.28-2.551-164.74 139.94-65.043 182.82-78.954 182.82-78.954"></path>
                    <path d="M245.28 420.38s11.841-292.26 52.67-291.75c40.83.507 54.217 208.08 54.217 208.08M979.53 420.38s-11.841-292.26-52.67-291.75-54.217 208.08-54.217 208.08"></path>
                    <g>
                      <path d="M244.88 689.88s11.841 292.26 52.67 291.75c40.83-.507 54.217-208.08 54.217-208.08M979.12 689.88s-11.841 292.26-52.67 291.75c-40.83-.507-54.217-208.08-54.217-208.08"></path>
                    </g>
                    <path d="M447.02 558C612 420.38 612.41 420.38 776.99 558c-164.58 131.88-164.98 131.88-329.97 0z"></path>
                    <path d="M503.94 555.81c0-55.716 47.906-100.88 107-100.88s107 45.167 107 100.88c0 55.717-47.906 100.88-107 100.88s-107-45.167-107-100.88z"></path>
                  </g>
                </svg>
              </div>
              <div className="hidden md:flex md:flex-col">
                <h1 className=" mt-1.5 text-th-accent-dark text-2xl md:text-5x1 lg:text-2xl">
                  Insight|Makers
                </h1>
                <div className="flex">
                  <h3 className=" transform -mt-2 text-sm  Avenir tracking-tight ">
                    we build
                  </h3>
                  <div className=" text-sm   ml-1 -mt-2 tracking-tighter">
                    <TextSlider />
                  </div>
                </div>
              </div>
            </a>

            <ul class=" hidden absolute -mt-1 right-10 md:right-5 lg:right-0 xl:right-0 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto space-x-4">
              <li>
                <Nav1a />
              </li>
              <li className="hidden">
                <Nav1 />
              </li>
              <li>
                <Nav2a />
              </li>
              <li>
                <Nav3a />
              </li>
              <li className="hidden">
                <Nav4 />
              </li>
              <li className="hidden">
                <Nav5 />
              </li>
              <li className="">
                <ThemeToggle />
              </li>
            </ul>
            <div class="hidden absolute top-1/2 -right-10 px-2 transform -translate-y-1/2 -translate-x-1/4 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto "></div>
            <div class="lg:hidden flex ">
              <div className="mr-2 "> </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mr-8 mb-3 inline-flex items-center justify-center p-2 rounded-md  hover:bg-th-primary-medium "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {" "}
                    <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 0 0"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div class="relative z-50">
              <div class="fixed inset-0 bg-th-background opacity-25"></div>
              <div class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pt-4 pr-4 pl-4 bg-th-background border-r overflow-y-auto">
                <div class="flex justify-between mb-6 mx-2">
                  <a href="/" className="text-lg font-normal rounded-lg   ">
                    <h1 className="absolute text-3xl pt-6 font-semibold  md:text-3x1 lg:text-4xl">
                      Insight|Makers
                    </h1>
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-th-background inline-flex items-center justify-center p-2"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <ul className="mx-2 mt-5">
                    <li class="mb-3">
                      <Disclosure>
                        <Disclosure.Button className="mb-2 py-2 pl-3 w-full text-left rounded-lg hover:bg-th-primary-medium">
                          About Us
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-sm rounded-lg hover:bg-th-primary-medium pl-5 py-1 pl-2">
                          <span></span>
                          Staff & Board
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm rounded-lg hover:bg-th-primary-medium pl-5 py-1 pl-2">
                          Our Mission
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm rounded-lg hover:bg-th-primary-medium pl-5 py-1 pl-2">
                          Our Staff & Partners
                        </Disclosure.Panel>
                      </Disclosure>
                    </li>
                    <li class="mb-3 mt-2">
                      <Disclosure>
                        <Disclosure.Button className="mb-2 py-2 pl-3 w-full text-left rounded-lg hover:bg-th-primary-medium">
                          What We Do
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-sm  pl-2 pt-2">
                          Maker & Trade Skills Education
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm  pl-2 ">
                          STEAM & Sustainability Education
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm  pl-2">
                          Plastics Recycling & Production
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm  pl-2 pb-2">
                          Social Equity Advocacy
                        </Disclosure.Panel>
                      </Disclosure>
                    </li>

                    <li class="mb-3 mt-2">
                      <Disclosure>
                        <Disclosure.Button className="mb-2 py-2 pl-3 w-full text-left rounded-lg hover:bg-th-primary-medium">
                          Make With Us
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-sm  pl-2 pt-2">
                          Maker Events, Classes & Kits
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm  pl-2 ">
                          Waste-To-Wonder Pop-Ups
                        </Disclosure.Panel>
                        <Disclosure.Panel className="text-sm  pl-2 pb-2">
                          Events for Schools, Businesses & More
                        </Disclosure.Panel>
                      </Disclosure>
                    </li>
                  </ul>
                </div>
                <div class="mt-auto">
                  <p class="my-4 text-xs text-center">
                    <div class="mb-4 flex justify-center mx-auto w-full ">
                      <ThemeToggle />
                    </div>
                    <div class="mb-2 flex justify-center mx-auto w-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1224 1116"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-16 h-16"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth="35">
                          <path d="M271.12 557.36c0-188.26 152.62-340.88 340.88-340.88S952.88 369.1 952.88 557.36 800.26 898.24 612 898.24 271.12 745.62 271.12 557.36z"></path>
                          <path d="M417.21 558c0-107.58 87.209-194.79 194.79-194.79S806.79 450.419 806.79 558 719.581 752.79 612 752.79 417.21 665.581 417.21 558zM447.02 258.64s25.907-42.147 86.274-179.53c15.195-34.582 151.28-31.51 164.74-2.55 65.043 139.94 78.954 182.82 78.954 182.82M776.98 857.36s-25.907 42.147-86.274 179.54c-15.195 34.58-151.28 31.51-164.74 2.55-65.043-139.94-78.954-182.82-78.954-182.82M911.36 393.02s42.147 25.907 179.54 86.274c34.58 15.195 31.51 151.28 2.55 164.74-139.94 65.043-182.82 78.954-182.82 78.954M312.64 722.98s-42.147-25.907-179.53-86.274c-34.582-15.195-31.511-151.28-2.551-164.74 139.94-65.043 182.82-78.954 182.82-78.954"></path>
                          <path d="M245.28 420.38s11.841-292.26 52.67-291.75c40.83.507 54.217 208.08 54.217 208.08M979.53 420.38s-11.841-292.26-52.67-291.75-54.217 208.08-54.217 208.08"></path>
                          <g>
                            <path d="M244.88 689.88s11.841 292.26 52.67 291.75c40.83-.507 54.217-208.08 54.217-208.08M979.12 689.88s-11.841 292.26-52.67 291.75c-40.83-.507-54.217-208.08-54.217-208.08"></path>
                          </g>
                          <path d="M447.02 558C612 420.38 612.41 420.38 776.99 558c-164.58 131.88-164.98 131.88-329.97 0z"></path>
                          <path d="M503.94 555.81c0-55.716 47.906-100.88 107-100.88s107 45.167 107 100.88c0 55.717-47.906 100.88-107 100.88s-107-45.167-107-100.88z"></path>
                        </g>
                      </svg>
                    </div>

                    <span>Copyright © 2023</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
