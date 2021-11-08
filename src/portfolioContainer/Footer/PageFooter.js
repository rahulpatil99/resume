import React from "react";
import "./PageFooter.css";

export default function PageFooter(props) {


  return (
    <div className="pagefooter-container" id={props.id || ""}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L60,112C120,128,240,160,360,181.3C480,203,600,213,720,197.3C840,181,960,139,1080,144C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

    </div>
  );
}