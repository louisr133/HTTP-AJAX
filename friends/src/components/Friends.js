import React from "react"
import Friend from "./Friend"

class Friends extends React.Component {


    render (){
        return(
            this.props.friends.map(f => {
               return (
                <Friend 
                    deleteFriend={this.props.deleteFriend} 
                    key={f.id}
                    id={f.id}
                    name={f.name}
                    age={f.age} 
                    email={f.email}
                /> 
               )
            })
        )
    }
}

export default Friends;