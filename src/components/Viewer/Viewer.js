import React, { useContext } from 'react';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaCodepen, FaCode } from "react-icons/fa";
import './Viewer.scss';
import ResumeBody from './body/ResumeBody';
import profileImage from '../../assets/ME.jpg';
import { ResumeJSONContext } from '../../store/context/ResumeJSON';

function Viewer() {
  const { state } = useContext(ResumeJSONContext);

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

  const contactBarTemplate = (contact) => {
    return contact.map(item => item.isVisible && <>
      <div className="group">
        { iconSelector(item.name) }
        <span className="name">
          { item.value }
        </span>
      </div>
    </>)
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
              <div className="userName" contentEditable="true" onBlur={ e => console.log(e) }>{ state.header.userName }</div>
              <div className="designation">{ state.header.designation }</div>
              <div className="summary">{ state.header.summary }</div>
            </div>
          </div>
          <div className="contact-bar">
            { contactBarTemplate(state.contact) }
          </div>
          <div className="resume-body">
            <ResumeBody data={ state.body } />
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewer;
