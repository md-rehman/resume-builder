import React, { useContext } from 'react';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaCodepen, FaCode } from "react-icons/fa";
import './Viewer.scss';
import './template1.scss';
import ResumeBody from './body/ResumeBody';
import profileImage from '../../assets/ME.jpg';
import { ResumeJSONContext } from '../../store/context/ResumeJSON';

function Viewer() {
  const { state, dispatch } = useContext(ResumeJSONContext);

  const updateEntry = (key, value) => {
    dispatch({ type: 'UPDATE_ONE_VALUE', key, value })
  }

  const iconSelector = name => {
    switch (name) {
      case "email":
        return <FaEnvelope />
      case "mobile":
        return <FaMobileAlt />
      case "location":
        return <FaMapMarkerAlt />
      case "linkedIn":
        return <FaLinkedinIn />
      case "github":
        return <FaGithub />
      case "codepen":
        return <FaCodepen />
      default:
        return <FaCode />
    }
  }

  const contactBarTemplate = (contact, key) => {
    return contact.map((item, index) => item.isVisible && <>
      <div className="group" key={ item.index }>
        { iconSelector(item.name) }
        <span className="name" contentEditable={ state.header.userName ? true : false } onBlur={ e => updateEntry(key + index + "].value", e.currentTarget.textContent) }>
          { item.value }
        </span>
      </div>
    </>)
  }

  const headerTemplate = (header, key) => {
    return <>
      <div className="userName" contentEditable={ state.header.userName ? true : false } onBlur={ e => updateEntry(key + ".userName", e.currentTarget.textContent) }>{ header.userName }</div>
      <div className="designation" contentEditable={ state.header.designation ? true : false } onBlur={ e => updateEntry(key + ".designation", e.currentTarget.textContent) }>{ header.designation }</div>
      <div className="summary" contentEditable={ state.header.summary ? true : false } onBlur={ e => updateEntry(key + ".summary", e.currentTarget.textContent) }>{ header.summary }</div>
    </>
  }

  return (
    <>
      <div className="Viewer">
        <div className="page">
          <div className="resume-header">
            {/* <div className="pofile-image">
              <img src={profileImage} alt=""/>
            </div> */}
            <div className="header-info">
              { headerTemplate(state.header, "header") }
            </div>
          </div>
          <div className="contact-bar">
            { contactBarTemplate(state.contact, "contact[") }
          </div>
          <div className="resume-body">
            <ResumeBody />
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewer;
