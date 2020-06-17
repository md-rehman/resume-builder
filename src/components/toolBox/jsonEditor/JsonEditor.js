import React, { useContext, useState } from 'react';
import './JsonEditor.scss';
import { ResumeJSONContext } from '../../../store/context/ResumeJSON';


function JsonEditor() {
  const { state, dispatch } = useContext(ResumeJSONContext);

  const [json, setJson] = useState(JSON.stringify(state, null, 2));

  const changeListner = event => {
    setJson(event.target.value)
  }

  const updateJSON = event => {
    dispatch({ type: 'UPDATE', data: JSON.parse(json) })
  }

  return <>
  <div className="JsonEditor">
    <textarea name="json-editor" onChange={ e => changeListner(e) } value={ json } ></textarea>
    <button onClick={ e => updateJSON(e) }>Update</button>
  </div>
  </>
}

export default JsonEditor;