import { useEffect, useState } from "react"

function Counter() {
    var [count,setCountFn] = useState(0);

    // setInterval(() => {
    //     setCountFn(count + 1);
    // },2000)

    useEffect(() => {
        setInterval(() => {
        setCountFn((cv) => {
            return cv + 1
        });
        console.log("SetInterval Called")
    },1000)
    },[])

    function inc(){
        for(var i=1;i<=4;i++) {
            setCountFn((cv) => {
                return cv + 1
            })
        }
    }

    function dec(){
        setCountFn(count - 1)
    }

  return (
    <div className='border border-2 border-dark m-2 p-3'>
        <h1>Counter:{count}</h1>
        <button className='me-2' onClick={() => {inc()}}>Increament</button>
        <button className='me-2' onClick={() => {dec()}}>Decreament</button>
    </div>
  )
}

export default Counter