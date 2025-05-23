import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'
import Rout from './rout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { Githubinfoloader } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Rout/>,
//     children:[
//       {
//         index: true,
//         element:<Home/>
//       },

//       {
//         path:"about",
//         element :<About/>
//       },

//       {
//         path:"contact",
//         element:<Contact />
//       }

//     ]

//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='Github'loader={Githubinfoloader} element={<Github/>} />


    </Route>
  )
)







createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
