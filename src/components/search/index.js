import { useState } from 'react'
import './index.css'

const SearchFanchao = (props) => {
    const { onSearch } = props
    const [inputVal, setInputVal] = useState('')
    const handleInputChange = (event) => {
        setInputVal(event.target.value)
    }
    return (
        <div>
            <input 
                type="text" 
                name="namelike" 
                placeholder='Enter ID or name'
                onChange={handleInputChange}
            />
            <button type="button" onClick={() => onSearch(inputVal)}>Search</button>
        </div>
    )
}

export default SearchFanchao