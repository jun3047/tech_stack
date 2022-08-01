import Header from './component/Header';
import Main from './component/Main';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';

const App: React.FunctionComponent = () => {
  
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;