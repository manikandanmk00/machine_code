import {useState} from 'react'
import "./Counter.css"




const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreament = () => setCount(prev => prev +1);
    const handleDecreament = () => setCount(prev => prev-1);
    const handleReset = () => setCount(0);

  return (
    <div className="counter-card">
        <h1>Counter App</h1>
        <h3>{count}</h3>
        <div className="btn-card">
            <button className="btn-increament" onClick = {handleIncreament}>Increament</button>
            <button className="btn-decreament"onClick = {handleDecreament} >Decreament</button>
            <button className="btn-reset"onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter