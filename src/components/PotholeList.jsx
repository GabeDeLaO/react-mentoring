import React from 'react';

const PotholeList = ({title, potholes, isLoading}) => <div>
  <h3>{title}</h3>
  { (isLoading) 
    ? <div>...loading</div>
    : <ul>
      {
        potholes.map(
          (hole) => <li>{hole.sr_location}</li>
        )
       } 
      </ul>
  }
</div>

export default PotholeList;