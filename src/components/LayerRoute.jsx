
import { Route } from 'react-router-dom';
import DynamicImportComponent from './DynamicImportComponent';

import '../App.css';

const LayerRoute = ({path, isOpen}) => {
  return (
    <Route path={path}>
      {({location}) => {
        console.log('test', location);
        return (
          <DynamicImportComponent path={path} isOpen={isOpen} />
        )
      }}
    </Route>
  )
};

export default LayerRoute;
