import { FaFacebook } from "react-icons/fa";
import bannerImage from "../../assets/bannerImage.jpg";
import GetResumeBtn from "../Shared/GetResumeBtn";
import { FaSquareGithub, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="w-full bg-[url('./assets/bg-shadow.png')] bg-cover bg-no-repeat min-h-[550px] flex flex-col md:flex-row items-center justify-between gap-5 mt-18">
      {/* left-container */}
      <div className="w-full mt-20 md:w-1/2 p-6 space-y-6 text-white ">
        <p className="text-5xl font-bold tracking-widest">
          <span className="font-semibold">Hello! </span>I'm
        </p>
        <h3 className="text-5xl font-bold tracking-wider">MD. ABU NAYEM</h3>
        <div className="text-3xl font-bold">
          <Typewriter
            options={{
              strings: ["Jr. Frontend ", "Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* button-container */}
        <div>
          <GetResumeBtn text={"Get Resume"} />
        </div>
        {/* social-link-container */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
          }}
          className="mt-6 flex items-center md:gap-3 lg:gap-12 p-2"
        >
          {/* motion-animation-div */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: "-150%",
              width: "150%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.1) 100%)",
              transform: "skewX(-30deg)",
              zIndex: 1,
            }}
            animate={{ left: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          {/* github */}
          <a
            href="https://github.com/ABUNAYEM7?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 border-2 rounded-xl text-highlight"
          >
            <FaSquareGithub size={30} />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/naeemislam.islam.399?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 border-2 rounded-xl text-highlight"
          >
            <FaFacebook size={30} />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/MOHAMMADAB31922"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 border-2 rounded-xl text-highlight"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
      {/* right-container */}
      <div
        className="w-full md:w-1/2 p-6 flex items-center justify-center
      "
      >
        <img
          className="max-w-[300px] rounded-full "
          src={bannerImage}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Banner;
