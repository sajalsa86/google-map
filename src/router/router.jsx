import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import GoogleMap from "../components/googleMap/GoogleMap";
import SharedMap from "../components/googleMap/SharedMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/googleMap",
        element: <GoogleMap></GoogleMap>,
      },
      {
        path: "/sharedMap",
        element: <SharedMap></SharedMap>,
      },
    ],
  },
]);
export default router;
