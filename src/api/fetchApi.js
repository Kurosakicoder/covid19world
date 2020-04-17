const url = 'https://api.covid19api.com/summary'

export const fetchData = async () => {
    try {
        const data = await (await fetch(url)).json()
        // console.log(data)
        const modifiedData = {
            newconfirmed: data.Global.NewConfirmed,
            totalconfirmed: data.Global.TotalConfirmed,
            newdeaths: data.Global.NewDeaths,
            totaldeaths: data.Global.TotalDeaths,
            newrecovered: data.Global.NewRecovered,
            totalrecovered: data.Global.TotalRecovered,
            country: [...data.Countries]
        }
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataCountries = async () => {
    try {
        const data = await (await fetch(url)).json()
        // console.log(data)
        const modifiedData = [...data.Countries].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}