import React, { useContext } from 'react';
import './Header.scss';
import { MdPrint, MdFileDownload } from "react-icons/md";
import { AppContext } from '../../../store/context/AppContext';


function Header() {
  const { dispatch } = useContext(AppContext);

  return <>
    <header>
      <div className="left">
        <div className="logo">
          Resume Builder
        </div>
      </div>
      <div className="right">
        <div className="icon" title="Print View" onClick={ () => dispatch({ type: "UPDATE_VIEW", view: "printView"}) } >
          <MdPrint />
        </div>
        <div className="icon" title="Download">
          <MdFileDownload />
        </div>
      </div>
    </header>
  </>
}

export default Header;