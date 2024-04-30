import React, {useState} from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { Link, NavLink } from 'react-router-dom'
import List from '../../../../List'
// import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";




const CardsData = [
  {
    id: 1,
    title: "DSA",
    desc: "Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically.",
    link: "/CCEdsa"
  },
  {
    id: 2,
    title: "OOP",
    desc: "Object-oriented programming (OOP) is defined as a programming paradigm (and not a specific language) built on the concept of objects.",
    link: "/cceoop"
  },
  {
    id: 3,
    title: "DC",
    desc: "Data communication specifically refers to the process of using computing and communication technologies to transfer data (the message) from a sender to a receiver — or even back and forth between participating parties — or even back and forth between participating parties..",
    link: "/CCEdc"
  },
  // {
  //   id: 1,
  //   title: "DSA",
  //   desc: "Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically.",
  //   link: "/CCEdsa"
  // },
  // {
  //   id: 2,
  //   title: "OOP",
  //   desc: "Object-oriented programming (OOP) is defined as a programming paradigm (and not a specific language) built on the concept of objects.",
  //   link: "/cceoop"
  // },
  // {
  //   id: 3,
  //   title: "DC",
  //   desc: "Data communication specifically refers to the process of using computing and communication technologies to transfer data (the message) from a sender to a receiver — or even back and forth between participating parties — or even back and forth between participating parties..",
  //   link: "/CCEdc"
  // },
];

const CCEsemthreesub = () => {

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Responsive Animated Card
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, title, desc, link }) => {
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

export default CCEsemthreesub;