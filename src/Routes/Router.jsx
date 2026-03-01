import { createBrowserRouter } from "react-router"
import HomeLayout from "../Layout/HomeLayout"
import HomePage from "../Pages/HomePage"
import LeftAside from "../Componentes/HomePageComponte/LeftAside.jsx"
import RightAside from "../Componentes/HomePageComponte/RightAside.jsx"
import CategoryPage from "../Pages/CategoryPage.jsx"

const router = createBrowserRouter([
      {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                  {
                        path: "/",
                        element: <HomePage></HomePage>
                  },
                  {
                        path: "/category/:id",
                        element: <CategoryPage></CategoryPage>,
                        loader: () => fetch('/news.json')
                  }

            ]
      },
      {
            path: "/auth",
            element: <h3>welome auth</h3>,
      },
      {
            path: "/*",
            element: <h3>welome error</h3>,
      },
])

export default router