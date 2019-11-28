import React from 'react';

const SearchArea = (props) => (
<div className="container">
    <div className="row">
      <section className="col s4 offset-s4">
        <form action="" onSubmit={props.handleSubmit}>
          <input placeholder="Search movie" type="text" value={props.value} onChange={props.handleChange} />
          <button className="waves-effect waves-light btn red pulse" type="submit">Search</button>  
        </form>
      </section>
    </div>
  </div>
);

export default SearchArea;
