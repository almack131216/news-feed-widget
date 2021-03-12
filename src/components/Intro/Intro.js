import React, { useContext, useState } from 'react';
import { Text, LanguageContext } from '../../containers/Language';

export default function Intro() {
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);

  return (
    <div>
      <h1><Text tid="mainHeader" /></h1>
      <p><Text tid="mainDescription" /></p>
    </div>
  );
}
