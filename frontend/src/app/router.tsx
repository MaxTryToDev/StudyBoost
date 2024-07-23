
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home.page";
import { Courses } from "./pages/courses";
import { Pomodoro } from "./pages/pomodoro";
import { Flashcards } from "./pages/flachcards";
import { Parameters } from "./pages/parameters";
import { Logout } from "./pages/logout";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import Layout from "./pages/layout";



const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/courses",
				element: <Courses />,
			},
			{
				path: "/pomodoro",
				element: <Pomodoro />,
			},
			{
				path: "/flachcards",
				element: <Flashcards />,
			},
			{
				path: "/parameters",
				element: <Parameters />,
			},
			{
				path: "/logout",
				element: <Logout />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);


export default router