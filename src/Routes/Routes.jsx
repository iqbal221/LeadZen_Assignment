import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import ShowDetails from "../pages/Home/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/detail",
        element: <Details></Details>,
      },
      {
        path: "/contact_details/:id",
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);
