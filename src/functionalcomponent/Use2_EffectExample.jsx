import { useEffect, useState } from "react"

const UseEffectExample = () => {
  const[data,setData]=useState(0);
  useEffect(()=>{
    console.log("UseEffectExample mounted")
  },)

  const updateDate=()=>{
    setData(data+1);
    console.log("Data updated:",data+1)
  }
  
//   useEffect(() => {
//   const interval = setInterval(() => console.log("tick"), 1000);
//   return () => clearInterval(interval);
// }, []);

  return (
    <>
        <button onClick={updateDate}>Update Data</button>
    </>
  )
}

export default UseEffectExample
