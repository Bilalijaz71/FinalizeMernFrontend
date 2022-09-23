import React from "react";

const FooterLinks = () => {
  return (
    <React.Fragment>
      <div className=" md:flex text-white justify-around xl:pr-64 xl:pt-[4rem] xl:pb-[2rem] grid grid-cols-2 gap-8 mt-5 md:mt-0">
        <div>
          <h2 className="xl:pb-10 xl:text-[inherit] xl:font-[inherit]">
            GET TO KNOW US
          </h2>
          <div className="md:space-y-5 space-y-3 ">
            <h4 className="xl:text-[inherit] xl:font-[inherit]">About us</h4>
            <h4 className="xl:text-[inherit] xl:font-[inherit]">Careers</h4>
            <h4 className="xl:text-[inherit] xl:font-[inherit]">XOOM</h4>
            <h4 className="xl:text-[inherit] xl:font-[inherit]">
              Cheetay in the news
            </h4>
          </div>
        </div>
        <div>
          <h2 className="xl:pb-10 xl:text-[inherit] xl:font-[inherit]">
            SUPPORT
          </h2>
          <div className="md:space-y-5 space-y-3">
            <h4 className="xl:text-[inherit] xl:font-[inherit]">FAQs</h4>
            <h4 className="xl:text-[inherit] xl:font-[inherit]">
              Terms & Conditions
            </h4>
            <h4 className="xl:text-[inherit] xl:font-[inherit]">
              Privacy Policy
            </h4>
          </div>
        </div>

        <div className="xl:flex xl:flex-col xl:w-auto gap-2 md:gap-0">
          <h2 className="md:pb-10 pb-4 xl:text-[inherit] xl:font-[inherit]">
            NEWSLETTER
          </h2>
          <div className="md:space-y-5 space-y-3">
            <h4 className="xl:text-[inherit] xl:font-[inherit]">
              Stay updated subscribing to our newsletter
            </h4>
            <input
              className="w-[100%] rounded-full py-[12px] placeholder:m-6 "
              placeholder=" Your.address@email.com"
            />
          </div>
          <div className="bg-gradient-to-br from-[#FF8046] via-[#FF4F00] to-[#FF0000] justify-center mt-[1rem] cursor-pointer w-[50%] items-center rounded-full mb-[10px] flex xl:py-3 xl:mt-8">
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FooterLinks;
