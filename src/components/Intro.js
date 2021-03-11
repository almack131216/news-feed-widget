import React, { useContext, useState } from 'react';

import { Text, LanguageContext } from '../containers/Language';

const selectOptions = ['option1', 'option2', 'option3'];

export default function Intro() {
  const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked" />);
  }

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <h1><Text tid="mainHeader" /></h1>
      <p><Text tid="mainDescription" /></p>

      <div>
      <Text tid="selectStyle" />
        <select
          onChange={handleOptionChange}
          value={selectedOption}
        >
          {selectOptions.map(option => (
            <option key={option} value={option}>
              {dictionary[option]}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}
