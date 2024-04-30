import React from "react";
import Photo1 from "../../assets/photo1.jpeg";
import Photo2 from "../../assets/photo2.png";
import Photo3 from "../../assets/photo3.png";
import { Slide, Fade } from "react-awesome-reveal";
import { Link, NavLink } from 'react-router-dom'


const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Notes",
    desc: "Click to take notes",
    link: "/notes"
  },
  {
    id: 2,
    img: Photo2,
    title: "Previous Year Paper",
    desc: "The learning materials provided by the teacher and college",
    link: "/branchcard"
  },
  {
    id: 3,
    img: Photo3,
    title: "Study Material",
    desc: "The learning materials provided by the teacher and college",
    link: "/branchcard"
  },
];
const Card = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-4 sm:mt-0">
        Responsive Animated Card
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc, link }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className=" space-y-4">
                  <Slide cascade>
                    <h1 className=" text-wrap text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      <p className="text-wrap">{desc}</p>
                      {desc}
                    </Fade>
                    <div>
                      <button >
                      <Link
                            to={link}
                            className="text-black bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            View
                        </Link>
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;