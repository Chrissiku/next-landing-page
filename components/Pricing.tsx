import React from "react";

const Pricing = () => {
  return (
    <section className="pt-10 lg:pt-[80px] pb-10 lg:pb-[80px] relative z-20 overflow-hidden bg-[#d0d3f3]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Pricing Table
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Our Pricing Plan
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center ">
              <span className="text-dark font-medium text-base uppercase block mb-2">
                STARTING FROM
              </span>
              <h2 className="font-semibold text-primary mb-9 text-[28px]">
                $ 19.99/mo
              </h2>

              <div className="mb-10">
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  1 User
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Use on 1 (one) project
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  3 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="/"
                  className="inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out"
                >
                  Purchase Now
                </a>
              </div>
              <span className="absolute left-0 bottom-0 z-[-1] w-14 h-14 rounded-tr-full block bg-primary"></span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-primary bg-gradient-to-b from-primary to-[#179BEE] rounded-xl relative z-10 overflow-hidden shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center ">
              <span className="inline-block py-2 px-6 border border-white rounded-full text-base font-semibold text-primary bg-white uppercase mb-5">
                POPULAR
              </span>
              <span className="text-white font-medium text-base uppercase block mb-2">
                STARTING FROM
              </span>
              <h2 className="font-semibold text-white mb-9 text-[28px]">
                $ 19.99/mo
              </h2>

              <div className="mb-10">
                <p className="text-base font-medium text-white leading-loose mb-1">
                  5 User
                </p>
                <p className="text-base font-medium text-white leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base font-medium text-white leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base font-medium text-white leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base font-medium text-white leading-loose mb-1">
                  Use on 1 (one) project
                </p>
                <p className="text-base font-medium text-white leading-loose mb-1">
                  4 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="/"
                  className="inline-block text-base font-medium text-dark bg-white border border-white rounded-full text-center py-4 px-11 hover:text-white hover:bg-dark hover:border-dark transition duration-300 ease-in-out"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center ">
              <span className="text-dark font-medium text-base uppercase block mb-2">
                STARTING FROM
              </span>
              <h2 className="font-semibold text-primary mb-9 text-[28px]">
                $ 70.99/mo
              </h2>

              <div className="mb-10">
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  1 User
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  Use on unlimited project
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                  4 Months support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="/"
                  className="inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out"
                >
                  Purchase Now
                </a>
              </div>

              <span className="absolute right-0 top-0 z-[-1] w-14 h-14 rounded-bl-full block bg-secondary"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
