import './App.css';
import FirstComponent from './components/FirstComponent.js';
import AnotherComponent from './components/AnotherComponent';
import Hooks from './components/Hooks;
import Images from './components/images';
import List from './components/List';




function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks/>
      <List/>
      
    </div>
  );
}

export default App;
