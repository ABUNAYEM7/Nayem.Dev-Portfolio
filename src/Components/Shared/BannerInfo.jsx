import React from "react";

const BannerInfo = ({  title, subtitle ,image }) => {
  return (
    <div
      className="relative min-h-[400px] bg-cover bg-center flex items-center justify-center text-center rounded-xl "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-4/5  mx-auto bg-white bg-opacity-50  h-full flex items-center justify-center p-4 rounded-xl">
        <div className="text-black px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
