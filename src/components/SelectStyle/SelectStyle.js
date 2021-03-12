import React, { useContext, useState } from 'react';
import { Text, LanguageContext } from '../../containers/Language';

const selectOptions = ['option1', 'option2'];

const SelectStyle = props => {
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);
  const activeOption = props.optionActive;

  function handleChange(e) {
    // Here, we invoke the callback with the new value
    setSelectedOption(e.target.value);
    props.onChange(e.target.value);
}

  return (
    <div>
      <div>
        <Text tid="selectStyle" />
        <select
          onChange={handleChange}
          value={selectedOption ? selectedOption : props.defaultValue}
        >
          {selectOptions.map(option => (
            <option key={option} value={option}>
              {dictionary[option]}...{props.optionActive}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectStyle;