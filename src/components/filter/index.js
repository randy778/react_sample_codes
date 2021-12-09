import { useState } from 'react'
import './index.css'

const FilterFanchao = (props) => {
    const { onSearch } = props
    const options = [
        'UNITED STATES (USA)',
        'UNITED KINGDOM (UK)',
        'GERMANY',
        'FRANCE'
    ]
    
    const handleBtnClick = () => {
        let checkedOpt = []
        options.map((item, index) => {
            let dom = document.getElementById(`checkbox-${index}`)
            if (dom.checked) {
                checkedOpt.push(item)
            }
        })
        onSearch && onSearch(checkedOpt)
    }

    return (
        <div className='filter-content'>
            Country:
            <div className='options'>
                {
                    options.map((i, index) => {
                        return (
                            <div key={i}><input type="checkbox" id={`checkbox-${index}`}/>{i}</div>
                        )
                    })
                }
            </div>
            <div className='search'>
                <button onClick={handleBtnClick}>Search</button>
            </div>
        </div>
    )
}

export default FilterFanchao