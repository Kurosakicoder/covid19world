import React from 'react';
import './App.css';
import Tabular from './Components/table/tabular';
import styles from './App.module.css'
import CoronaImage from './images/image.png'
import { fetchData } from './api/fetchApi'
import Cards from './Components/Cards/Cards';

class App extends React.Component {

  state = {
    data: {}
  }

  // retrieving data for sending data to cards.jsx
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
    // console.log(fetchedData)
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div className={styles.container}>
          <img className={styles.image} src={CoronaImage} alt='Corona' />
        </div>
        <h4 style={{ textAlign: 'center' }} className="display-6"> WORLD CASES</h4>
        <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><a href="https://covidindiastats.netlify.app/">Check India here</a></button></h6>
        <p style={{ textAlign: 'center', fontSize: '14px' }} className="card-subtitle mb-2 text-muted">Note: Total includes new plus old cases</p>
        <Cards data={data} />
        <Tabular />
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/khaidemsandip/"> Kurosaki</a>
        </div>
      </>
    );
  }
}

export default App;
