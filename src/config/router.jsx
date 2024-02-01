import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
