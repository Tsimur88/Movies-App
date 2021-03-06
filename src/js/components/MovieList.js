import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  console.log(props);
  return (
<div className="container">
      <div className="number">
        <i className="material-icons">local_movies</i>
        <span>
          {props.movies.length} movies found
        </span>
      </div>
    <div className="row">
      <div className="col s12">
        {
              props.movies.map((movie, i) => (
                <Movie key={i} image={movie.poster_path} />
              ))
            }
      </div>
    </div>
  </div>
);
}
;

export default MovieList;
