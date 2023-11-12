import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageSimpleForm } from "./pages/PageSimpleForm.tsx";
import { PageEmployees } from "./pages/PageEmployees.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/simple-form",
				element: <PageSimpleForm />,
			},
			{
				path: "employees",
				element: <PageEmployees />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/simple-form" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
