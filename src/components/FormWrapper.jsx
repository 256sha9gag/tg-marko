import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import generateUniqueId from '../utils/generateId.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CountyAndCity from './CountyAndCity';
import { useTelegram } from '../hooks/useTelegram.js';

const FormWrapper = ({ username, setIsSubmit, isSubmit }) => {
  const { t } = useTranslation();
  const { queryId } = useTelegram();
  const [orderType, setOrderType] = useState('');
  const [asset, setAssets] = useState('');
  const [amount, setAmount] = useState('');
  const [denomination, setDenomination] = useState('');
  const [rate, setRate] = useState('');
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const id = generateUniqueId()
      const res = await axios.post('https://markoengine.space/data', {
        username: username,
        id: id,
        orderType,
        asset,
        denomination,
        amount,
        rate,
        country,
        city,
        comment,
        queryId
      });
      setOrderType('');
      setAssets('');
      setAmount('');
      setDenomination('');
      setRate('');
      setCountry([]);
      setCity('');
      setComment('');
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    setOrderType('give');
    setAssets('USD');
    setDenomination('50');
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(e.currentTarget)
      e.currentTarget.blur();
    }
  };
  
  return (
    <Form action="" onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3 d-flex flex-column">
        <div>
          <Form.Check
            className='textColor'
            inline
            label={t('give')}
            id='orderType1'
            name="group1"
            type='radio'
            onChange={() => setOrderType('give')}
            checked={orderType === 'give'}
          />
          <Form.Check
            className='textColor'
            inline
            id='orderType2'
            label={t('take')}
            name="group1"
            type='radio'
            onChange={(e) => setOrderType('take')}
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="selectAsset" className='textColor'>{t('selectAsset')}</Form.Label>
        <Form.Select
          className='mb-3'
          id="selectAsset"
          aria-label='selectAsset'
          onChange={(e) => setAssets(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="Local currency">Local currency</option>
          <option value="USDT Tether TRC20">USDT Tether TRC20</option>
          <option value="USDT Tether ERC20">USDT Tether ERC20</option>
          <option value="BTC Bitcoin">BTC Bitcoin</option>
          <option value="ETH Ethereum">ETH Ethereum</option>
        </Form.Select>
      </Form.Group>
      {(asset === 'USD' || asset === 'EUR') && orderType === 'give' ? (
        <Form.Group>
          <Form.Label className='textColor' htmlFor="denomination">{t('denomination')}</Form.Label>
          <Form.Select
            className='mb-3'
            id="denomination"
            aria-label="denomination"
            onChange={(e) => setDenomination(e.target.value)}
          >
            <option value="notSelected">{t('notSelected')}</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
          </Form.Select>
        </Form.Group>
      ) : null}
      <Form.Group>
        <Form.Label className='textColor' htmlFor="amount">{t('amount')}</Form.Label>
        <Form.Control
          id="amount"
          aria-label="amount"
          value={amount}
          onKeyDown={handleKeyDown}
          onChange={(e) => setAmount(e.target.value)} 
          className='mb-3' 
          type="number" 
          placeholder='1000'
          required
        />
      </Form.Group>
      <CountyAndCity 
        handleKeyDown={handleKeyDown}
        setCountry={setCountry}
        country={country}
        city={city}
        setCity={setCity}
      />
      <Form.Group>
        <Form.Label className='textColor' htmlFor="rate">{t('interestRate')}</Form.Label>
        <Form.Control
          id="rate"
          className='mb-3'
          onKeyDown={handleKeyDown}
          onChange={(e) => setRate(e.target.value)}
          value={rate}
          type="text"
          placeholder='+2%'
        />
      </Form.Group>
      <Form.Group>
        <Form.Control id="info" value={comment} onChange={(e) => setComment(e.target.value)} as="textarea" placeholder={t('info')} />
        <Form.Label className='textColor'
         htmlFor="info"></Form.Label>
      </Form.Group>
      <Button variant="primary" type="submit">
        {t('submit')}
      </Button>
    </Form>
  );
};

export default FormWrapper;
