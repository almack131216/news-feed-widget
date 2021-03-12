import React from 'react';
import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';
import Intro from './components/Intro/Intro';
import SelectStyle from './components/SelectStyle/SelectStyle';
import Carousel from './components/Carousel/Carousel';

function App() {

  const [value, setValue] = React.useState("option1");

    function handleChange(newValue) {
      setValue(newValue);
    }

  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>
        
        <Intro />
        <SelectStyle defaultValue={value} onChange={handleChange}/>
        <p>ACTIVE: {value}</p>

        {value === 'option1' && (<Carousel style="fullWidth"/>)}
        {value === 'option2' && (<Carousel style="scroll"/>)}
        
      </div>
    </LanguageProvider>
  );
}

export default App;
