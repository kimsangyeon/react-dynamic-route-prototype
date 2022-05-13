import {useState} from 'react';
import { useLocation } from 'react-router';
import PageRoute from './components/PageRoute';
import LayerRoute from './components/LayerRoute';
import './App.css';

const App = () => {
  const location = useLocation();
  const [isOpenLayer, setIsOpenLayer] = useState(false);
  return (
    <>
      <PageRoute path={location.pathname} />
      <LayerRoute path={'/testLayer'} isOpen={isOpenLayer} />
      <button onClick={() => setIsOpenLayer(true)}>open layer</button>
    </>
  );
}

export default App;
