import { createBrowserRouter } from "react-router-dom";
import Wiget from "../components/Wiget";
import ServiceList from "../components/ServiceList/ServiceList";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Wiget />,
    children: [
      {
        index: true,
        element: <ServiceList />
      },
      {
        path: ':id/details',
        element: <ServiceDetails />
      },
    ]
  }
])