import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, lang }) => {
  const [traslatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    axios
      .post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            target: lang.value,
            q: debouncedText,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      )
      .then((response) => {
        const ttext = response.data.data.translations[0].translatedText;
        setTranslatedText(ttext);
      });
  }, [lang, debouncedText]);

  return <b>{traslatedText}</b>;
};

export default Convert;
