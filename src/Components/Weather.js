import React from 'react'

// to use stateless component we can use the below code. stateless component is usefull for saving memory and for more efficient functionality
// here we can not use this anymore as we are using stateless component and props will be bassed as an argument in the arrow function as below:
const Weather = (props) => (

    <div className="weather__info">
             {props.temperature && <p className="weather__key"> Temperature: <span className="weather__value"> {props.temperature}</span></p>}
            {props.city && <p className="weather__key">City: <span className="weather__value">{props.city}</span></p>}
            {props.country && <p className="weather__key">Country: <span className="weather__value">{props.country}</span></p>}
            {props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
            {props.description && <p className="weather__key">Description: <span className="weather__value">{props.description}</span></p>}
            {props.error &&  <strong>{props.error}</strong>}
        </div>

)

export default Weather;


// class based component

//import React, { Component } from 'react'
// export default class Weather extends Component {
//     render() {
//         return (
//             <div>

//                    {this.props.temperature && <p> temperature: {this.props.temperature}</p>}
//                     {this.props.city && <p>city: {this.props.city}</p>}
//                     {this.props.country && <p>country: {this.props.country}</p>}
//                     {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
//                     {this.props.description && <p>description: {this.props.description}</p>}
//                     {this.props.error &&  <strong>{this.props.error}</strong>}

//             </div>
//         )
//     }
// }