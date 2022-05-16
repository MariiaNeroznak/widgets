import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: 'Ukraine', value: 'uk' },
  { label: 'English', value: 'en' },
  { label: 'Russian', value: 'ru' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('I want to translate this text');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <br />
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label='Select a Language'
      />{' '}
      <br />
      <Convert text={text} lang={language} />
    </div>
  );
};

export default Translate;
