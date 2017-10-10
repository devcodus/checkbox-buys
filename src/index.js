import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import './index.css';
// import App from './App';
import CheckboxComponent from './components/checkbox_component/CheckboxComponent'
import store from './js/index';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <CheckboxComponent />
        </div>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
