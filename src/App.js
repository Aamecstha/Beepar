import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> this is the start fo my new ecommerce project</h1>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
    </div>
  );
}

export default App;
