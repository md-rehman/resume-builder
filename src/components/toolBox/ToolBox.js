import React, { useContext, useState } from 'react';
import './ToolBox.scss';
import { MdInfo, MdColorLens, MdCode, MdSettings, MdBrightness3, MdFlare, MdFormatPaint, MdViewCompact, MdDashboard, MdViewCarousel } from "react-icons/md";
import JsonEditor from './jsonEditor/JsonEditor';
import ThemeFormatter from './themeFormatter/ThemeFormatter';
import { AppContext } from '../../store/context/AppContext';
import { ResumeJSONContext } from '../../store/context/ResumeJSON';


function ToolBox() {
  const { state, dispatch } = useContext(AppContext);
  const resume = useContext(ResumeJSONContext);

  const updateTheme = (theme) => {
    dispatch({ type: 'UPDATE_THEME', theme })
  }
  const updateTemplate = (theme) => {
    dispatch({ type: 'UPDATE_TEMPLATE', theme })
  }

  const [activeTool, setActiveTool] = useState("ThemeFormatter");


  const templateList = [
    {
      name: "Sleek",
      class: "template1",
    },
    {
      name: "Modern",
      class: "template2",
    },
    {
      name: "Professional",
      class: "template3",
    },
  ]
  const templateTemplate = () => 
    templateList.map((item, inedx) => <>
      <div className="template-item">
        <div className="icon">{item.class}</div>
        <div className="detail">
          { item.name }
        </div>
      </div>
    </>
    )

  // const layoutList = resume.state.body.map(section => section.name);
  const layoutTemplate = () =>
    resume.state.body.map((item, index) => <>
      <div className="info-item">
        <div className="icon">-</div>
        <div className="detail">
          { item }
        </div>
      </div>
    </>
    )

  const infoList = [
    "Use Laptop or computer for better experience.",
    "If you're a developer, use JSON Editor for more precise editing.",
    "Keep the copy of JSON for future use.",
    "Downlaod feature is coming soon.",
    "Template Feature is coming soon"
  ]
  const infoTemplate = () =>
    infoList.map((item, index) => <>
      <div className="info-item">
        <div className="icon">-</div>
        <div className="detail">
          { item }
        </div>
      </div>
    </>
    )

  const activeToolIdentifier = () => {
    switch (activeTool) {
      case "Info":
        return infoTemplate()
      case "Template":
        return templateTemplate()
      case "Layout":
        return layoutTemplate()
      case "ThemeFormatter":
        return <ThemeFormatter />
      case "JsonEditor":
        return <JsonEditor />
      default:
        return <ThemeFormatter />
    }
  }

  return <>
    <div className="ToolBox">
      {activeToolIdentifier()}
    </div>
    <div className="Toolbar">
      <div className="icon" title="Information" onClick={ () => setActiveTool("Info") }>
        <MdInfo />
      </div>
      <div className="icon" title="Theme Formatter" onClick={ () => setActiveTool("ThemeFormatter") }>
        <MdColorLens />
      </div>
      {/* <div className="icon" title="Theme Formatter" onClick={ () => setActiveTool("ThemeFormatter") }>
        <MdFormatPaint />
      </div> */}
      <div className="icon" title="Template" onClick={ () => setActiveTool("Template") }>
        <MdViewCarousel />
      </div>
      <div className="icon" title="Layout" onClick={ () => setActiveTool("Layout") }>
        <MdDashboard />
      </div>
      <div className="icon" title="Json Editor" onClick={ () => setActiveTool("JsonEditor") }>
        <MdCode />
      </div>

      
      <div className="icon" title="Setting">
        <MdSettings />
      </div>
      {
        state.activeMainTheme === 'light' ? <div className="icon" title="Dark Theme" onClick={ () => updateTheme("dark") }><MdBrightness3 /></div> : <div className="icon" title="Light Theme" onClick={ () => updateTheme("light") }><MdFlare /></div>
      }
    </div>
  </>
}

export default ToolBox;