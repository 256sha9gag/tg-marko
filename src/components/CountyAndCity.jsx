import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import countries from '../locations/locations';
import generateUniqueId from '../utils/generateId';

const CountyAndCity = () => {
  const [country, setCountry] = useState('');
  const { t } = useTranslation();

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };


  return (
    <>
      <Form.Select 
        onChange={(e) => handleCountryChange(e)} 
        className='mb-3' 
        aria-label="Default select example"
        value={country} 
        >
        <option value="">{t('country')}</option>
        {countries.map((country) => {
          return (<option key={generateUniqueId()} value={country.name}>{country.name}</option>)
        })}
      </Form.Select>
      {country ? (
        <Form.Select 
        className='mb-3' 
        aria-label="Default select example"
        >
        <option value="">{t('city')}</option>
        {countries.find((c) => c.name === country)?.cities.map((city) => (
            <option key={generateUniqueId()} value={city}>{city}</option>
        ))}
      </Form.Select>
      )
      : null}
    </>
  );
};

export default CountyAndCity;
