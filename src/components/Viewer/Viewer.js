import React, { useContext } from 'react';
import './Viewer.scss';
import Page from './page/Page';
import { ResumeJSONContext } from '../../store/context/ResumeJSON';

function Viewer() {
  const { state, dispatch } = useContext(ResumeJSONContext);


  return (
    <>
      <div className="Viewer">
        <Page />
      </div>
    </>
  );
}

export default Viewer;
