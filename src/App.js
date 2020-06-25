import React, { useEffect, useRef } from 'react';
import './App.scss';
import Viewer from './components/viewer/Viewer';
import Header from './components/global/header/Header';
import { ResumeJSONProvider } from './store/context/ResumeJSON';
import NavMain from './components/global/nav/NavMain';
import JsonEditor from './components/toolBox/jsonEditor/JsonEditor';
import Footer from './components/global/footer/Footer';
import ToolBox from './components/toolBox/ToolBox';
import { AppContextProvider } from './store/context/AppContext';

function App() {

  return (
    <>
        <AppContextProvider>
          <div className="background-main"></div>
          <div className="Header-wrapper">
            <Header />
          </div>
          {/* <div className="NavMain-wrapper">
            <NavMain />
          </div> */}
          <main>
            <ResumeJSONProvider>
              <div className="background-shine"></div>
              <div className="Viewer-wrapper">
                <Viewer />
              </div>
              <div className="ToolBox-wrapper">
                <ToolBox />
              </div>
            </ResumeJSONProvider>
          </main>
          <div className="Header-wrapper">
            <Footer />
          </div>
        </AppContextProvider>
    </>
  );
}

export default App;
