import { useState } from 'react'
import './index.css'
import PaginationFanchao from '../pagination'
import FilterFanchao from '../filter'

const TableFanchao = (props) => {
    const { data, onPageChange, onSort, onSearch } = props
    const [visibleFilter, setVisibleFilter] = useState(false)
    // definde how the table display the data
    const column = [
        {
            title: 'ID', // text displayed in table header
            key: 'Mfr_ID' // key in the data from api call
        },
        {
            title: 'Common Name',
            key: 'Mfr_CommonName'
        },
        {
            title: 'Official Name',
            key: 'Mfr_Name'
        },
        {
            title: 'Country',
            key: 'Country'
        }
    ]

    const handleOpenFilter = () => {
        setVisibleFilter(!visibleFilter)
    }

    const hanldePageChange = (pageNo) => {
        onPageChange(pageNo)
        setVisibleFilter(false)
    }

    if (!data.Results || data.Results.length === 0) {
        return <div>EMPTY</div>
    }
    return (
        <div className='table-container'>
            <div className='table-header'>
                <PaginationFanchao 
                    onPageChange={hanldePageChange}
                    total={data.Results.length}
                />
                <div className="filter" onClick={handleOpenFilter}>
                    Filter
                    <div className="menu-icon"></div>
                </div>
            </div>
            { visibleFilter && <FilterFanchao onSearch={onSearch} />}
            <table className='table'>
                <tr>
                    {
                        column.map(item => {
                            return (
                                <th key={item.title}>
                                    <div className='th-content'>
                                        {item.title}
                                        <div className='sort'>
                                            <div className='asc' onClick={() => onSort(item.key, 'asc')}></div>
                                            <div className='desc' onClick={() => onSort(item.key, 'desc')}></div>
                                        </div>
                                    </div>
                                </th>
                            )
                        })
                    }
                </tr>
                {
                    data.Results.map((item, index) => {
                        return (
                            <tr key={index} className='data'>
                                {column.map(col => {
                                    return (
                                        <td key={col.key}>{item[col.key]}</td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TableFanchao