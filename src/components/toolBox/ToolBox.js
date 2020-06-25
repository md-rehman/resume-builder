import React, { useContext, useState } from 'react';
import './ToolBox.scss';
import { MdColorLens, MdCode, MdSettings, MdBrightness3, MdBrightness5, MdFormatPaint, MdViewCompact } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import JsonEditor from './jsonEditor/JsonEditor';
import ThemeFormatter from './themeFormatter/ThemeFormatter';


function ToolBox() {
  // const { state, dispatch } = useContext(ResumeJSONContext);
  const [activeTool, setActiveTool] = useState("ThemeFormatter")

  const activeToolIdentifier = () => {
    switch (activeTool) {
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
      <div className="icon" onClick={ () => setActiveTool("ThemeFormatter") }>
        <MdColorLens />
      </div>
      <div className="icon" onClick={ () => setActiveTool("ThemeFormatter") }>
        <MdFormatPaint />
      </div>
      <div className="icon" onClick={ () => setActiveTool("JsonEditor") }>
        <FaCode />
      </div>
      <div className="icon" onClick={ () => setActiveTool("JsonEditor") }>
        <MdViewCompact />
      </div>
      
      <div className="icon">
        <MdSettings />
      </div>
      <div className="icon">
        <MdBrightness3 />
      </div>
      <div className="icon">
        <MdBrightness5 />
      </div>
      
    </div>
  </>
}

export default ToolBox;