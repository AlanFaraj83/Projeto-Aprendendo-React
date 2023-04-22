import './App.css';
import FirstComponent from './components/FirstComponent.js';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/images';




function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      
    </div>
  );
}

export default App;
