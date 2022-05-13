import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <div className='page'>
      <h2>Intro Page</h2>
      <div style={{background: 'blue', height: '300px'}}>TEST</div>

      <Link to='/'>Home</Link>
    </div>
  );
};

export default IntroPage;
