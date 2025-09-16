
import { Mycontext } from "./Mycontext"
import Parent from "./Parent"


function App() {
      return (
        <Mycontext.Provider value={{name:"Pravallika",age:22}}>
           <div className='border border-2 border-dark m-2 p-3'>
            <h1>UseContext React Component</h1>
            <Parent></Parent>
        </div>
        </Mycontext.Provider>
      ) 
}

export default App
