import React, { useCallback } from 'react'
// import Counter from './Counter'
import ChildComp from './ChildComp'

function App() {
    var [name,setName] = React.useState("");
    var d = React.useMemo(() => {
         return [33, 55]
    },[]);
    var f= React.useMemo(() => {
        return {food:"biryani"}
    },[]);
    var greeting = useCallback(function(){
      alert("Function Rendered")
    },[]);
      return (
        <div className='border border-2 border-primary m-2 p-3'>
            <div>
              <h1>Name:{name}</h1>
            </div>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
            <ChildComp a={3} b={"Pravallika"} c={d} e={f} g={greeting}></ChildComp>
        </div>
  )
}

export default App
