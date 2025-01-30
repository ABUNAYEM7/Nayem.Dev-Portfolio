import { FaSquareGithub, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.webp";
import { footer } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className=" bg-neutral">
      <div className="footer  items-center justify-center md:justify-between p-4">
        <aside className="grid-flow-col items-center">
          <img className="w-20 h-20 rounded-xl" src={logo} alt="logo" />
          <p className="text-3xl from-black text-white">Code By Nayem</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 ">
            {/* github */}
            <a
              style={{
                position: "relative",
                backgroundColor: "#2c3e50",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                zIndex: 1,
              }}
              href="https://github.com/ABUNAYEM7?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border-2 rounded-xl text-highlight"
            >
              <FaSquareGithub size={30} />
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
            </a>
            {/* Facebook */}
            <a
              style={{
                position: "relative",
                backgroundColor: "#2c3e50",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                zIndex: 1,
              }}
              href="https://www.facebook.com/naeemislam.islam.399?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border-2 rounded-xl text-highlight"
            >
              <FaFacebook size={30} />
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
            </a>
            {/* Twitter */}
            <a
              style={{
                position: "relative",
                backgroundColor: "#2c3e50",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                zIndex: 1,
              }}
              href="https://x.com/MOHAMMADAB31922"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border-2 rounded-xl text-highlight"
            >
              <FaTwitter size={30} />
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
            </a>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center p-4">
        <aside>
          <p className="text-white text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
