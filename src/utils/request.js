const APIRequest = (config) => {
    const { url, method = 'GET', params = null } = config
    let fetch_url = 'https://vpic.nhtsa.dot.gov/api' + url
    if (params) {
        Object.keys(params).map(key => {
            fetch_url += `&${key}=${params[key]}`
        })
    }
    return fetch(
        fetch_url,
        {
            method
        }
    ).then(response => {
        return response.json()
    })
    .catch(err => {
        // handle api request error
    })
}

export default APIRequest