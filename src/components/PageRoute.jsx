
import { Route } from 'react-router-dom';
import DynamicComponent from './DynamicComponent';

import '../App.css';

const PageRoute = ({path}) => {
  return (
    <Route path={path}>
      {({location}) => {
        console.log('test', location);
        return (
          <DynamicComponent path={path} />
        )
      }}
    </Route>
  )
};

export default PageRoute;
