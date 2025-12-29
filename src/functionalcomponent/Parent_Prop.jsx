import React from 'react'
import Child_Prop from './Child_Prop';

const Parent_Prop = () => {
     const getData = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Child_Prop sendData={getData} />
    </div>
  )
}

export default Parent_Prop
