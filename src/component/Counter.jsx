import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

   //state to hold the input value
  const [range,setRange] = useState("")
    //hook to dispach a function in action
    const dispach = useDispatch()
    //component can access the state by using useSelector hook
    const count = useSelector((state)=>state.counter.value)

console.log(range);
  return (
    <div>
         <div className='bg-light justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>{count}</h1>
  </div>
  <div className='d-flex justify-content-between align-items-center mt-4'>
    
    <button onClick={()=>dispach(decrement(Number(range)))} className='bg-success text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>Decrement</button>
    <button onClick={()=>dispach(reset())} className='bg-warning text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>Reset</button>
    <button onClick={()=>dispach(increment(Number(range)))} className='bg-danger text-white'style={{width:"200",height:'50px',borderRadius:"10px"}}>Increment</button>

  </div>
  <div className='w-100 mt-5'>
    <input onChange={(e)=>setRange(e.target.value) } type="text" className='form-control' placeholder='Enter the range' style={{borderColor:'blue'}} />
  </div>
    </div>
  )
}

export default Counter