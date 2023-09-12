import Buttons from "./components/buttons/Buttons";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const tg = window.Telegram.WebApp;

  console.log(tg?.initData);

  return (
    <div className="d-flex flex-column p-2 justify-content-center container-sm">
      <h1 className="fs-5 text-center mb-2">{t('greeting')}</h1>
      <Buttons />
    </div>
  );
}

export default App;
