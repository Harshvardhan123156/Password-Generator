import { use, useCallback, useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [length, setlength] = useState(8)
  const [numericalallow, setnumericalallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [password, setpassword] = useState("")

  let passGenerator = () => {
    
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numericalallow) str+="0123456789"
    if(charallow) str+="!@#$%^&*~`[](){}+_-"

    for (let i = 1; i <= length; i++) {
      let idx=Math.floor(Math.random()*str.length);
      pass+=str.charAt(idx)
    }

    setpassword(pass)


  }
  useEffect(()=>{
    passGenerator()
  },[length,numericalallow,charallow])

  return (
  <div className="w-full h-screen bg-black flex items-center justify-center p-4">
    <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center text-2xl font-bold my-3'>
          Password Generator
        </h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-gray-700"
            placeholder="Password"
            readOnly
          />
          {/* I'm assuming you'll want a Copy button here later! */}
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>

        {/* Example of where your sliders/checkboxes would go */}
        <div className='flex text-sm gap-x-2'>
           {/* Controls go here */}
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numericalallow}
            id='numberInput' 
            onChange={()=>{
              setnumericalallow((prev)=> !prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charallow}
            id='charInput'
            onChange={()=>{
              setcharallow((prev)=>!prev)
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
    </div>
    
  </div>
)
}

export default App
