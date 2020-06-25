import React, { useContext } from 'react';
import './App.scss';
import Viewer from './components/viewer/Viewer';
import Header from './components/global/header/Header';
import { ResumeJSONProvider } from './store/context/ResumeJSON';
import NavMain from './components/global/nav/NavMain';
import Footer from './components/global/footer/Footer';
import ToolBox from './components/toolBox/ToolBox';
import { AppContext, AppContextProvider } from './store/context/AppContext';

function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className={ "background-main " + state.activeMainTheme }></div>
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
    </>
  );
}

export default App;
