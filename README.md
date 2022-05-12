# React Dynamic Router Prototype

`react-router`와 `react-transition-group`을 사용하여 dynamic router 구현 prototype

### Environment

- create-react-app

```json
"dependencies": {
  ...
  "history": "^4.10.0",
  "react": "^18.1.0",
  "react-dom": "^18.1.0",
  "react-router": "^5.2.0",
  "react-router-dom": "^5.2.0",
  "react-transition-group": "^4.4.2",
  ...
}
```

<br />

### Core Code

- `React.lazy` 사용하여 path에 맞는 페이지 컴포넌트 로드
- `<Suspense>`로 lazy 컴포넌트 로드
- page path key값으로 페이지 변경시 `CSSTransition` transion 동작

```jsx
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
```