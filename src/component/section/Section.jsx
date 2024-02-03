// import "./section.css";
import { useState } from "react";
import React from "react";
// import cardImage from "../assets/Group2252.png";
import { Companys } from "../../data";
import { HiCheck } from "react-icons/hi";
export default function Section() {
  const [details, setdetails] = useState(Companys);
  return (
    <main className="bg-slate-50">
      <div className="container">
        <div className="py-4 px-12 mx-4">
          <h1 className="text-3xl font-bold mb-1">Welcome, John Doe</h1>
          <ul className="cards grid grid-cols-3 gap-4">
            <li className="card-container">
              <div className="border-4 border-white border-solid rounded-lg shadow p-6 bg-purple-50">
                <h2 className="flex items-center text-xl font-semibold mb-4">
                  {details.image}
                  {details.title}
                  {/* Utkarsh Small Finance Bank */}
                </h2>
                <div className="flex items-center mb-4 justify-between">
                  <div className="bg-purple-200 flex items-center p-2 rounded-lg text-black">
                    <HiCheck className="w-4 h-4 mr-1 bg-purple-800 rounded-full text-white" />
                    Highest Interest Rate
                  </div>
                  <div className="bg-purple-200 flex items-center p-2 rounded-lg text-black">
                    <HiCheck className="w-4 h-4 mr-1 bg-purple-800 rounded-full text-white" />
                    RBI Insured
                  </div>
                </div>
                <div className="flex justify-between justify-center">
                  <div>
                    <span>
                      <p className="text-gray-600 mb-1 text-sm">
                        Interest Upto
                      </p>
                    </span>
                    <span className="font-bold text-black">9.10% p.a</span>
                  </div>

                  <button className="bg-purple-900 text-white rounded-lg px-6 py-2 mt-4">
                    Book Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
