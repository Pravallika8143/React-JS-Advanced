import React, { useEffect,useRef } from 'react'
import B from './B'
import C from './C';


function A() {
   const aRef = useRef();
   const bRef = useRef();
   const cRef = useRef();
   useEffect(() =>{
    aRef.current.focus();
   },[]);
   function checkEnter(){
    if(eval.key === 'Enter'){
      bRef.current.focus()
    }
   }
  return (
    <div className='border border-2 border-success p-3 m-3'>
        <h1>A</h1>
        <input type='text' placeholder='Enter your name' ref={aRef} onKeyUp={(e) => {checkEnter(e)}}/>
        <B ref={bRef}></B>
        <C ref={cRef}></C>
    </div>
  )
}

export default A