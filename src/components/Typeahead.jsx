import React from 'react';
import {Form} from 'react-bootstrap';

const Typeahead = () => <Form>
  <Form.Control
    type="email"
    placeholder="type your email"
    onChange={(e) => console.log(e)} 
  />
</Form>;

export default Typeahead;