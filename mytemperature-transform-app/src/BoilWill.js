import React from 'react';

function BoilWill(props){
  if(props.celsius>=100){
    return <p>水会烧开</p>
  }
  else
  {
    return <p>水不会烧开</p>
  }
}

export default BoilWill;