import React, { Component } from 'react';
import Titles   from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';
import "./App.css";

// weather api key: 46034bb37b36defaa100ce706b11625a, URL (http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)

// this is for Rotterdam as example: http://api.openweathermap.org/data/2.5/weather?q=Rotterdam,nl&appid=46034bb37b36defaa100ce706b11625a&units=metric`

// my weather api key:
const API_KEY = "46034bb37b36defaa100ce706b11625a";


export default class App extends Component {

state = {
  temperature : "",
  city : "",
  country : "",
  humidity : "",
  descriptionn: "",
  error: "",

}

  getWeather = async (event) =>{
    //we use event.preventDefault(); to prevent the page from refreshing and to get the information
    event.preventDefault();
    //now we need to link the other inputs from the form to fill in the api call and this will be achived via creating 
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);


    // here we need to put an if condition to prevent the user from press the <button> without intering the city and the country
    if(city && country){
    this.setState({
          temperature : data.main.temp,
          city : data.name,
          country : data.sys.country,
          humidity : data.main.humidity,
          description: data.weather[0].description,
          error: "",
    });
  }
//   else if(!city){
//     this.setState({
//       temperature : "",
//       city : "the city name is wrong",
//       country : "",
//       humidity : "",
//       descriptionn: "",
//       error: "",
// });
//   }
//   else if(!country){
//     this.setState({
//       temperature : "",
//       city : "",
//       country : "the country name is wrong",
//       humidity : "",
//       descriptionn: "",
//       error: "",
// });
//  }

  else{
    this.setState({
      temperature : "",
      city : "",
      country : "",
      humidity : "",
      descriptionn: "",
      error: "Please enter the city name and/or the country name",
});
  }
}

render() {
  return (
    <div>
      <div className="wrapper">
        {/* <div className="main"> */}
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles  />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
};