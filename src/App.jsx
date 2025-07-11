import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";


function App() {


  const router = createBrowserRouter(routes, {
    basename: "/ejemplo"
  });

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
