import React, { useContext, useState } from 'react';
import './JsonEditor.scss';
import { ResumeJSONContext } from '../../store/context/ResumeJSON';


function JsonEditor() {
  const { state, dispatch } = useContext(ResumeJSONContext);

  const changeListner = event => {
    dispatch({ type: 'UPDATE', data: JSON.parse(event.target.value) })
  }

  console.log(JSON.stringify(state));
  

  return <>
    <textarea name="json-editor" id="" cols="140" rows="50" value={ JSON.stringify(state, undefined, 2)} onChange={e => changeListner(e)}></textarea>
  </>
}

export default JsonEditor;