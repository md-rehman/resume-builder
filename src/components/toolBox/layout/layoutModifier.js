import React, { useContext, useState } from 'react';
import './layoutModifier.scss';
import { ResumeJSONContext } from '../../../store/context/ResumeJSON';


function LayoutModifier() {
  const resume = useContext(ResumeJSONContext);

  const [draggingI, setDraggingI] = useState(null);
  const [target, setTarget] = useState(null);

  const mainListTemplate = []
  const sideListTemplate = []
  const invisibleListTemplate = []

  const dragStartHandler = (e, sectionI) => {
    setDraggingI(sectionI);
  }
  const dragEnterHandler = (e, sectionI) => {
    e.stopPropagation();
    setTarget(sectionI)
  }
  const dragEndHandler = (e, sectionI) => {
    if (draggingI !== target) {
      switch (target) {
        case 'main':
          resume.dispatch({ type: 'UPDATE_ONE_VALUE', key: `body[${draggingI}].mainSide`, value: true })
          resume.dispatch({ type: 'UPDATE_ONE_VALUE', key: `body[${draggingI}].isVisible`, value: true })
          break;
        case 'side':
          resume.dispatch({ type: 'UPDATE_ONE_VALUE', key: `body[${draggingI}].mainSide`, value: false })
          resume.dispatch({ type: 'UPDATE_ONE_VALUE', key: `body[${draggingI}].isVisible`, value: true })
          break;
        case 'invisble':
          resume.dispatch({ type: 'UPDATE_ONE_VALUE', key: `body[${draggingI}].isVisible`, value: false })
          break;
        default:
          resume.dispatch({ type: 'SWAP_SECTION', draggingI, target })
          break;
      }
    }
  }
  
  const dragEnterGroupHandler = (e, group) => {
    setTarget(group)
  }

  const layoutTemplate = (type, section, sectionI) => {
    return <div className={ "layout-item" } draggable onDragStart={ e => dragStartHandler(e, sectionI) } onDragEnter={ e => dragEnterHandler(e, sectionI) } onDragEnd={ e => dragEndHandler(e, sectionI) }>
      <div className="detail">
        { section.name }
      </div>
    </div>
  }

  const layoutTemplateSelector = () => {
    resume.state.body.map((section, sectionI) => {
      if (!section.isVisible) {
        invisibleListTemplate.push(layoutTemplate('invisible', section, sectionI))
      } else {
        if (section.mainSide) {
          mainListTemplate.push(layoutTemplate('main', section, sectionI))
        } else {
          sideListTemplate.push(layoutTemplate('side', section, sectionI))
        }
      }
    })
  }
  layoutTemplateSelector();

  return <>
  <div className="layout-lists">
    <div className="layout-item-list main" onDragEnter={ (e) => dragEnterGroupHandler(e, 'main') }>
      <div className="list-header">
        Main Sections
      </div>
      { mainListTemplate }
    </div>
    <div className="layout-item-list side" onDragEnter={ (e) => dragEnterGroupHandler(e, 'side') }>
      <div className="list-header">
        Side Sections
      </div>
      { sideListTemplate }
    </div>
    <div className="layout-item-list invisible" onDragEnter={ (e) => dragEnterGroupHandler(e, 'invisble') }>
      <div className="list-header">
        Hidden Sections
      </div>
      { invisibleListTemplate }
    </div>
  </div>
  </>
}

export default LayoutModifier;