import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

import { useTelegram } from './hooks/useTelegram';
import Buttons from "./components/buttons/Buttons";
import FormWrapper from './components/FormWrapper';
import Success from './components/Success';


const App = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { t } = useTranslation();
  const { tg } = useTelegram();

  return (
    <Container 
      className="p-4"
    >
      <Row>
        <Col><h1
        className="h5 text-center textColor"
      >
        {`${t('greeting')}${tg?.initDataUnsafe?.user?.username ? tg?.initDataUnsafe?.user?.username : 'username'} !`}
      </h1></Col>
      </Row>
      <Row>
        <Col>
          <h2
            className="h6 pt-2 text-center textColor"
          >
            {t('create')}
          </h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col sm={{ span: 2, offset: 8 }}>
          <Buttons />
        </Col>
      </Row>
      {!isSubmit ? (
        <FormWrapper username={tg?.initDataUnsafe?.user?.username} setIsSubmit={setIsSubmit} isSubmit={isSubmit} />
      ) : (
        <Success />
      )}
    </Container>
  );
}

export default App;
