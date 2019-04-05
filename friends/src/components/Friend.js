import React from "react"
import "../css/Friend.css"

class Friend extends React.Component {
    
    render(){
        return(
            <div className="friend"> 
              <h1> {this.props.name} </h1>
              <h2> Age: {this.props.age} </h2>
              <h3>Email: </h3>
              <h3>{this.props.email}</h3>
              <h4>ID: {this.props.id}</h4>
              <button className="deleteFriend" type="button" onClick={() => this.props.deleteFriend(this.props.id)}>Delete Friend</button>
            </div>
        )
    }
}

export default Friend