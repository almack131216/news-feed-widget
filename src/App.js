import React from 'react';
import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';
import Intro from './components/Intro';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>
        
        <Intro />
        <Carousel />
      </div>
    </LanguageProvider>
  );
}

export default App;
