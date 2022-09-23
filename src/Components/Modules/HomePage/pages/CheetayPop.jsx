import React from "react";
import { Link } from "react-router-dom";
const CheetayPop = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col-reverse md:items-center justify-center my-28 xl:gap-16 lg:flex-row">
        <div className="mx-3 mr-10 mt-[1rem] xl:w-[32%]">
          <img
            alt=" cheetaypop-banner"
            className="xl:max-w-[100%]"
            src="https://www.cheetay.pk/static/images/newLandingPage/cheetaypop-banner.jpg"
          />
        </div>

        <div className="xl:mx-3 xl:my-40 xl:mr-10 mb-[3rem]">
          <figure className="xl:pb-11">
            <img
              alt="cheetaypop"
              className="xl:max-w-full"
              src="https://www.cheetay.pk/static/images/newLandingPage/cheetaypop.svg"
            />
          </figure>
          <h1 className="font-semibold text-2.5xl ">Jo Jeetay Wo Cheetay</h1>
          <p className="xl:for_all_p_tags xl:mb-6">
            CheetayPOP is Pakistan's biggest game show app! Answer 11
            <br />
            questions for the chance to win Rs. 1 crore!
          </p>
          <Link to="/Cart">
            <div className=" for_all_arrow_animation bg-gradient-to-br from-[#FF8046] via-[#FF4F00] to-[#FF0000] justify-center sm:w-[30%] cursor-pointer items-center rounded-full md:w-[35%] flex xl:w-[45%] w-[45%] xl:space-x-3 space-x-1 py-3">
              <p className="text-white">Get Started</p>
              <figure className="hover:animate-box">
                <img
                  alt="right-arrow"
                  src="https://cheetay.pk/static/images/newLandingPage/right-arrow.svg"
                />
              </figure>
            </div>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};
export default CheetayPop;
