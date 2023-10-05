import React from 'react';
import { useTranslation } from 'react-i18next';


const Success = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className='text-success text-center'>{t('success')}</h3>
    </div>
  );
};

export default Success;