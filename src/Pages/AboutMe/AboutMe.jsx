import React from "react";
import BannerInfo from "../../Components/Shared/BannerInfo";
import bgImage from "../../assets/aboutMeBg.webp";
import image from "../../assets/bannerImage.jpg"

const AboutMe = () => {
  return (
    <div className="my-20">
      {/* banner-container */}
      <div>
        <BannerInfo
          title={"A Little About Myself"}
          subtitle={
            "I'm a passionate developer dedicated to creating innovative solutions. With expertise in [mention relevant fields or technologies], I enjoy tackling challenges and continuously learning to stay ahead in tech. My goal is to build meaningful projects that make a positive impact."
          }
          image={bgImage}
        />
      </div>
      <section className="py-12 px-4 flex flex-col-reverse md:flex-row gap-12">
        {/* Left Section */}
        <div className="sm:mb-8 md:mb-0 md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Hi, I'm MD. ABU NAYEM
          </h2>
          <p className="text-lg text-white mb-4">
            I'm a passionate web developer with a focus on creating
            user-friendly and interactive websites. I specialize in front-end
            technologies and enjoy solving complex problems.
          </p>

          {/* Struggle Story */}
          <div className="bg-highlight p-4 rounded-lg text-white shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">
              My Web Development Journey
            </h3>
            <p className="text-md">
              My journey into web development started with curiosity. In the
              beginning, the learning curve was steep, and I faced many
              challenges. I remember spending countless hours reading
              documentation and solving small problems that eventually added up.
              Despite the struggles, I never gave up. Each obstacle I faced made
              me more determined, and I eventually became proficient in various
              web technologies, from HTML/CSS to React.js and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="MD Abu Nayem"
            className="w-3/4 h-auto rounded-full shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
