import React from 'react';

// TODO: (destructuring in javascript.)
/* example: 
  const {title,potholes,isLoading, searchTerm} = props;
*/
const PotholeList = ({title, potholes, isLoading, searchTerm}) => <div>
  <h3>{title}</h3>
  <h5>{searchTerm}</h5>
  { (isLoading) 
    ? <div>...loading</div>
    : <ul>
      {
        potholes.map(
          (hole, key) => <li key={key}>{hole.sr_location}</li>
        )
       } 
      </ul>
  }
</div>

export default PotholeList;