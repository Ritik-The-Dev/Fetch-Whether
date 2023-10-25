import React, { useState } from 'react'
import './FetchWhether.css'
import search from './images/search.png'
import humidity from './images/humidity.png'
import winde from './images/wind.png'
import oip from './images/OIP.png'
const FetchWhether = () => {

    const [city,setCity] = useState("");
    const [temp,setTemp] = useState("0");
    const [humid,setHumid] = useState("0");
    const [wind,setWind] = useState("0");

    const key = "e8ed5c7672fca8dfc041faf5c4e9f810";
    let GetWhetherInfo = async()=>{
        try{
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then (Res => Res.json())
        .then(Res => {
            setTemp(Res.main.temp)
            setHumid(Res.main.humidity)
            setWind(Res.wind.speed)
        })}
        catch(err){
            setCity("Search Again Please")
        }
    }

    function getcity(){
        let inpu = document.querySelector("#iut")
        let cut = document.querySelector("#searchbtn");
        cut.addEventListener("click", ()=>{
            setCity(inpu.value)
        })
        inpu.value = "";
        GetWhetherInfo();
    }

  return (
    <div>
          <div className="coner">
        <div className="rt">
        <div className="sch">
            <input type="text" placeholder="Search city Name" autoFocus id="iut"/>
            <button onClick={getcity} id="searchbtn"><img src={search}alt="Search"/></button>
        </div>
        <div className="temp-images">
            <img src={oip} alt="temp-images" id="temp-images" />
        </div>
        <div className="temp">
            <h1 id="tem">{temp}°C</h1>
        </div>
        <div className="city">
            <h1 id="city">{city}</h1>
        </div>
        <div className="more-details">
            <span className="humidity">
                <div className="humid">
                <img src={humidity} alt="humidity" id="humi" />
                <div className="lo">
                <p id="humiditypercent">{humid}%</p>
                <p>humidity</p>
            </div>
                </div>
            </span>
            <span className="Wind speed">
                <div className="humid">
                <img src={winde} alt="wind" id="humi"/>
                <div className="lo">
                <p id="windspeed">{wind} km/hr</p>
                <p>Wind Speed</p>
                </div>
                </div>
            </span>
        </div>
    </div>
</div>
    </div>
  )
}

export default FetchWhether
