import React from 'react';
import NotifPanel from './components/NotifPanel/index';
import Header from './components/Header';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NotifPanel />
        <Header />
      </div>
    );
  };
}

export default App;
