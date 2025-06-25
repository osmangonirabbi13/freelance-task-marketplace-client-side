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
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Components/Dashboard/Home/DashboardHome";
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
        path: "/browse-tasks",
        loader: () =>
          fetch(
            "https://assignment-10-server-side-dun-two.vercel.app/freelances"
          ),
        Component: BrowseTasks,
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

  {
    path: "/*",
    Component: ErrorPage,
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "home",
        Component: DashboardHome,
      },
      {
        path: "my-tasks",
        element: <MyPostTasks />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-dun-two.vercel.app/freelances"
          ),
        HydrateFallback: Loading,
      },
      {
        path: "browse-tasks/:id",
        element: <TaskDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-dun-two.vercel.app/freelances/${params.id}`
          ),
        HydrateFallback: Loading,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
    ],
  },
]);
