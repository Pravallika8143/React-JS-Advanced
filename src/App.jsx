
import TodoList from './Todolist'

function App() {
  // var aRef = useRef();
  // var bRef = useRef();
  // function handleClick(){
  //   var x = aRef.current.value;
  //   bRef.current.innerText = x;
  // }
  // useEffect(() => {
  //   aRef.current.focus();
  // },[])
  return (
    <div className='border border-2 border-black p-3 m-3'>
      <h1>UseRef React Component</h1>
      <TodoList></TodoList>
      {/* <div>
        <input type='text' className='me-3 mt-3' ref={aRef}/>
        <button onClick={()=>{handleClick();}}>Show</button>
        <h1 className='p-3'>Name:<span ref={bRef}></span></h1>
      </div> */}
    </div>
  )
}

export default App