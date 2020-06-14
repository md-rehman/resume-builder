import React from 'react';
import './ResumeBody.scss';

function ResumeBody({data}) {


  const resumeBodyTemplate = () => {
    let mainSide = [];
    let subSide = [];
    
    data.map(section => {
      if (section.mainSide) {
        return mainSide.push(sectionTypeIndentifier(section));
      }
      return subSide.push(sectionTypeIndentifier(section));
    })
    return <>
      <div className="mainSide">{ mainSide }</div>
      <div className="subSide">{ subSide }</div>
    </>
  }

  const sectionTypeIndentifier = (section) => {
    if (!section.isVisible) return null
    switch (section.type) {
      case "singleItemList":
        return singleItemListTemplate(section);
      case "multiItemList":
        return multiItemListTemplate(section);
      case "keyPoints":
        return keyPointsTemplate(section);
      default:
        return null;
    }
  }

  const listTemplate = list =>
    list.map(item => <>
    <div className="item">
      <div className="icon">-</div>
      <div className="detail">
        {item}
      </div>
    </div>
    </>
  )

  const dateFormatter = (startDate, endDate) => {
    return <>{ startDate }{ startDate && endDate && " - " } { endDate }</>
  }

  const itemListBody = (body, priority) => <>
    <div className="header">
      <span className="main">
        { body?.header }
      </span>
      { (body.startDate || body.endDate) &&<span className="date">
        ({ dateFormatter(body.startDate, body.endDate) })
      </span>}
    </div>
    <div className="listHeader">
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
      <div className="summary-name">
        { body.summary?.name }
      </div>
      <div className="summary-list">
        { body.summary?.list && listTemplate(body.summary.list) }
      </div>
    </div>
  </>

  const keyPointsBody = (point, priority, diableranking) => <>
    <div className={ "prority-" + (point.ranking && !diableranking ? point.ranking : priority) }>
      { point.header }
    </div>
  </>

  const singleItemListTemplate = (section) => {
    return (
      <section className={ "singleItemList priority-" + section.priority }>
        <div className="name">
          { section.name }
        </div>
        { itemListBody(section.value, section.priority) }
      </section>
    )
  }


  const multiItemListTemplate = (section) => {
    return (
      <section className={ "multiItemListTemplate priority-" + section.priority }>
        <div className="name">
          { section.name }
        </div>
        { section.value.map(listItem => itemListBody(listItem, section.priority) ) }
      </section>
    )
  }

  const keyPointsTemplate = (section) => {
    return (
      <section className="keyPoints">
        <div className="name">
          { section.name }
        </div>
        <div className="pointList">
          { section.value.map(point => keyPointsBody(point, section.priority, section.diableranking)) }
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
