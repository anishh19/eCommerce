import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import MainContent from './components/MainContent/MainContent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <MainContent/>
      </div>
      
    </div>
  );
}

export default App;
