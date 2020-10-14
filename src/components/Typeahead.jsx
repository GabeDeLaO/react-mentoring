import React from 'react';
import {Form} from 'react-bootstrap';

const staticSearch = "cowboy";

const Typeahead = (props) => <Form>
  <Form.Control
    type="email"
    placeholder="type your email"
    onChange={
      (e) => props.potholeSearch(e.currentTarget.value)
    } 
  />
</Form>;

/*
{myVar}
{myFunc} ==> {myFunc({...args})}

{() => myFunc('cowboy')} ===> {mFunc('cowboy')}
*/

/*
Arrow function is the same as an old school function.
() => props.potholeSearch()
function(){
  return props.potholeSearch()
}
*/

export default Typeahead;