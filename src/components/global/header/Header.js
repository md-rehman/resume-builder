import React from 'react';
import './Header.scss';
import { MdPrint, MdFileDownload } from "react-icons/md";


function Header() {
  return <>
    <header>
      <div className="left">
        <div className="logo">
          Resume Builder
        </div>
      </div>
      <div className="right">
        <div className="icon" title="Print View">
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