import React, { useContext, useState } from "react";
import "./ToolBox.scss";
import {
	MdInfo,
	MdColorLens,
	MdCode,
	MdSettings,
	MdBrightness3,
	MdFlare,
	MdFormatPaint,
	MdViewCompact,
	MdDashboard,
	MdViewCarousel,
} from "react-icons/md";
import JsonEditor from "./jsonEditor/JsonEditor";
import ThemeFormatter from "./themeFormatter/ThemeFormatter";
import { AppContext } from "../../store/context/AppContext";
import { ResumeJSONContext } from "../../store/context/ResumeJSON";
import template1 from "../../assets/template1.png";
import template2 from "../../assets/template2.png";
import LayoutModifier from "./layout/layoutModifier";
import Settings from "./settings/Settings";

function ToolBox() {
	const { state, dispatch } = useContext(AppContext);
	const resume = useContext(ResumeJSONContext);

	const updateTheme = (theme) => {
		dispatch({ type: "UPDATE_THEME", theme });
	};
	const updateTemplate = (template) => {
		dispatch({ type: "UPDATE_TEMPLATE", template });
	};

	const [activeTool, setActiveTool] = useState("Settings");

	const templateList = [
		{
			name: "Sleek",
			class: "template1",
			img: template1,
		},
		{
			name: "Sleek - Minimal",
			class: "template2",
			img: template2,
		},
		{
			name: "Sleek - Classic",
			class: "template3",
			img: template2,
		},
		{
			name: "Sleek - Evolved",
			class: "template4",
			img: template2,
		},
		// {
		//   name: "Modern",
		//   class: "template7",
		// },
		// {
		//   name: "Professional",
		//   class: "template8",
		// },
	];
	const templateTemplate = () =>
		templateList.map((item, inedx) => (
			<>
				<div
					className="template-item"
					onClick={(e) => updateTemplate(item.class)}
				>
					<div className="icon">
						<img src={item.img} alt={item.name} />
					</div>
					<div className="detail">{item.name}</div>
				</div>
			</>
		));

	// const layoutTemplate = () =>
	//   resume.state.body.map((item, index) => <>
	//     <div className="layout-item">
	//       <div className="icon">-</div>
	//       <div className="detail">
	//         { item.name }
	//       </div>
	//     </div>
	//   </>
	//   )

	const infoList = [
		"Use Laptop or computer for better experience.",
		"If you're a developer, use JSON Editor for more precise editing.",
		"Keep the copy of JSON for future use.",
		"Layout Formatter Feature is under developement",
		"Planning to make v2 for this, with many new features and much better UX. Please do share (my contact details are on my resume) what feature you all need. ",
	];
	const infoTemplate = () =>
		infoList.map((item, index) => (
			<>
				<div className="info-item">
					<div className="icon">-</div>
					<div className="detail">{item}</div>
				</div>
			</>
		));

	const activeToolIdentifier = () => {
		switch (activeTool) {
			case "Info":
				return infoTemplate();
			case "Template":
				return <div className="template-wrapper">{templateTemplate()}</div>;
			case "Layout":
				return <LayoutModifier />;
			case "ThemeFormatter":
				return <ThemeFormatter />;
			case "JsonEditor":
				return <JsonEditor />;
			case "Settings":
				return <Settings />;
			default:
				return <Settings />;
		}
	};

	return (
		<>
			<div className="ToolBox">{activeToolIdentifier()}</div>
			<div className="Toolbar">
				<div
					className={"icon " + (activeTool === "Info" ? "active" : "")}
					title="Information"
					onClick={() => setActiveTool("Info")}
				>
					<MdInfo />
				</div>
				{/* <div
					className={
						"icon " + (activeTool === "ThemeFormatter" ? "active" : "")
					}
					title="Theme Formatter"
					onClick={() => setActiveTool("ThemeFormatter")}
				>
					<MdColorLens />
				</div> */}
				{/* <div className="icon" title="Theme Formatter" onClick={ () => setActiveTool("ThemeFormatter") }>
        <MdFormatPaint />
      </div> */}
				<div
					className={"icon " + (activeTool === "Template" ? "active" : "")}
					title="Template"
					onClick={() => setActiveTool("Template")}
				>
					<MdViewCarousel />
				</div>
				{/* <div className={ "icon " + (activeTool === 'Layout' ? 'active' : '' ) } title="Layout" onClick={ () => setActiveTool("Layout") }>
        <MdDashboard />
      </div> */}
				<div
					className={"icon " + (activeTool === "JsonEditor" ? "active" : "")}
					title="Json Editor"
					onClick={() => setActiveTool("JsonEditor")}
				>
					<MdCode />
				</div>

				<div
					className={"icon " + (activeTool === "Settings" ? "active" : "")}
					title="Setting"
					onClick={() => setActiveTool("Settings")}
				>
					<MdSettings />
				</div>
				{state.activeMainTheme === "light" ? (
					<div
						className="icon"
						title="Dark Theme"
						onClick={() => updateTheme("dark")}
					>
						<MdBrightness3 />
					</div>
				) : (
					<div
						className="icon"
						title="Light Theme"
						onClick={() => updateTheme("light")}
					>
						<MdFlare />
					</div>
				)}
			</div>
		</>
	);
}

export default ToolBox;
