import React from 'react'
import Child1 from './Child1'

function Child() {
  return (
    <div className='border border-2 border-primary m-2 p-3'>
        <h1>Child</h1>
        <Child1></Child1>
    </div>
  )
}

export default Child