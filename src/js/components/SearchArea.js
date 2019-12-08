import React from 'react';

const SearchArea = (props) => (
<div className="container">
    <div className="row">
      <section className="col s9 offset-s2">
        <form action="" onSubmit={props.handleSubmit}>
          <input placeholder="Search movie" type="text" value={props.value} onChange={props.handleChange} />
          <div className="col s3 offset-s9">
            <button className="waves-effect waves-light btn red" type="submit"><i className="material-icons left">search</i>Search</button> 
          </div>
        </form>
        <div className="searchby col s6">
            <p>SEARCH BY</p>
            <button className="waves-effect waves-light btn-small black" value="title" onClick={(e) => props.setSearchBy(e.target.value)}>TITLE</button>
            <button className="waves-effect waves-light btn-small black" value="genres" onClick={(e) => props.setSearchBy(e.target.value)}>GENRE</button>
        </div>
      </section>
    </div> 
  </div>
);

export default SearchArea;
