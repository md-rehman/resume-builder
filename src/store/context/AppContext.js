import React, { createContext, useReducer } from "react";
import { AppContextReducer } from "../reducer/AppContextReducer";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const { children } = props;
	const initState = {
		activeView: "main",
		activeMainTheme: "dark",
		activeTemplate: "template3",
	};

	const [state, dispatch] = useReducer(AppContextReducer, initState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
