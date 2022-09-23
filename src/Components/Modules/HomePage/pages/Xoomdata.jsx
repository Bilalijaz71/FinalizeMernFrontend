import React from "react";

const Xoomdata = () => {
  return (
    <React.Fragment>
      <section className="bg-[url(https://www.cheetay.pk/static/images/newLandingPage/xoombg.jpg)] bg-cover bg-top p-[53px] xl:p-32">
        <div className="">
          <figure className="pb-10 md:ml-[73px]">
            <img
              alt="Xoom"
              className="max-w-[100%]"
              src="https://www.cheetay.pk/static/images/newLandingPage/xoom.svg"
            />
          </figure>

          <div className="md:flex md:flex-col md:ml-[70px]">
            <h1 className="text-white pb-10 font-popmed font-semibold text-2xl">
              Become a XOOM member today
            </h1>
            <div className="flex flex-col space-y-4">
              <figure className="flex space-x-4">
                <img
                  alt="FreeDelivery"
                  className="h-8 max-w-[100%]"
                  src="https://www.cheetay.pk/static/images/newLandingPage/free-delivery-icon.svg"
                />
                <figcaption className="text-white font-[Poppins-Regular]">
                  Unlimited free delivery on 100s of eligible restaurants
                </figcaption>
              </figure>

              <figure className="flex space-x-4">
                <img
                  alt="XoomDelivery"
                  className="h-8 max-w-[100%]"
                  src="https://www.cheetay.pk/static/images/newLandingPage/xoom-delivery-icon.svg"
                />
                <figcaption className="text-white font-[Poppins-Regular]">
                  Access to EXCLUSIVE Xoom Daily Deals
                </figcaption>
              </figure>

              <figure className="flex space-x-4">
                <img
                  alt="flat-discount"
                  className="h-8 max-w-[100%]"
                  src="https://www.cheetay.pk/static/images/newLandingPage/flat-discount-icon.svg"
                />
                <figcaption className="text-white font-[Poppins-Regular]">
                  Flat 10% discount on eligible restaurants
                </figcaption>
              </figure>
            </div>

            <div className="for_all_arrow_animation bg-gradient-to-br from-[#FF8046] via-[#FF4F00] to-[#FF0000] justify-center md:h-[40px] cursor-pointer items-center rounded-full flex md:w-[24%] xl:w-[14%] lg:w-[15%] space-x-2 xl:py-3 sm:w-[30%] mt-8">
              <p className="text-white">Get Invite</p>
              <figure className="hover:animate-box">
                <img
                  alt="RightArrow"
                  src="https://cheetay.pk/static/images/newLandingPage/right-arrow.svg"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Xoomdata;
