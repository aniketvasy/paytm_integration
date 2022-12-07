import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PaytmButton } from './paytm_button/PaytmButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PaytmButton/>
    </div>
  )
}

export default App
