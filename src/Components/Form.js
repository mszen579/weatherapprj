
import React from 'react'

// to use stateless component we can use the below code. stateless component is usefull for saving memory and for more efficient functionality
// here we can not use this anymore as we are using stateless component and props will be bassed as an argument in the arrow function as below:
const Form = (props) =>(
        <div>
                <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter your city please"/>
                <input type="text" name="country" placeholder="Enter your country please"/>
                <button>Get weather</button>
                </form>
        </div>
);

export default Form;


// class based component

// import React, { Component } from 'react'
// export default class Form extends Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.props.getWeather}>
//                     <input type="text" name="city" placeholder="Enter your city please"/>
//                     <input type="text" name="country" placeholder="Enter your country please"/>
//                     <button>Get weather</button>
//                 </form>
//             </div>
//         )
//     }
// }
