import React from 'react';

const SearchArea = (props) => (
<div className="container">
    <div className="row">
      <section className="col s4 offset-s4">
        <form action="" onSubmit={props.handleSubmit}>
          <input placeholder="Search movie" type="text" value={props.value} onChange={props.handleChange} />
        </form>
      </section>
    </div>
  </div>
);

export default SearchArea;
