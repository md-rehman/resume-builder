import React, { useContext } from "react";
import "./App.scss";
import Viewer from "./components/viewer/Viewer";
import Header from "./components/global/header/Header";
import { ResumeJSONProvider } from "./store/context/ResumeJSON";
import NavMain from "./components/global/nav/NavMain";
import Footer from "./components/global/footer/Footer";
import ToolBox from "./components/toolBox/ToolBox";
import { AppContext } from "./store/context/AppContext";
import Page from "./components/viewer/page/Page";

function App() {
	const { state } = useContext(AppContext);

	const mainTemplate = () => (
		<>
			<div className={"background-main " + state.activeMainTheme}></div>
			<div className="Header-wrapper">
				<Header />
			</div>
			{/* <div className="NavMain-wrapper">
          <NavMain />
        </div> */}
			<main>
				<div className="background-shine obtuse"></div>
				<div className="background-shine acute"></div>
				<div className="Viewer-wrapper">
					<Viewer />
				</div>
				<div className="ToolBox-wrapper">
					<ToolBox />
				</div>
			</main>
			<div className="Header-wrapper">
				<Footer />
			</div>
		</>
	);

	const printViewTemplate = () => (
		<>
			<Page />
		</>
	);

	const TemplateSetter = () => {
		switch (state.activeView) {
			case "main":
				return mainTemplate();
			case "printView":
				return printViewTemplate();
			default:
				return mainTemplate();
		}
	};

	return TemplateSetter();
}

export default App;
