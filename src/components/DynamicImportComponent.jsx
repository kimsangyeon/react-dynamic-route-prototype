import { useState, useEffect, createElement } from 'react';
import { CSSTransition } from 'react-transition-group';

const DynamicImportComponent = ({path, isOpen = false}) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
        const {default: Component} = await import(`../layer${path}`);
        setComponent(() => Component);
    };
    isOpen && importComponent();
  }, [isOpen]);

  return (
    <CSSTransition
      in={isOpen && !!Component}
      timeout={500}
      classNames="alert"
      unmountOnExit
      onExited={() => setComponent(null)}
    >
      {Component ? createElement(Component) : <></>}
    </CSSTransition>
  );
};

export default DynamicImportComponent;
