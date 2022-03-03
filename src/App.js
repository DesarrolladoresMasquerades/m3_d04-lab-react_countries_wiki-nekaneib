// src/App.js
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesData from "./countries.json"
// import {Axios} from "axios";

// const apiUri = "https://ih-countries-api.herokuapp.com/countries"

function App() {
  const [countriesList, setCountries] = useState()

  useEffect(()=>{
      setCountries(countriesData)
    }, [])
  

  return (
  <div className="App">
    <Navbar />

    <div className="container">
    <div className="row">
    <CountriesList countriesList={countriesList}/>

    <Routes>
    {countriesData.map((country)=>(
      <Route
            exact
            path={country.alpha3Code}
            element={<CountryDetails country={country} />}
          />
    ))}
    </Routes>
    </div>
  </div>

    
  </div>)
}
export default App;