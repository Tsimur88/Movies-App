import React from 'react';
import { Button } from 'react-bootstrap';
import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState('');
  return (
    <>
      <form>
        <input value={value} onChange={(e) => setValue(e)} />
      </form>
      <Button variant="light" onClick={<Search value={value}/>}>Search</Button>
    </>
  );
}

export default Form;
