import React from 'react'


//class Welcome extends React.Component {
    //render() {
        //return (
            //<div className="welcome">
                //<p>Welcome, {this.props.name}</p>
                //<p>Your age is {this.props.age}</p>
            //</div>
        //)
   // }
////}
//export default Welcome 

function Welcome(props) {
    return (
      <div className="welcome">
        <p>Welcome, {props.name}</p>
        <p>Your age is {props.age}</p>
      </div>
    );
  }
  
  export default Welcome;
 



