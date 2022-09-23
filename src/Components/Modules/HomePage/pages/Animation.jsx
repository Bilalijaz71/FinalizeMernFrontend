import React from "react";

const AnimationSection = () => {
  return (
    <React.Fragment>
      <section className="text-center">
        <div className="flex justify-center space-x-5 mb-5 xl:mr-8">
          <div className="flex flex-col truncate overflow-hidden h-[3rem] text-end font-popmed font-bold text-[27px] lg:text-[40px] leading-[65px] text-[#FF4F00]">
            <span className="animate-spin_word">Fast Food</span>
            <span className="animate-spin_word">Milk</span>
            <span className="animate-spin_word">Medicine</span>
            <span className="animate-spin_word">Grocery</span>
            <span className="animate-spin_word">House Holds</span>
            <span className="animate-spin_word">Fast Food</span>
          </div>
          <h2 className="font-bold text-[30px] md:text-[40px] leading-[56px] self-end">
            chahiya?
          </h2>
        </div>

        <div className="mb-6">
          <p className="font-normal text-[20px] leading-[32px] text-[#616161]">
            Food, groceries, fresh milk, medicines, and a lot more on Pakistan's
            <br />
            favourite delivery app.
          </p>
        </div>
        <figure className="flex flex-col items-center justify-center space-x-2 md:space-x-5 md:flex-row xl:mb-[4rem] md:mb-[2rem]">
          <img
            className="w-[40%] lg:w-[12%] sm:w-[30%] md:w-[20%]"
            src="https://www.cheetay.pk/static/images/newLandingPage/google-playstore.svg"
            alt="Playstore"
          />
          <img
            className="w-[40%] lg:w-[12%] sm:w-[30%] md:w-[20%]"
            src="https://www.cheetay.pk/static/images/newLandingPage/appstore.svg"
            alt="iosstore"
          />
        </figure>
      </section>
    </React.Fragment>
  );
};
export default AnimationSection;
