import { useEffect, useState } from 'react';
import { TableFanchao } from '../../components'
import { API } from '../../constants/api'
import APIRequest from '../../utils/request'

const MainPage = () => {
    const [tableData, setTableData] = useState({})
    const [params, setParams] = useState({
        page: 1
    })

    // get data when the page gets loaded
    useEffect(() => {
        getTableData()
    }, [params])

    // get table data
    const getTableData = () => {
        APIRequest({
            url: API.allManufacturers,
            params
        }).then(res => {
            setTableData(res)
        })
    }

    const handleSelectPage = (pageNo) => {
        setParams({
            ...params,
            page: pageNo
        })
    }

    const handleSort = (sortKey, sortType) => {
        let newData = []
        if (sortType === 'asc') {
            newData = tableData.Results.sort((pre, cur) => {
                return pre[sortKey] > cur[sortKey] ? 1 : -1
            })
        } else {
            newData = tableData.Results.sort((pre, cur) => {
                return pre[sortKey] > cur[sortKey] ? -1 : 1
            })
        }
        setTableData({
            ...tableData,
            Results: newData
        })
    }

    const handleFilterSearch = (optionsArr) => {
        APIRequest({
            url: API.allManufacturers,
            params
        }).then(res => {
            if (optionsArr.length === 0) {
                setTableData(res)
            } else {
                setTableData({
                    ...res,
                    Results: res.Results.filter(item => optionsArr.indexOf(item.Country) !== -1)
                })
            }
        })
    }

    return (
        <div>
            <h1>All Manufacturers</h1>
            <TableFanchao 
                data={tableData}
                onPageChange={handleSelectPage}
                onSort={handleSort}
                onSearch={handleFilterSearch}
            />
        </div>
    );
}

export default MainPage;
