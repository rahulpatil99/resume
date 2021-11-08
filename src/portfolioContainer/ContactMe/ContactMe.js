import React from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./ContactMe.css";

export default function AboutMe(props) {



  return (
    
    <div
      className="main-container"
      id={props.id || ""}
    >
      <ScreenHeading title={"Contact Me"} subHeading={"Get In touch"} />
      <div className="central-form">
          <form onSubmit="">
            <p></p>
            <label htmlFor="name">Name</label>
            <input type="text"  value="" />

            <label htmlFor="email">Email</label>
            <input type="email"  value="" />

            <label htmlFor="message">Message</label>
            <textarea type="text" value="" />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}