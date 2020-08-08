import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    try {
        let changeableUrl = url;

        if (country) {
            changeableUrl = `${url}/countries/${country}`
        }

        // Destructuration des données de l'api dont on a besoin.
        const {data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl)

        return { confirmed, recovered, deaths, lastUpdate};

        //console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        // Destructuration des données de l'api dont on a besoin.
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;

        //console.log(response)
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {

    try {
        const {data : { countries }} = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name )

        //console.log(response)

    } catch (error) {
        console.log(error)
    }

}
