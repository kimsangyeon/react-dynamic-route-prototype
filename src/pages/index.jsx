import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <div style={{background: 'red', height: '300px'}}>TEST</div>

      <Link to="/intro">Intro</Link>
    </div>
  );
};

export default HomePage;
