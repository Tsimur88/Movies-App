import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function Form() {
  const [value, setValue] = useState('');
  return (
    <>
      <form>
        <input value={value} onChange={(e) => setValue(e)} />
      </form>
      <Button variant="light" onClick={<Search value={value} />}>Search</Button>
    </>
  );
}

export default Form;

// onChange = async (value) => {
//   this.setState({ loading: true });
//   const items = await fetch(....);
//   this.setState({ loading: false, films: items });
// }
