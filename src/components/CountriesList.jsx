import countriesData from "../countries.json"
import { Link } from "react-router-dom";


export default function CountriesList(props){
    const countriesDataCopy = countriesData.slice()
    return(
        
        <div className="container">
            {countriesDataCopy.map((country)=>(
                <div className="row">
                <div className="col-5" /*Style={"max-height: 90vh; overflow: scroll"}*/ >
                    <div className="list-group" >
                        <Link to={props.country.alpha3Code} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/w580/${props.country.alpha2Code.toLowerCase()}.png`} alt="" width="100px" height="auto" />
                            <p>{props.country.name}</p>
                        </Link>
                    </div>
                </div>
                </div>                
            ))}
        </div>
    )
}

