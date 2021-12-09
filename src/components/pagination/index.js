import './index.css'

const PaginationFanchao = (props) => {
    const { onPageChange, total } = props
    // assume the table has 100 pages by default
    const pages = new Array(100).fill(1)

    return (
        <div className='table-pagination'>
            <select onChange={(event) => {onPageChange(event.target.value)}}>
                {
                    pages.map((item, index) => {
                        return (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        )
                    })
                }
            </select>
            <div style={{marginLeft: '16px', color: '#606266'}}>Total {total}</div>
        </div>
    )
}

export default PaginationFanchao