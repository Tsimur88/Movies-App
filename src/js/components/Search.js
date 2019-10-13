import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?search={${this.props.value}}&searchBy=title`)
      .then((results) => results.json()).then(({ data }) => this.setState({ movies: data }));
  }

  render() {
    return (
      <>
        {this.state.movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster_path} />
          </div>
        ))}

      </>
    );
  }
}
