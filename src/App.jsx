import Counter from "./Counter"

function App() {
  return (
    <div className='border border-2 border-black p-3 m-3'>
      <h1>UseCounter React Component</h1>
      <Counter ic={5} is={10} name="pravallika-counter"></Counter>
      <Counter ic={10} is={20} name="uma-counter"></Counter>
    </div>
  )
}

export default App