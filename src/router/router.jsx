import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { HotelDetails } from "../pages/HotelDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/hotel/:id",
    element: <HotelDetails />,
  },
]);
