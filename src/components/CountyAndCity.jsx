import React from 'react';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useTranslation } from 'react-i18next';
import InputGroup from 'react-bootstrap/InputGroup'

import countries from '../locations/locations';

const CountyAndCity = ({country, setCountry, city, setCity}) => {
  const { t } = useTranslation();

  return (
    <>
      <InputGroup
        className='mb-3'
        >
          <Typeahead
            id="countries"
            className='container-fluid p-0'
            labelKey="name"
            onChange={setCountry}
            options={countries}
            placeholder={t('country')}
            selected={country}
          />
      </InputGroup>
      <Form.Control value={city} onChange={(e) => setCity(e.target.value)} className='mb-3' type="text" placeholder={t('city')}/>
    </>
  );
};

export default CountyAndCity;
