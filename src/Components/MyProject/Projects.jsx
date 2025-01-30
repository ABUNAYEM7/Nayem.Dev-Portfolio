import React from "react";
import HeadingInfo from "../Shared/HeadingInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import useDataLoader from "../Hooks/useLoaderData";
import { useNavigate } from "react-router";
import { details } from "framer-motion/client";

const Projects = () => {
  const { data } = useDataLoader("/projects", "/projects");
  const navigate = useNavigate()

  // detailsHandler
  const detailsHandler =(id)=>{
    navigate(`/project/${id}`)
  }

  return (
    <div className="my-12 p-6 ">
      {/* header-title container */}
      <div>
        <HeadingInfo
          title={"My Work Showcase"}
          subtitle={
            "Explore a selection of projects that demonstrate my skills and creativity. Each one reflects my commitment to delivering functional, user-focused solutions with attention to both design and performance. Dive in to see how I bring ideas to life through thoughtful development."
          }
        />
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data?.map((project) => (
            <SwiperSlide key={project._id}>
              <div className="flex justify-center items-center mt-12">
                <div className="relative max-w-[650px] min-h-[620px] overflow-hidden rounded-lg shadow-lg group">
                  {/* Image */}
                  <img
                    src={project?.image}
                    alt="Card"
                    className="w-full min-h-[610px] object-cover object-center p-4"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold mb-4">
                      {project?.name}
                    </h3>
                    {/* Button */}
                    <button 
                    onClick={()=> detailsHandler(project._id)}
                    className="btn bg-highlight text-white hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
