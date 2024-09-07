import './App.scss';
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import Slide from './Slide';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>
        <div className='lang-selector-style'>
          <a href='/en'>EN</a>
          <a href='/jp'>JP</a>
        </div>        
        <p>
          { t("hello_world") }
        </p>
      </div>
      <Slide />
    </div>
  );
}

export default App;
