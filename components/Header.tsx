import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute bg-transparent top-0 left-0 z-40 w-full flex items-center">
      <div className="container">
        <div className="relative flex -mx-4 items-center justify-between ">
          <div className="px-4 w-60 max-w-full">
            <Link href="/" className="navbar-log w-full block py-5">
              <Image
                src={"logo-white.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full header-logo navbar-logo"
              />
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
              >
                <ul className="block lg:flex">
                  <li className="relative group">
                    <Link
                      href="/"
                      className="ud-menu-scroll text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="ud-menu-scroll text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="ud-menu-scroll text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="ud-menu-scroll text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="ud-menu-scroll text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-base text-dark lg:text-white lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:-translate-y-1/2 after:mt-[-2px]"
                    >
                      Pages
                    </Link>
                    <div className="hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        About Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Pricing Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Contact Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Blog Grid Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Blog Details Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Sign Up Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Sign In Page
                      </Link>
                      <Link
                        href="/"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        404 Page
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              <Link
                href="/"
                className="text-base font-medium text-white hover:opacity-70 py-3 px-7 loginBtn"
              >
                Sign In
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-white bg-white bg-opacity-20 rounded-lg py-3 px-6 hover:bg-opacity-100 hover:text-dark signUpBtn duration-300 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
