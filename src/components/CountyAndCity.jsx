import React from 'react';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useTranslation } from 'react-i18next';

import countries from '../locations/locations';
import FormGroup from 'react-bootstrap/esm/FormGroup';

const CountyAndCity = ({country, setCountry, city, setCity, handleKeyDown}) => {
  const { t } = useTranslation();

  return (
    <>
      <FormGroup
        className='mb-3'
        >
          <Form.Label className='textColor' htmlFor='country'>{t('country')}</Form.Label>
          <Typeahead
            id='th-country'
            onKeyDown={handleKeyDown}
            className='container-fluid p-0'
            labelKey="name"
            inputProps={{id: 'country'}}
            onChange={setCountry}
            options={countries}
            placeholder='Russian Federation'
            selected={country}
          />
      </FormGroup>
      <FormGroup>
        <Form.Label className='textColor' htmlFor='city'>{t('city')}</Form.Label>
        <Form.Control required id='city' onKeyDown={handleKeyDown} value={city} onChange={(e) => setCity(e.target.value)} className='mb-3' type="text" placeholder="Moscow"/>
      </FormGroup>
    </>
  );
};

export default CountyAndCity;
