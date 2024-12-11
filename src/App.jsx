import './App.css'
import Characters from './components/Characters/Characters'
import Counter from './components/Counter/Counter'
import Example from './components/Example/Example'

function App() {

  return (
      <div>
       <h1>Mi página</h1>
       <Characters/>
       {/* <Example/> */}
       {/* <Counter  initialValue={0} step={2}/> */}
       <Counter 
       initialValue={3}
       />
      </div>
  )
}

export default App
