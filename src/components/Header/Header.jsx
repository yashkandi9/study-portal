import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {auth} from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [isAuthenticated, setAuthenticated] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(user.displayName)
            } else {
                setAuthenticated("");
            }
        })
    }, [])

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const handleSubmission = () => {
        setErrorMsg("")
        // console.log(values);
        signOut(auth)
        .then(async() => {
            navigate('/')
        })
        .catch(err => {
            setErrorMsg(err.message);
            // console.log("Error-", err)});
        })
    }


    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12 bg-white"
                            alt="Logo"
                        />
                    </Link>
                    <div   className="flex items-center lg:order-2" >
                    <h2>{isAuthenticated!="" ? <div> 
                    <b className='errormsg'>{errorMsg}</b>
                    <button onClick={handleSubmission}>Logout</button>
                    </div> : <div>
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>}</h2>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="block text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Menu
                        </button>
                    </div>
                    <div
                        className={`${
                            menuOpen ? 'block' : 'hidden'
                        } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    className="text-base leading-block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="text-base leading-block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="text-base leading-block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/todo"
                                    className="text-base leading-block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                >
                                    To-do
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
// export default function Header() {
//     const [isAuthenticated, setAuthenticated] = useState("");
//     useEffect(() => {
//         auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setAuthenticated(user.displayName)
//             } else {
//                 setAuthenticated("");
//             }
//         })
//     }, [])

//     const navigate = useNavigate();
//     const [errorMsg, setErrorMsg] = useState("");
//     const handleSubmission = () => {
//         setErrorMsg("")
//         // console.log(values);
//         signOut(auth)
//         .then(async() => {
//             navigate('/')
//         })
//         .catch(err => {
//             setErrorMsg(err.message);
//             // console.log("Error-", err)});
//         })
//     }



//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             // src="https://w7.pngwing.com/pngs/227/659/png-transparent-computer-icons-education-school-graduation-cap-angle-rectangle-orange.png"
//                             src={logo}
//                             className="mr-3 h-12 bg-white"
//                             alt="Logo"
//                         />
//                     </Link>
                    // <div   className="flex items-center lg:order-2" >
                    // <h2>{isAuthenticated!="" ? <div> 
                    // <b className='errormsg'>{errorMsg}</b>
                    // <button onClick={handleSubmission}>Logout</button>
                    // </div> : <div>
                    //     <Link
                    //         to="/login"
                    //         className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    //     >
                    //         Log in
                    //     </Link>
                    //     <Link
                    //         to="/signup"
                    //         className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    //     >
                    //         Sign Up
                    //     </Link>
                    // </div>}</h2>
                    // </div>

//                     {/* <div className="flex items-center lg:order-2">
//                         <Link
//                             to="/login"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="/signup"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Sign Up
//                         </Link>
//                     </div> */}
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) => `text-base leading-
//                                         block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/about"
//                                     className={({ isActive }) => `text-base leading-
//                                         block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/contact"
//                                     className={({ isActive }) => `text-base leading-
//                                         block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             {/* <li>
//                                 <NavLink
//                                     to="/github"
//                                     className={({isActive}) => `text-base leading-
//                                         block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li> */}
//                             <li>
//                                 <NavLink
//                                     to="/todo"
//                                     className={({ isActive }) => `text-base leading-
//                                         block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     To-do
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


