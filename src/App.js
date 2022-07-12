import React, { useState, useEffect, useRef } from "react";


const Weather = ()=>{

    const [weather, setData] = useState([]);
    const inputRef = useRef(null);


    function handleInput() {
        console.log(inputRef.current.value);   
    };

    const fetchdata = () =>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputRef.current.value+'&appid=3915b57a37556d0743125578a4b6aaa8&units=metric')
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
            console.log(weather);
            
        })
        .catch((err)=>{console.log(err)})
    };

   useEffect(()=>{
    fetchdata()
   },[]);

    return(
        <div>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Weather app</title>
    <link rel="stylesheet" href="style.css"/>
    <header className="header">My weather app</header>
    <div className="input">
        <div className="dropdownformat">
            <label for="temps">Choose format: </label>
            <select name="temps" id="temps">
                <option value="cms" >C/ms</option>
                <option value="ckmh">C/kmh</option>
                <option value="cmph">C/mph</option>
                <option value="fmph">F/mph</option>
            </select>
            </div>
        <input type="text" ref={inputRef}  className="input" name="input" onChange={handleInput} placeholder="Enter a city name"/>
        <input type="submit" className="button" onClick={fetchdata} value="Submit"/>
    </div>
    <div className="container">
     <div className="display">
     <h3 className="cityname"></h3>
        <p className="desc" ></p>
        <p className="temp"></p>
        <p className="feelslike"></p>
        <p className="tempmin"></p>
        <p className="tempmax"></p>
        <p className="time"></p>
        <p className="wind"></p>
        <p className="humidity"></p>
     </div>
    </div>

 <div className="footer"> 
    Coded by <a href="https://github.com/kuedonn/">Kuedonn 2022</a>
  </div> 
</div>
    );
};

export default Weather;

