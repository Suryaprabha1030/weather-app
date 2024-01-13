import React,{ useState } from 'react'
import search from "../assets/search.png"
import sun from '../assets/sun.png'
import cloudy from '../assets/c.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import drizzle from '../assets/drizzle.png'
import wind from '../assets/wind.png'
import "./weather.css"


function Weather() {
    let api="97bcc7824e22120beb633f7ea4b3646c"
    const[wicon,seticon]=useState(cloudy)
    const search1= async ()=>{
        const elements=document.getElementsByClassName("city");
        if(elements[0].value===""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${elements[0].value}&units=Metric&appid=${api}`
        // let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid= ${api}`
        let response=await fetch(url)
        let data= await response.json()

        const humidity=document.getElementsByClassName("humidity")
        const wind=document.getElementsByClassName("wind")
        const temp=document.getElementsByClassName("wtemp")  
        const wlocation=document.getElementsByClassName("wlocation")

      
        wlocation[0].innerHTML= data.name  
        wind[0].innerHTML= data.wind.speed+ " km/h"
        humidity[0].innerHTML= data.main.humidity   +  " %"
       
        temp[0].innerHTML= data.main.temp+ "&deg; C"
        
        

        


        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            seticon(sun)
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            seticon(cloudy)
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            seticon(drizzle)
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            seticon(drizzle)
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            seticon(rain)
        }
        else if(data.weather[0].icon === "010d" || data.weather[0].icon === "010n"){
            seticon(rain)
        }
        else if(data.weather[0].icon === "013d" || data.weather[0].icon === "013n"){
            seticon(snow)
        }
        else{
            seticon(sun)
        }

        



    }
  return (
    <div className='container'>
        <div className="header">Weather App</div>
        <div className="search">
            <input type="text" className='city' placeholder='search'/>
            <img src={ search} alt=""  onClick={search1}/>
        </div>
        <div className="wimg">
            <img src={wicon} alt="" />
        </div>
        <div className="wtemp">24deg</div>
        <div className="wlocation">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" />
                <div className="data">
                    <div className="humidity">54%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" />
                <div className="data">
                    <div className="wind">54 km/h</div>
                    <div className="text">Windspeed</div>
                </div>
       </div>
       </div>
    </div>
  )
}

export default Weather