import React from "react"
import Friend from "./Friend"

class Friends extends React.Component {


    render (){
        return(
            this.props.friends.map(f => {
               return (
                <Friend 
                    putFriend={this.props.putFriend}
                    handleUpdate={this.props.handleUpdate}
                    changedFriend={this.props.changedFriend}
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