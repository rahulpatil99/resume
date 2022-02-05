import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */


  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" }
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Core Java", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "PHP", ratingPercentage: 80 },
    { skill: "Laravel Framework", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "Data Structure & Algorithm", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Lyrics Finder App",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Search and Fetch lyrics data using API.",
      subHeading: "Technologies Used: React, HTML, CSS.",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, HTML.",
    },
    {
      title: "E-Dairy Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce website for showcasing and sell milk products online",
      subHeading:
        "Technologies Used:  Core PHP, JavaScript ,MySQL.",
    },
    {
      title: "Goshima Website ",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Goshima (Gokul Shirgaon Manufacturing Association) Website",
      subHeading:
        "Technologies Used: Core PHP, JavaScript, Bootstrap, MySQL.",
    },

    {
      title: "Digital Optimize Real-Time Assistance Application",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "This project overcomes a few drawbacks of current assistance by using speech recognition tools",
      subHeading:
        "Technologies Used: Java, Android Studio,Speech Recognize tool.",
    },

    {
      title: " Online Notice Board Website",
      duration: { fromDate: "2018", toDate: "2019" },
      description:
        ` Display notice online. There are four users such as Admin, Head of Department, Faculty, Student. 
        Based on their permission. Users can read, write, and delete notices.`,
      subHeading:
        "Technologies Used: Core PHP, JavaScript, HTML.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Sanjay Ghodawat Institutions, Kolhapur"}
        subHeading={"BACHELOR OF Computer Science and Engineering"}
        fromDate={"2016"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"Vivekanand College Kolhapur"}
        fromDate={"2015"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Shrimant Jaysingrao Ghatge High School, Kagal"}
        fromDate={"2013"}
        toDate={"2014"}
      />
    </div>
    ,

    

    /* PROGRAMMING SKILLS */
    <div
      className="programming-skills-container"
      key="programming-skills"
      >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>
    ,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>
    ,

    
  ];


  const getBullet = (index)=>{
    return (<div
        className={"bullet selected-bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Home/${resumeBullets[index].logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[index].label}</span>
      </div>
    )}

  const getResumeScreensDetails = (index) => {
    return (
      <div
        className="resume-details-carousal"
      >
        {resumeDetails[index]}
      </div>
    );
  };

  const resumeColumn = ()=>{
    return resumeBullets.map((bullet,index) => (
      <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullets">{getBullet(index)}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreensDetails(index)}</div>
        </div>
    ))
  };

  return (
    <div
      className="resume-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />

        {resumeColumn()}

      </div>
    </div>
  );
};

export default Resume;
