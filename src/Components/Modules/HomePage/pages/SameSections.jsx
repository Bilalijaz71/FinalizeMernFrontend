import React from "react";
import { Link } from "react-router-dom";

const SameSection = ({ title, description, imageUrl, buttonText }) => {
  return (
    <React.Fragment>
      <section className="flex flex-col-reverse md:items-center justify-center my-28 xl:odd:flex-row  xl:even:flex-row-reverse xl:gap-16 lg:flex-row">
        <div className="mx-3 mr-10 mt-[1rem] xl:w-[32%]">
          <h1 className="font-semibold text-2.5xl ">{title}</h1>
          <p className="for_all_p_tags">{description}</p>
          <Link to="/Cart">
            <div className="for_all_arrow_animation md:w-[50%] md:h-[40px] lg:w-[53%] lg:h-[48px] lg:mt-4 sm:w-[38%] w-[80%] h-[46px]">
              <p className="text-white">{buttonText}</p>
              <figure className="hover:animate-box">
                <img
                  alt="arrow"
                  src="https://cheetay.pk/static/images/newLandingPage/right-arrow.svg"
                />
              </figure>
            </div>
          </Link>
        </div>
        <div>
          <img className="max-w-[100%]" alt="images" src={imageUrl}></img>
        </div>
      </section>
    </React.Fragment>
  );
};
export default SameSection;
