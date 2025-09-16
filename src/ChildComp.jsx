import React from 'react'

function ChildComp() {

console.log("Child Component Rendered")
  return (
    <div className='border border-2 border-dark m-2 p-3'>
      <h1>Child Component</h1>
    </div>
  )
}

export default React.memo(ChildComp);