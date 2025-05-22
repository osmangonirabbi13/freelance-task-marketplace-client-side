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
import Loading from "../Pages/Loading";
import TaskDetails from "../Pages/TaskDetails";
import UpdateTask from "../Pages/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-dun-two.vercel.app/featured-tasks"
          ),
        HydrateFallback: Loading,
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
        loader: () =>
          fetch(
            "https://assignment-10-server-side-dun-two.vercel.app/freelances"
          ),
        Component: BrowseTasks,
        HydrateFallback: Loading,
      },
      {
        path: "browse-tasks/:id",
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-dun-two.vercel.app/freelances/${params.id}`
          ),
        HydrateFallback: Loading,
      },
      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyPostTasks />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-10-server-side-dun-two.vercel.app/freelances"
          ),
        HydrateFallback: Loading,
      },
      {
        path: "updatetask/:id",
        Component: UpdateTask,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-dun-two.vercel.app/freelances/${params.id}`
          ),
        HydrateFallback: Loading,
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
