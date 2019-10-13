import React from 'react';
import './index.css';
import Titles from './js/components/Titles';
import Form from './js/components/Form';
import Movies from './js/components/Movies';
import Search from './js/components/Search';

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="app-wrapper">
        <header className="header" />
        <div className="content">
          <Titles />
          <Form />
          <Movies />
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
