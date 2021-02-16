import React, {useState} from 'react'

const useSelect = (stateInitial, options) => {
   //d4de9ad880aa4c089114ff483f1a333a
    const [state, setState] = useState(stateInitial)

    const SelectNoticia = () => (
        <select value={state} 
            onChange={(e) =>setState(e.target.value) } 
            className="browser-default">
                
            {options.map(opt => (
                 <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )
    
  return [state ,SelectNoticia] 
}

export default useSelect