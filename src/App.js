import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <div>First</div>} />
            <Route path="/login" component={() => <div>Second</div>} />
            <Route path="/signup" component={() => <div>Third</div>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;