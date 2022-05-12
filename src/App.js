import {useState} from 'react';
import { useLocation } from 'react-router';
import PageRoute from './components/PageRoute';
import './App.css';

const App = () => {
  const location = useLocation();
  return (
    <PageRoute path={location.pathname} />
  );
}

export default App;
