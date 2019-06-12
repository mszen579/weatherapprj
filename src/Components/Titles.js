//stateless component
import React from 'react'

const Titles  = () =>(
<div>
        <h1 className="title-container__title">Weather Finder</h1>
        <p className="title-container__subtitle">Find out temperature, conditions and more ...</p>
</div>
);

export default Titles ;


//class based component
// import React, { Component } from 'react'

// export default class Titels extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find out temperature, conditions and more</p>
//             </div>
//         )
//     }
// }
