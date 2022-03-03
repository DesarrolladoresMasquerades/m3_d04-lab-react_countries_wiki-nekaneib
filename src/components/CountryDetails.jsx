import { Link } from "react-router-dom";

export default function CountryDetails(props){
    return(
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/w580/${props.country.alpha2Code.toLowerCase()}.png`} alt="country flag" /> 
            <h1>{props.country.name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td >Capital</td>
                        <td>{props.country.capital}</td>
                    </tr>
                    <tr>
                        <td >Area</td>
                        <td>{props.country.area} <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {props.country.borders.map((border)=>{
                                    return (
                                        <li>
                                        <Link to={`/${border}`}>{border}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
 