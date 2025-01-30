import React from "react";
import { useParams } from "react-router";
import useDataLoader from "../../Components/Hooks/useLoaderData";


const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project } = useDataLoader(`/project/${id}`, `/project, ${id}`);
  
  return (
    <div className="my-20 p-6">
      <div className="w-full md:w-4/5 mx-auto text-white shadow-lg rounded-lg overflow-hidden">
        {/* Card Image */}
        <div className="flex items-center justify-center">
          <img
            className="w-full max-h-[880px] object-fill object-center"
            src={project?.image}
            alt="image"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">{project?.name}</h2>

          {/* Description */}
          <p className=" mb-4">{project?.description}</p>

          {/* Challenges */}
          <h3 className="text-xl font-semibold mb-2">{project?.challenges}</h3>

          {/* Improvements */}
          <h3 className="text-xl font-semibold mb-2">
            {project?.improvements}
          </h3>
          {/* Links */}
          <div className="flex justify-between items-center mb-6">
            <a
              href={`${project?.githubLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Github Link
            </a>
            <a
              href={`${project?.liveLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Link
            </a>
          </div>
          {/* Links */}
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">Technologies :</p>
            <div className="flex justify-evenly items-center gap-3 flex-wrap">
              {project?.technologies?.map((tec, i) => (
                <h3
                  className="p-2 border-2 rounded-full flex-1 text-center"
                  key={i}
                >
                  {tec}
                </h3>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex items-start justify-between gap-4">
            <button className="btn btn-primary py-2 px-4 bg-highlight text-white rounded-lg hover:bg-blue-600 tracking-widest">
              Hire Me
            </button>
            <button className="btn btn-secondary py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 tracking-widest">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
