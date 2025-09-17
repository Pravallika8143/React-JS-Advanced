import React from 'react'
import { useCounter } from './useCounter'

function Counter({ic,is,name}) {
    var [count,inc,dec] = useCounter(ic,is,name);
  return (
    <div className='border border-2 border-danger-subtle p-3 m-3'>
        <h1>Counter:{count}</h1>
        <button className='me-3' onClick={() => {inc()}}>Increament</button>
        <button onClick={() => {dec()}}>Decreament</button>
    </div>
  )
}

export default Counter