import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import CountyAndCity from './CountyAndCity';



const FormWrapper = () => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          className='textColor'
          inline
          label={t('give')}
          name="group1"
          type='radio'
          id={`inline-1`}
        />
        <Form.Check
          className='textColor'
          inline
          label={t('take')}
          name="group1"
          type='radio'
          id={`inline-2`}
        />
      </Form.Group>
      <Form.Select className='mb-3' aria-label="Default select example">
        <option>{t('selectAsset')}</option>
        <option value="1">USD</option>
        <option value="2">EUR</option>
        <option value="3">Local currency</option>
        <option value="4">USDT Tether TRC20</option>
        <option value="5">USDT Tether ERC20</option>
        <option value="6">BTC Bitcoin</option>
        <option value="7">ETH Ethereum</option>
      </Form.Select>
      <Form.Control className='mb-3' type="number" placeholder={t('amount')}/>
      <CountyAndCity />
      <Form.Control as="textarea" className='mb-3' placeholder={t('info')} />
      <Button variant="primary" type="submit">
        {t('submit')}
      </Button>
    </Form>
  );
};

export default FormWrapper;
