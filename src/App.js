import React from 'react';
import Header from './components/Header';
import Hightlight from './components/Highlight';
import NotifPanel from './components/NotifPanel';
import './index.css';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

class App extends React.Component {
  render() {
    return (
      <div>
        <NotifPanel />
        <Header />
        <Hightlight />
        <Footer />
        <Newsletter />
      </div>
    );
  };
}

export default App;
