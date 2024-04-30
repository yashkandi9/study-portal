import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
import Layout from './Layout.jsx'
import Github from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Todo from './components/Todo/Todo.jsx'
import List from './components/List.jsx'
import BranchCard from './components/Study_Material/BranchCard/BranchCard.jsx'
import Ccesem from './components/Study_Material/Sem/CCE_SEM/Ccesem.jsx'
import Csesem from './components/Study_Material/Sem/CSE_SEM/Csesem.jsx'
import Itsem from './components/Study_Material/Sem/IT_SEM/Itsem.jsx'
import CCEsemthreesub from './components/Study_Material/Sem/CCE_SEM/CCE_sem_three_sub/CCEsemthreesub.jsx'
import CCEoop from './components/Study_Material/Sem/CCE_SEM/CCE_sem_three_sub/CCEoop.jsx'
import CCEdsa from './components/Study_Material/Sem/CCE_SEM/CCE_sem_three_sub/CCEdsa.jsx'
import CCEdc from './components/Study_Material/Sem/CCE_SEM/CCE_sem_three_sub/CCEdc.jsx'
import Notes from './components/Notes/Notes.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      {/* <Route loader={githubInfoLoader} path='github' element={<Github />} /> */}
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='todo' element={<Todo />} />
      <Route path='list' element={<List />} />
      <Route path='branchcard' element={<BranchCard />} />
      <Route path='ccesem' element={<Ccesem />} />
      <Route path='csesem' element={<Csesem />} />
      <Route path='itsem' element={<Itsem />} />
      <Route path='ccesemthreesub' element={<CCEsemthreesub />} />
      <Route path='cceoop' element={<CCEoop />} />
      <Route path='ccedsa' element={<CCEdsa />} />
      <Route path='ccedc' element={<CCEdc />} />
      <Route path='notes' element={<Notes />} />
    </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)