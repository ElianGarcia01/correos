import LayoutInicial from "../layouts/LayoutInicial";
import NotFound from "../layouts/NotFound";
import Inicio from "../pages/Inicio";
import Trabajadores from "../pages/Trabajadores";
import Estudiantes from "../pages/Estudiantes";


const routes = [
  {
    path: "/",
    element: <LayoutInicial />,
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: "trabajadores",
        element: <Trabajadores />,
      },
      {
        path: "estudiantes",
        element: <Estudiantes />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
