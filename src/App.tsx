import Header from './component/Header';
import Main from './component/Main';
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from './store';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;