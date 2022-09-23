import React from "react";

const Download = () => {
  return (
    <React.Fragment>
      <section className="bg-[url('https://www.cheetay.pk/static/images/newLandingPage/download-now.jpg')] bg-cover h-auto py-24">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="font-popmed font-semibold xl:text-[32px] xl:leading-[48px]">
            Download Now
          </h1>
          <h3 className="font-[Poppins-Regular] font-normal text-[20px] leading-[32px] text-[#616161]">
            Kuch bhi, Kabhi bhi, Kahin bhi
          </h3>
          <figure className="flex xl:space-x-7 justify-center">
            <img
              className="xl:w-[50%] w-[40%]"
              src="https://www.cheetay.pk/static/images/newLandingPage/google-playstore.svg"
              alt="Playstore"
            />
            <img
              className="xl:w-[50%] w-[40%]"
              src="https://www.cheetay.pk/static/images/newLandingPage/appstore.svg"
              alt="iosstore"
            />
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Download;
