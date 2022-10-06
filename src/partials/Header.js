import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";
import Transition from "../utils/Transition.js";
import logo from "../assests/images/FT9ja.png";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30 bg-[#1d4353]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} alt="logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-200 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-gray-200 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white hover:text-gray-200 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white hover:text-gray-200 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Community">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to="/help"
                    className="text-sm text-gray-600 hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    Help center
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop lights switch */}

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link to="/contact" className="btn-sm text-white bg-[#f77e27]">
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-200 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                <div>
                  {/* Logo */}
                  <div className="bg-[#1d4353] py-5 pr-4 pl-20">
                    <img src={logo} alt="logo" className="h-10" />
                  </div>
                  <div className="pb-6 pr-4 pl-20">
                    {/* Links */}
                    <ul>
                      <li>
                        <Link
                          to="/about"
                          className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                        >
                          How it works
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/testimonials"
                          className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/testimonials"
                          className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                        <span className="flex text-gray-600 dark:text-gray-400 py-2">
                          Community
                        </span>
                        <ul className="pl-4">
                          <li>
                            <Link
                              to="/help"
                              className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                            >
                              Help center
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
