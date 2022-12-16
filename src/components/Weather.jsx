import React, {useState } from "react";
import { useEffect } from "react";
import "./Css/style.css";

const Weather =() => {
    const [city, setcity] = useState(null);
    const[ search ,setSearch] = useState("Kathmandu");

    useEffect( () => {
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ebc1ba56d356a2a512c8d5118b5ad0d3`

            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setcity(resJson.main);

        };

        fetchApi ();

    },[search] )
  
    return(
        <>
        <div className="Box">
            <div className="inputdata">
                <input  
                type="search" 
                value={search}
                className="search"
                onChange ={(event) => {setSearch(event.target.value)}  }/>

            </div>
        {!city? (
            <p> No Data Found</p>
        ):(
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"> </i> {search}
            </h2>
            <h1 className=" weth">
                {city.temp}°Cel
            

            </h1>
            <h3 className="weth_max"> min:{city.temp_min}°Cel | max :{city.temp_max}°Cel</h3>

        </div>
        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
        </div>

        )}
        </div>





        </>
    )
}
export default Weather;
