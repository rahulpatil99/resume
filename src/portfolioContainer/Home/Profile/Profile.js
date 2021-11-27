import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/scrollService';
import "./Profile.css";
import "../../Header/Header.css";

export default function Profile() {
  return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello 👋, I'm <span className="highlighted-text">Rahul</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  <Typical
                  loop={Infinity}
                  steps={[
                      "Web Developer",1000,
                      "PHP Developer",1000,
                      "Laravel Developer",1000,
                      "NodeJS Developer",1000
                  ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  {/* This is my favorite work */}
                knack building application with front and Back end operations.
                  </span>
              </span>
            </div>
            <div className="profile-options">
            <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="https://drive.google.com/file/d/1a3z0L_-WzyEi57qdRRmAsyFYcrMeIufe/view?usp=sharing" download>
                  <button className="btn highlighted-btn">
                    Get Resume
                  </button>
                </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
          </div>
        </div>
      
      </div>
  )
}