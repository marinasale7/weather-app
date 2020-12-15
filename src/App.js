 import React, { Component } from 'react';
import Weather from './component/weather';
import Form from './component/Form';
 
const Api_key= "a75b5c9d411cf2f49401de13e9e73752"

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
 class APP extends Component {
   state = {  
    temperature : "",
    city: "",
    country : "",
    humidity : "",
    description : "",
    error: ""
   }

   getweather = async(e)=>
   { 
     e.preventDefault()
   
          const city =e.target.City.value
          const country = e.target.elements.Country.value;
      
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Api_key}`)
        const data = await api.json()
        
         if (city&&country) 
         {
          this.setState({
            temperature : data.main.temp,
            city:data.name ,
            country : data.sys.country,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            error: ""
          })
         }

         else
         {
            this.setState({
              temperature : "",
              city: "",
              country : "",
              humidity : "",
             description : "",
             error: " please enter data "
            })
         }

          
   }

   render() { 
     return (  
       <div className="wrapper">
         <div className="form-container">
            
         <Form getweather={this.getweather}/>
         <Weather 
            temperature = {this.state.temperature}
            city ={this.state.city}
            country ={this.state.country}
            humidity ={this.state.humidity}
           description ={this.state.description}
           error={this.state.error}
         />

         </div>
       </div>
     );
   }
 }
  
 export default APP;