import { Suspense, lazy } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const DynamicComponent = ({path}) => {
  const Component = lazy(() => import(`../pages${path}`));
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={path}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <Suspense fallback={<div>loading</div>}>
          <Component />
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DynamicComponent;
