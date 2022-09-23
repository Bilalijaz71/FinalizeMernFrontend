import React from "react";

const Footerbottom = () => {
  return (
    <React.Fragment>
      <div className="flex xl:ml-24 mt-3">
        <figure>
          <img
            alt="cheetaypaw"
            src="https://www.cheetay.pk/static/images/newLandingPage/cheetay-paw.svg"
          />
          <figcaption className="text-white">
            Copyright 2021 @ Cheetay.pk
          </figcaption>
        </figure>
        <div className="flex ml-auto xl:mr-32">
          <ul className="flex xl:space-x-5">
            <li>
              <a
                className="bg-[url('https://www.cheetay.pk/static/images/newLandingPage/facebook-footer.svg')] h-14 w-7 bg-no-repeat block"
                href="facebook.com"
              >
                <i></i>
              </a>
            </li>
            <li>
              <a
                className="bg-[url('https://www.cheetay.pk/static/images/newLandingPage/instagram-footer.svg')] h-14 w-7 bg-no-repeat block"
                href="instagram.com"
              >
                <i></i>
              </a>
            </li>
            <li>
              <a
                className="bg-[url('https://www.cheetay.pk/static/images/newLandingPage/twitter-footer.svg')] h-14 w-7 bg-no-repeat block"
                href="twitter.com"
              >
                <i></i>
              </a>
            </li>
            <li>
              <a
                className="bg-[url('https://www.cheetay.pk/static/images/newLandingPage/snapchat-footer.svg')] h-14 w-7 bg-no-repeat block"
                href="snapchat.com"
              >
                <i></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footerbottom;
