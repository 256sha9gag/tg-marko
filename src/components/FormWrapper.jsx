import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CountyAndCity from './CountyAndCity';



const FormWrapper = () => {
  const { t } = useTranslation();
  const [orderType, setOrderType] = useState('');
  const [asset, setAssets] = useState('');
  const [amount, setAmount] = useState('');
  const [denomination, setDenomination] = useState('');
  const [rate, setRate] = useState('');
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validationSchema = Yup.object().shape({
    orderType: Yup.string().required('orderType selection is mandatory.'),
    asset: Yup.string().required('Asset is required'),
    amount: Yup.string().required('amount selection is mandatory.'),
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValid(true);
    try {
      await validationSchema.validate({
        orderType,
        asset,
        amount,
      });
  
      // Если данные прошли валидацию, продолжайте с отправкой данных на сервер
      console.log({ orderType, asset, amount, rate, country, city, comment, denomination });
    } catch (error) {
      // Если данные не прошли валидацию, обновите состояние ошибок
      setIsValid(false);
      console.log(error)
    }
  };
  

  return (
    <Form validated={!isValid} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3">
        <Form.Check
          required
          className='textColor'
          inline
          label={t('give')}
          name="group1"
          type='radio'
          id={`inline-1`}
          onChange={() => setOrderType('give')}
        />
        <Form.Check
          className='textColor'
          inline
          label={t('take')}
          name="group1"
          type='radio'
          id={`inline-2`}
          onChange={(e) => setOrderType('take')}
        />
      </Form.Group>
      <Form.Select
        required
        className='mb-3' 
        aria-label="assets"
        onChange={(e) => setAssets(e.target.value)}
        >
        <option value=''>{t('selectAsset')}</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="Local currency">Local currency</option>
        <option value="USDT Tether TRC20<">USDT Tether TRC20</option>
        <option value="USDT Tether ERC20">USDT Tether ERC20</option>
        <option value="BTC Bitcoin">BTC Bitcoin</option>
        <option value="ETH Ethereum">ETH Ethereum</option>
      </Form.Select>
      {(asset === 'USDT' || asset === 'EUR') && orderType === 'give' ? (
        <Form.Select 
          className='mb-3' 
          aria-label="denomination"
          onChange={(e) => setDenomination(e.target.value)}
          >
          <option>{t('denomination')}</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </Form.Select>
      ) : null}
      <Form.Control required value={amount} onChange={(e) => setAmount(e.target.value)} className='mb-3' type="number" placeholder={t('amount')}/>
      <CountyAndCity 
        setCountry={setCountry}
        country={country}
        city={city}
        setCity={setCity}
      />
      <Form.Control 
        className='mb-3'
        onChange={(e) => setRate(e.target.value)}
        value={rate}
        type="text"
        placeholder={t('interestRate')}
      />
      <Form.Control value={comment} onChange={(e) => setComment(e.target.value)} as="textarea" className='mb-3' placeholder={t('info')} />
      <Button variant="primary" type="submit">
        {t('submit')}
      </Button>
      <Form.Control.Feedback type="invalid">
        The choice of the type of request, asset and quantity is mandatory for sending.
      </Form.Control.Feedback>
    </Form>
  );
};

export default FormWrapper;
