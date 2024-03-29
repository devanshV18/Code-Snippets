import React, { useState } from 'react'


const Checkbox = () => {

const [isChecked,setIsChecked] = useState(false)


    const handleCheck = (e)=> {
        setIsChecked(prev=>!prev)
        console.log({isChecked})
    }

  return (
    <div className='flex gap-1'>
      <p>MyCheckbox</p>
      <input type="checkbox" 
      checked={isChecked}
      onChange={handleCheck}
      />
    </div>
  )
}

export default Checkbox
