import React, { useContext } from 'react'
import Child from './Child'
import { Mycontext } from './Mycontext'

function Parent() {
    var a=useContext(Mycontext)

  return (
    <div className='border border-2 border-success m-2 p-3'>
        <h1>Parent:{a.name}</h1>
        <Child></Child>
    </div>
  )
}

export default Parent