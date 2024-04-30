import React, {useState} from "react";
// import Cce from '../../../assets/cce.jpeg';
// import Cse from '../../../assets/cse.jpeg';
// import It from '../../../assets/it.jpg';
import { Slide, Fade } from "react-awesome-reveal";
import { Link, NavLink } from 'react-router-dom'
import List from '../../List'
// import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";




const CardsData = [
  {
    id: 1,
    // img: Cce,
    title: "CCE",
    desc: "B. Tech. in Computer and Communication Engineering",
    link: "/ccesem"
  },
  {
    id: 2,
    // img: Cse,
    title: "CSE",
    desc: "B. Tech. in Computer Science Engineering",
    link: "/csesem"
  },
  {
    id: 3,
    // img: It,
    title: "IT",
    desc: "B. Tech. in Information Technology",
    link: "/itsem"
  },
];

const BranchCard = () => {

  const auth = getAuth();
const [login, setLogin] = useState(false);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    setLogin(true);
    // const uid = user.uid;
  } else {
    setLogin(false);
    // User is signed out
  }
});

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
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
              <div>
                <h1 className="text-black m-5">{title}</h1>
              </div>
              <div>
                <p className="text-black m-5">
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
      <div>
        {login && <List />}
      </div>
    </div>
  );
};

export default BranchCard;