import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CharacterPage from "../pages/CharacterPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/characters",
		element: <CharacterPage />,
	},
	{
		path: "/characters/:id",
		element: <CharacterDetailPage />,
	},
]);
