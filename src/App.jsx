import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./components/home/home";
import UserItem from "./components/home/user/user";
import Test from "./components/test";
// import Home from "./components/home";
function Root() {
  return (
    <div>
      <div className="col-12 md:pl-[80px] flex flex-col w-[100%] overflow-hidden ">
        <Header />
        <div className="flex flex-col">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Đường dẫn gốc
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user",
          element: <UserItem />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
