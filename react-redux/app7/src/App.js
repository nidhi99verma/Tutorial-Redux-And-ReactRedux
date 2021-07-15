import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h5>React-Redux Without hooks</h5>
        <CakeContainer/>
        <hr/>
        <h5>React-Redux With hooks</h5>
        <HooksCakeContainer/>
        <hr/>
        <h5>React-Redux Without hooks</h5>
        <IceCreamContainer/>
        <hr/>
        <h5>React-Redux With hooks</h5>
        <HooksIceCreamContainer/>
        <hr/>
        <h5>React-Redux Without hooks</h5>
        <NewCakeContainer/>
        <hr/>
        <h5>Reuseable React-Redux Without hooks</h5>
        <ItemContainer cake/>
        <ItemContainer/>
        <hr/>
      </div>
    </Provider>
  );
}

export default App;