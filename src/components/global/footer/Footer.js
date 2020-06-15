import React from 'react';
import './Footer.scss';
import { FaCoffee } from "react-icons/fa";


function Footer() {
  return <>
    <footer>
      {/* https://ko-fi.com/md_rehman */}
      <div className="coffee-icon">
        <FaCoffee />
      </div>
      <div className="note">
        If you found this useful and want to support me then you can click here to buy me a coffee 
      </div>
    </footer>
  </>
}

export default Footer;