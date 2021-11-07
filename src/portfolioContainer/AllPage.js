import React from "react";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";


export default function AllPage(props) {
  return (
    <div className="all-container" id={props.id || ""}>
      <Home />
      <AboutMe/>
      <Resume/>

    </div>
  );
}
