import './App.css';
import Header from './pages/header/Header'
import Body from './pages/Body/Body'


function App() {
  return (
    <div className='app'>
      <Header/>
      <img className='bg' src='./bg-pattern.svg' alt='SVg'/>
      <Body />
      <img src='./pattern-circles.svg' alt='circles' className='circle'/>
    </div>
  );
}

export default App;
