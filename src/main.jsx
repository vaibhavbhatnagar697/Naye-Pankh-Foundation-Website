import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Program from "./Pages/Program.jsx";
import Testimonial from "./Pages/Testimonial.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Home from "./Pages/Home.jsx";
import Event from "./Pages/Event.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Program",
        element: <Program />,
      },
      {
        path: "Event",
        element: <Event />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Testimonial",
        element: <Testimonial />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
