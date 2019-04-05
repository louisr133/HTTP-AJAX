import React from "react"

class Friend extends React.Component {
    
    render(){
        return(
            <div> 
              <h1> {this.props.name} </h1>
              <h2> Age: {this.props.age} </h2>
              <h3>Email: {this.props.email}</h3>
              <h4>ID: {this.props.id}</h4>
              <button type="button" onClick={() => this.props.deleteFriend(this.props.id)}>Delete Friend</button>
            </div>
        )
    }
}

export default Friend