import Buttons from "./components/buttons/Buttons";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();


  return (
    <div className="d-flex flex-column p-2 justify-content-center">
      <h1 className="fs-3 text-center mb-3">{t('greeting')}</h1>
      <Buttons />
    </div>
  );
}

export default App;
