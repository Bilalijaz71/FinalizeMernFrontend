import React from "react";
import Headerbannerimg from "../../../../Assests/headerbannerimg";
import AnimationSection from "./Animation";
import CheetayPop from "./CheetayPop";
import Download from "./Download";
import MainSection from "./MainSection";
import Xoomdata from "./Xoomdata";

const HomeComponent = () => {
  return (
    <React.Fragment>

      <AnimationSection />
      <Headerbannerimg />
      <MainSection />
      <Xoomdata />
      <CheetayPop />
      <Download />
    </React.Fragment>
  );
};
export default HomeComponent;
