import React from "react";
import GetResumeBtn from "../Shared/GetResumeBtn";
import HeadingInfo from "../Shared/HeadingInfo";

const Skills = () => {
  return (
    <div className="py-12 p-6">
      <div>
        <HeadingInfo
          title={"Soft Skills Are Here"}
          subtitle={
            "Unlocking the Power of Communication, Collaboration, and Adaptability for Success in Every Aspect of Life"
          }
        />
      </div>
      {/* skills-container */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-5">
        {/* left-container */}
        <div className="w-full md:w-1/2 p-4">
          <p className="text-4xl font-bold  flex items-center">
            <span className="mr-5">||</span> Soft Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest flex flex-col gap-5 mt-12">
            My Soft Skills <span> Are Here</span>
          </h2>
          {/* button-container */}
          <div className="mt-20">
            <GetResumeBtn text={"Get Resume"} />
          </div>
        </div>
        {/* right-container */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {/* communication-container */}
          <div className="w-11/12 mx-auto p-6 min-h-[150px] border-2">
            <h2 className="text-3xl font-medium tracking-wide ">
              Communication
            </h2>
            <div>
              <progress
                className="progress progress-info mt-6"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
          {/* Flexibility-container */}
          <div className="w-11/12 mx-auto p-6 min-h-[150px] border-2">
            <h2 className="text-3xl  font-medium tracking-wide ">
              Flexibility
            </h2>
            <progress
              className="progress progress-info mt-6"
              value="80"
              max="100"
            ></progress>
          </div>
          {/* Teamwork-container */}
          <div className="w-11/12 mx-auto p-6 min-h-[150px] border-2">
            <h2 className="text-3xl  font-medium tracking-wide ">Teamwork</h2>
            <progress
              className="progress progress-info mt-6"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
