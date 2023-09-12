import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from 'react-i18next';

const Buttons = () => {
  const [activeBtn, setActiveBtn] = useState('')
  const { i18n } = useTranslation();

  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      <Button 
        variant={activeBtn === 'en' ? "primary" : "secondary"}
        value='en'
        onClick={(e) => {
          setActiveBtn(e.currentTarget.value);
          i18n.changeLanguage(e.currentTarget.value);
        }}
      >
        English
      </Button>
      <Button 
        variant={activeBtn === 'ru' ? "primary" : "secondary"}
        value='ru'
        onClick={(e) => {
          setActiveBtn(e.currentTarget.value)
          i18n.changeLanguage(e.currentTarget.value);
        }}
      >
        Русский
      </Button>
      <Button 
        variant={activeBtn === 'es' ? "primary" : "secondary"}
        value='es'
        onClick={(e) => {
          setActiveBtn(e.currentTarget.value)
          i18n.changeLanguage(e.currentTarget.value);
        }}
      >
        Español
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;