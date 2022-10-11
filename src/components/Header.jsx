import React from "react";
import Banner from "../assets/Business_SVG.svg";

const Header = () => {
  return (
    <div>
      <section className="text-gray-800 bg-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl font-bold leading-tight text-4xl">
              Test yourself <br />
              <span className="text-primary">WebQuiz</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Web development is a huge part of our society. If you want to be
              well-known throughout the world then you should probably develop
              your own website or a web page. We will test your knowledge on
              this matter. Can you face all these questions?
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a 
                href="#all-topic"
                className="px-8 py-3 text-lg font-semibold rounded text-base-100 bg-accent hover:bg-primary"
              >
                Test Yourself
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
