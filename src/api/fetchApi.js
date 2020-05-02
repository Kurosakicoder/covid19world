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
            dateupdate: data.Date,
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
        const modifiedData = {
            sortConfirmed: [...data.Countries].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed),
            sortRecovered: [...data.Countries].sort((a, b) => b.TotalRecovered - a.TotalRecovered),
            sortDeaths: [...data.Countries].sort((a, b) => b.TotalDeaths - a.TotalDeaths)
        }
        // console.log(modifiedData)
        const modifiedConfirmedData = [...data.Countries].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
        const modifiedRecoveredData = [...data.Countries].sort((a, b) => b.TotalRecovered - a.TotalRecovered)
        const modifiedDeathsData = [...data.Countries].sort((a, b) => b.TotalDeaths - a.TotalDeaths)
        // console.log(modifiedConfirmedData)
        return modifiedConfirmedData
    } catch (error) {
        console.log(error)
    }
}