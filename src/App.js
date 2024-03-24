import './App.css';

import {Route} from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div >
    <Header/>
    <main>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/products">
        <Product />
      </Route>
    </main>

    </div>
  );
}

export default App;
