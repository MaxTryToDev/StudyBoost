import React from 'react';
import './globals.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router';
import ReactDOM from "react-dom/client";
import reportWebVitals from 'src/reportWebVitals';
<<<<<<< Updated upstream
import {AppContextProvider} from "./app/contexts/AppContext";
import {Toast} from "./ui/Toast/Toast"
=======
import {AppContextProvider} from "@/src/app/contexts/AppContext";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

function App() {
  return <RouterProvider router={router}/>;
}


root.render(
	<React.StrictMode>
		<AppContextProvider>
			<RouterProvider router={router} />
<<<<<<< Updated upstream
			<Toast/>
=======
>>>>>>> Stashed changes
		</AppContextProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();