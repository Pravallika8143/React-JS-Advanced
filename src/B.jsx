import React from 'react'

var B = React.forwardRef(function(props,refs) {
    console.log(props);
    console.log(refs);

    function checkEnter(){
    if(eval.key === 'Enter'){
      refs[1].current.focus()
    }
   }
  return (
    <div className='border border-2 border-success-subtle p-3 m-3'>
        <h1>B</h1>
        <input type='text' placeholder='Enter your area' ref={refs} onKeyUp={(e) => {checkEnter(e)}}/>
    </div> 
  )
});

export default B