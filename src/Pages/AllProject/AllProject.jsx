import React from "react";
import useDataLoader from "../../Components/Hooks/useLoaderData";
import HeadingInfo from "../../Components/Shared/HeadingInfo";
import { useNavigate } from "react-router";
import {motion} from "framer-motion"

const AllProject = () => {
  const { data } = useDataLoader("/projects", "/projects");

  const navigate = useNavigate();

  // detailsHandler
  const detailsHandler = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <div className="my-20 p-6">
      {/* header-title-container */}
      <div>
        <HeadingInfo
          title={"Explore My Projects"}
          subtitle={
            "Discover a collection of my projects that highlight my skills in web development, design, and problem-solving. Each project is a reflection of my dedication to delivering high-quality, user-centered solutions, whether through creative design or efficient coding. Dive into the details of my work to see how I tackle challenges and create impactful, functional digital experiences."
          }
        />
      </div>
      {/* card-container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {data?.map((project) => (
          <div
            style={{
              position: "relative",
              backgroundColor: "#2c3e50",
              color: "#ecf0f1",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              zIndex: 1,
            }}
            className="mt-12 card max-w-[300px] bg-base-100 shadow-xl border-2"
          >
            <figure className="px-10 pt-10">
              <img
                src={project?.image}
                alt={project?.name}
                className="rounded-xl h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{project?.name}</h2>
              <p>{project?.description.slice(0, 80)}..</p>
              <div className="card-actions">
                <button
                  onClick={() => detailsHandler(project._id)}
                  className="btn bg-highlight text-white border-none"
                >
                  View Details
                </button>
              </div>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
