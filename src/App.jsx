import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='io'>

    <form>
     <input type='text' placeholder="Enter Name"name="text"></input>
     <br></br>
      <input type='password' placeholder="Enter Password"name="text"></input>
    <br></br>

    <button>Submit</button>
<br></br>
    </form>

       </div>
    </>
  )
}

export default App
