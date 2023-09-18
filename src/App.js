import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

import Buttons from "./components/buttons/Buttons";
import FormWrapper from './components/FormWrapper';


const App = () => {
  const { t } = useTranslation();
  const tg = window.Telegram.WebApp;

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
        <Col sm={{ span: 2, offset: 8 }}>
          <Buttons />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2
            className="h6 pt-5"
          >
            {t('create')}
          </h2>
        </Col>
      </Row>
      <FormWrapper />
    </Container>
  );
}

export default App;
