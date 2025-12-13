import { Course } from "./app/course";
import { Home } from "./app/home";
import { Layout } from "./app/layout";
import { SignIn } from "./app/sign-in";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/entrar",
        Component: SignIn,
      },
      {
        path: "/curso/:slug",
        Component: Course,
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Home,
//   },
//   {
//     path: "/entrar",
//     Component: SignIn,
//   },
// ]);
