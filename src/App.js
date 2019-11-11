import React from 'react';
import Header from './components/Header';
import Hightlight from './components/Highlight';
import NotifPanel from './components/NotifPanel';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NotifPanel />
        <Header />
        <Hightlight />
      </div>
    );
  };
}

export default App;
