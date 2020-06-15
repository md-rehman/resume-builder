import React from 'react';
import './App.scss';
import Viewer from './components/Viewer/Viewer';
import Header from './components/global/header/Header';
import { ResumeJSONProvider } from './store/context/ResumeJSON';
import NavMain from './components/global/nav/NavMain';
import JsonEditor from './components/jsonEditor/JsonEditor';
import Footer from './components/global/footer/Footer';

function App() {
  return (
    <>
      <ResumeJSONProvider>
        <div className="Header-wrapper">
          <Header />
        </div>
        {/* <div className="NavMain-wrapper">
          <NavMain />
        </div> */}
        <main>
          <div className="Viewer-wrapper">
            <Viewer />
          </div>
          <div className="JsonEditor-wrapper">
            <JsonEditor />
          </div>
        </main>
        <div className="Header-wrapper">
          <Footer />
        </div>
      </ResumeJSONProvider>
    </>
  );
}

export default App;
