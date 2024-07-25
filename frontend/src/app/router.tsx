import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import { Home } from "./pages/home.page";
import { Courses } from "./pages/courses/courses";
import { Pomodoro } from "./pages/pomodoro";
import { Flashcards } from "src/app/pages/flashcards/flachcards";
import { Parameters } from "./pages/parameters";
import { Logout } from "./pages/logout";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import Layout from "./pages/layout";
import {FlashcardsGroup} from "src/app/pages/flashcards/flashcardGroup";
import * as http from "./api";
import {FlashcardPresentation} from "src/app/pages/flashcards/id/page";
import {FlashcardPlayer} from "src/app/pages/flashcards/play/page";
import {Course} from "src/app/pages/courses/id/page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "courses",
				loader: async () => {
					const res = await http.get('v1/folders')
					return res.data.folders
				},
				element: <Courses />,
			},
			{
				path: "courses/:id",
				loader: async ({params}) => {
					const {id} =params;

					if(!id) redirect("*")
					const res = await http.get(`v1/folders/${id}`)
					console.log(res)
					return res.data.folder
				},
				element: <Course />,
			},
			{
				path: "pomodoro",
				element: <Pomodoro />,
			},
			{
				path: "flashcards",
				element: <Flashcards />,
			},
			{
				path: "flashcards/:id",
				loader: async ({params}) => {
					const {id} = params;
					if(!id) redirect("*");
					const response = await http.get(`v1/flashcards/${id}`)
					console.log(response)
					return response.data.flashcard
				},
				element: <FlashcardPresentation />,
			},
			{
				path: "flashcards/play/:groupId",
				loader: async ({params}) => {
					const {groupId} = params;
					if(!groupId) redirect("*");
					const response = await http.get(`v1/flashcards/group/${groupId}`)
					return response.data.group
				},
				element: <FlashcardPlayer />,
			},
			{
				path: "flashcards/group/:id",
				loader: async ({params}) => {
					const {id} = params;

					if(!id) redirect("*");
					const response = await http.get(`v1/flashcards/group/${id}`)
					return response.data.group
				},
				element: <FlashcardsGroup />,
			},
		],
	},

	{
		path: "parameters",
		element: <Parameters />,
	},
	{
		path: "logout",
		element: <Logout />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
]);

export default router