import React, { useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { Link, NavLink } from 'react-router-dom'
// import List from '../List'
// import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";




const CardsData = [
  {
    id: 1,
    title: "Sem 1",
    desc: "First Semester.",
    desc2:" Subjects - Physics, etc.",
    link: "/ccesemonesub"
  },
  {
    id: 2,
    title: "Sem 2",
    desc: "Second Semester. ",
    desc2:" Subjects - Chemistry , etc.",
    link: "/ccesemtwosub"
  },
  {
    id: 3,
    title: "Sem 3",
    desc: "Thrid Semester. ",
    desc2:"Subjects - DSA, DC, OOP, etc.",
    link: "/ccesemthreesub"
  },
];

const Ccesem = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Responsive Animated Card
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc, desc2, link }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <div>
                <h1 className="text-black m-5">{title}</h1>
              </div>
              <div>
                <p className="text-black m-5 text-wrap">
                  {desc}
                </p>
                <p className="text-black m-5 text-wrap">
                  {desc2}
                </p>
              </div>
              <div>
              <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                <Link to={link}>
                  VIEW
                </Link>
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ccesem;