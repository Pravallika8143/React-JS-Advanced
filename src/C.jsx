import React from 'react'

var C = React.forwardRef(function(props,refs) {
    console.log(props);
    console.log(refs)
  return (
    <div className='border border-2 border-info-subtle p-3 m-3'>
        <h1>C</h1>
        <input type='text' ref={refs}/>
    </div> 
  )
});

export default C