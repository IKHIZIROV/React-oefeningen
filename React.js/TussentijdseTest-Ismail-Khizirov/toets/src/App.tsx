import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Oefening1 from "./pages/Oefening1";
import Oefening2 from "./pages/Oefening2";
import Oefening3 from "./pages/Oefening3";
import DetailDuckie from "./pages/DetailDuckie";

function App() {

  const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "oefening1",
                    element: <Oefening1/>
                },
                {
                    path: "oefening2",
                    element: <Oefening2/>
                },
                {
                    path: "oefening3",
                    element: <Oefening3/>
                },
                {
                  path: "oefening2/:id",
                  element: <DetailDuckie/>
                }
            ]
        }
    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
