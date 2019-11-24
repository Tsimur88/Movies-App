import React, { Component } from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './js/components/Nav';
import SearchArea from './js/components/SearchArea';
import MovieList from './js/components/MovieList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);


    fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${this.state.searchTerm}&searchBy=title`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.data] });
      });
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchArea value={this.state.searchTerm} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
