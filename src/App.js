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
        <header>
          <Header />
        </header>
        <nav>
          <NavMain />
        </nav>
        <main className="Viewer-wrapper">
          <Viewer />
        </main>
        <aside>
          <JsonEditor />
        </aside>
        <footer>
          <Footer />
        </footer>
      </ResumeJSONProvider>
    </>
  );
}

export default App;
