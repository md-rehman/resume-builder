import React, { useContext, useState } from 'react';
import './ToolBox.scss';
import { MdInfo, MdColorLens, MdCode, MdSettings, MdBrightness3, MdBrightness5, MdFormatPaint, MdViewCompact } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import JsonEditor from './jsonEditor/JsonEditor';
import ThemeFormatter from './themeFormatter/ThemeFormatter';
import { AppContext } from '../../store/context/AppContext';


function ToolBox() {
  const { state, dispatch } = useContext(AppContext);

  const updateTheme = (theme) => {
    dispatch({ type: 'UPDATE_THEME', theme })
  }

  const [activeTool, setActiveTool] = useState("ThemeFormatter");


  const infoList = [
    "Use Laptop or computer for better experience.",
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
      <div className="icon" onClick={ () => setActiveTool("Info") }>
        <MdInfo />
      </div>
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
      {
        state.activeMainTheme == 'light' ? <div className="icon" onClick={ () => updateTheme("dark") }><MdBrightness3 /></div> : <div className="icon" onClick={ () => updateTheme("light") }><MdBrightness5 /></div>
      }
    </div>
  </>
}

export default ToolBox;