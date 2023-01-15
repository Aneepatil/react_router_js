// import React, { Component } from "react";

// class Card extends Component {

//     constructor(props){
//         super(props);

//         this.state={
//             user:''
//         }
//     }
    
//   componentDidMount() {
//     const user = this.props.match.params.user;
//     this.setState({user})
//   }

//   render() {
//     const {user}=this.state;
//     return (
//       <div
//         className="ui raised very padded text container segment"
//         style={{ marginTop: "80px" }}
//       >
//         <h1 className="ui header">User is :- {user}</h1>
//       </div>
//     );
//   }
// }

// export default Card;

import React from 'react'
import { useParams } from 'react-router'

const Card = () => {
    const {user}=useParams()
  return (
              <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px" }}
              >
                <h1 className="ui header">User is :- {user}</h1>
              </div>
        
  )
}

export default Card
