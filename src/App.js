import React from 'react';
import _ from 'lodash';
import Header from './components/Header';
import Hightlight from './components/Highlight';
import NotifPanel from './components/NotifPanel';
import './index.css';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

const notifData = localStorage.getItem('notif');
const newsData = localStorage.getItem('news');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNews: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScroll)
  }

  trackScroll = () => {
    const wrappedElement = window.addEventListener('scroll', _.debounce(() => { this.setState({ showNews: true }) }, 1000));
    console.log(wrappedElement);
  }

  render() {
    const { showNews } = this.state;
    return (
      <div>
        {
          notifData === null
            ? <NotifPanel />
            : null
        }
        <Header />
        <Hightlight />
        <Footer />
        {
          showNews
            ? newsData === null
              ? <Newsletter />
              : null
            : null
        }
      </div>
    );
  };
}

export default App;
