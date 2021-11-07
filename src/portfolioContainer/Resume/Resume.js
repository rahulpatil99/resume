import React, { useState} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    // let fadeInScreenHandler = (screen) => {
    //   if (screen.fadeInScreen !== props.id) return;

    // Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
    // ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "Core PHP", ratingPercentage: 70 },
    { skill: "Laravel", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: "MySQL", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "E-Dairy Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce website for showcasing and sell milk products online",
      subHeading:
        "Technologies Used:  Core PHP, JavaScript ,MySQL",
    },
    {
      title: "Goshima Website ",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Online ecommerce website  and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },

    {
      title: "Digital Optimize Real-Time Assistance Application",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Online ecommerce website  and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Java, Android Studio,Speech Recognize tool",
    },

    {
      title: " Online Notice Board Website",
      duration: { fromDate: "2018", toDate: "2019" },
      description:
        "Online ecommerce website  and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Core PHP, JavaScript,HTML",
    },
  ];

  const resumeDetails = [
    <div className="resume-education-screen-container" key="education">
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
    </div>,

    

    /* PROGRAMMING SKILLS */
    <div
      className="resume-program-screen-container programming-skills-container"
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
    </div>,

    /* PROJECTS */
    <div className="resume-projects-screen-container" key="projects">
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
    </div>,

    
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Home/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail1) => ResumeDetail1)}
      </div>
    );
  };

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     // fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div
      className="resume-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
