import React, { useContext } from 'react';
import './ResumeBody.scss';
import { ResumeJSONContext } from '../../../store/context/ResumeJSON';

function ResumeBody() {
  const { state, dispatch } = useContext(ResumeJSONContext);

  const updateEntry = (key, value) => {
    dispatch({ type: 'UPDATE_ONE_VALUE', key, value })
  }

  const resumeBodyTemplate = () => {
    const mainSide = [];
    const subSide = [];
    
    state.body.map((section, index) => {
      if (section.mainSide) {
        return mainSide.push(sectionTypeIndentifier(section, index));
      }
      return subSide.push(sectionTypeIndentifier(section, index));
    })
    return <>
      <div className="mainSide">{ mainSide }</div>
      <div className="subSide">{ subSide }</div>
    </>
  }

  const sectionTypeIndentifier = (section, index) => {
    let key = "body["+index+"]";
    if (!section.isVisible) return null
    switch (section.type) {
      case "singleItemList":
        return singleItemListTemplate(section, key);
      case "multiItemList":
        return multiItemListTemplate(section, key);
      case "keyPoints":
        return keyPointsTemplate(section, key);
      default:
        return null;
    }
  }

  const listTemplate = (list, key) =>
    list.map((item, index) => <>
    <div className="item">
      <div className="icon">-</div>
      <div className="detail" contentEditable onBlur={ e => updateEntry(key + "[" + index + "]", e.currentTarget.textContent) }>
        {item}
      </div>
    </div>
    </>
  )

  const dateFormatter = (startDate, endDate) => {
    return <>{ startDate }{ startDate && endDate && " - " } { endDate }</>
  }

  const itemListBody = (body, priority, key) => <>
    <div className="header">
      <span className="main" contentEditable={body.header ? true : false } onBlur={ e => updateEntry(key+".header", e.currentTarget.textContent) }>
        { body?.header }
      </span>
      { (body.startDate || body.endDate) &&<span className="date">
        ({ dateFormatter(body.startDate, body.endDate) })
      </span>}
    </div>
    <div className="listHeader" contentEditable={ body.listHeader ? true : false } onBlur={ e => updateEntry(key + ".listHeader", e.currentTarget.textContent) }>
      { body?.listHeader }
    </div>
    { (body?.header && priority < 3 && (body.startDate || body.endDate)) &&
    <div className="listSubHeader">
      <div className="date">
        { dateFormatter(body.startDate, body.endDate) }
      </div>
      <div className="location">
        { body?.location }
      </div>
    </div>
    }
    <div className="summary">
      <div className="summary-name" contentEditable={ body.summary?.name ? true : false } onBlur={ e => updateEntry(key + ".summary.name", e.currentTarget.textContent) }>
        { body.summary?.name }
      </div>
      <div className="summary-list">
        { body.summary?.list && listTemplate(body.summary.list, key + ".summary.list") }
      </div>
    </div>
  </>

  const keyPointsBody = (point, priority, diableranking, key) => <>
    <div className={ "prority-" + (point.ranking && !diableranking ? point.ranking : priority) } contentEditable={ point.header ? true : false } onBlur={ e => updateEntry(key + ".header", e.currentTarget.textContent) }>
      { point.header }
    </div>
  </>

  const singleItemListTemplate = (section, key) => {
    console.log(key);
    
    return (
      <section className={ "singleItemList priority-" + section.priority }>
        <div className="name" contentEditable={ section.name ? true : false } onBlur={ e => updateEntry(key+".name", e.currentTarget.textContent) }>
          { section.name }
        </div>
        { itemListBody(section.value, section.priority, key+".value") }
      </section>
    )
  }


  const multiItemListTemplate = (section, key) => {
    return (
      <section className={ "multiItemListTemplate priority-" + section.priority }>
        <div className="name" contentEditable={ section.name ? true : false } onBlur={ e => updateEntry(key + ".name", e.currentTarget.textContent) }>
          { section.name }
        </div>
        { section.value.map(listItem => itemListBody(listItem, section.priority) ) }
      </section>
    )
  }

  const keyPointsTemplate = (section, key) => {
    return (
      <section className="keyPoints">
        <div className="name" contentEditable={ section.name ? true : false } onBlur={ e => updateEntry(key + ".name", e.currentTarget.textContent) }>
          { section.name }
        </div>
        <div className="pointList">
          { section.value.map((point, index) => keyPointsBody(point, section.priority, section.diableranking, key + ".value[" + index + "]")) }
        </div>
      </section>
    )
  }



  return (
    <>
      { resumeBodyTemplate() }
    </>
  );
}

export default ResumeBody;
