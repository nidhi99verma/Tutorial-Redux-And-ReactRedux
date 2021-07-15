import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h5>React-Redux Without hooks</h5>
        {/* <CakeContainer/> */}
        <hr/>
        <h5>React-Redux With hooks</h5>
        <HooksCakeContainer/>
        <hr/>
      </div>
    </Provider>
  );
}

export default App;
