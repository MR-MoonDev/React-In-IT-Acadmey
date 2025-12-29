import React from 'react'

const Child_Prop = ({ sendData }) => {
  return (
    <div>
        <button onClick={() => sendData("Hello Parent")}>
      Send Data
    </button>
    </div>
  )
}

export default Child_Prop
