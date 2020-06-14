import React from 'react';
import './App.scss';
import Viewer from './components/Viewer/Viewer';
import Header from './components/global/header/Header';
import { ResumeJSONProvider } from './store/context/ResumeJSON';

function App() {
  return (
    <>
      <ResumeJSONProvider>
        <header>
          <Header />
        </header>
        <nav>

        </nav>
        <main className="Viewer-wrapper">
          <Viewer />
        </main>
        <aside>

        </aside>
        <footer>

        </footer>
      </ResumeJSONProvider>
    </>
  );
}

export default App;
