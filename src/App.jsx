import { useState } from 'react'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Enter Your Details</h1>
       <div className='io'>

    <form>
     <input type='text' placeholder="Enter Name"name="text"></input>
     <br></br>
      <input type='password' placeholder="Enter Password"name="text"></input>
      <input type="email" placeholder='enter you email' name="email" />
    <br></br>

    <button>Submit</button>
<br></br>
    </form>

       </div>
    </>
  )
}

export default App
