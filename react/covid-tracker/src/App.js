import React from 'react';
// import Card from './Components/Cards/Card';
// import Chart from './Components/Charts/Chart'
// import CountryPicker from './Components/CountryPickers/CountryPicker'
// ou
import {Cards, Chart, CountryPicker} from './components';
import { fetchData } from './api';
import coronaImage from './images/image.png';

import styles from './App.module.css';



class App extends React.Component {

    state = {
        data: {},
        country:'',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState ({data: fetchedData})
        //console.log(data);
    }

    handleCountryChange = async (country) => {
        // fetch Data
        const fetchedData = await fetchData(country);

        // set the state
        this.setState ({data: fetchedData, country: country})
    }

    render() {
        
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;