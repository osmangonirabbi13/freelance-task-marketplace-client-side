import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTask from "../Pages/AddTask";
import MyPostTasks from "../Pages/MyPostTasks";
import BrowseTasks from "../Pages/BrowseTasks";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-tasks",
        Component: BrowseTasks,
      },
      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyPostTasks />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Login section

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
