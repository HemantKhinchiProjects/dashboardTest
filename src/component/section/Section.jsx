import React from "react";
import { useState } from "react";
import { companys } from "../../data";
import { HiCheck } from "react-icons/hi";
// import FDPortfolioGraph from "../fdportfolio/FDPortfolio";

export default function Section() {
  function getBackgroundColorClass(title) {
    const titleHash = title
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const backgroundColors = [
      "bg-red-200",
      "bg-blue-200",
      "bg-gray-200",
      "bg-purple-50",
    ];
    return backgroundColors[titleHash % backgroundColors.length];
  }

  return (
    <div className="container mx-auto">
      <div className="py-4">
        <h1 className="text-3xl font-bold mb-4">Welcome, John Doe</h1>
        {/* <FDPortfolioGraph /> */}
        <ul className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {Object.values(companys).map((company, index) => (
            <li
              key={index}
              className={`border-4 border-white border-solid rounded-lg shadow p-6 card-container ${getBackgroundColorClass(company.title)}`}
            >
              <div className=" ">
                <h2 className="flex items-center text-xl font-semibold mb-4">
                  <img
                    src={company.image}
                    alt={company.image}
                    className="w-12 h-12 mr-4"
                  />
                  {company.title}
                </h2>
                <div className="flex items-center mb-4 justify-between">
                  <div className="bg-purple-200 flex items-center p-2 rounded-lg text-black">
                    <HiCheck className="w-4 h-4 mr-1 bg-purple-800 rounded-full text-white" />
                    {company.descriptionOne}
                  </div>
                  <div className="bg-purple-200 flex items-center p-2 rounded-lg text-black">
                    <HiCheck className="w-4 h-4 mr-1 bg-purple-800 rounded-full text-white" />
                    {company.descriptionTne}
                  </div>
                </div>
                <div className="flex justify-between justify-center">
                  <div>
                    <span>
                      <p className="text-gray-600 mb-1 text-sm">
                        Interest Upto
                      </p>
                    </span>
                    <span className="font-bold text-black">
                      {company.intreast}% p.a
                    </span>
                  </div>

                  <button className="bg-purple-900 text-white rounded-lg px-6 py-2 mt-4">
                    Book Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 w-full full flex overflow-x-hidden">
        {/* <Slider /> */}
      </div>
    </div>
  );
}
