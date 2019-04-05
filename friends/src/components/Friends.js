import React from "react"
import Friend from "./Friend"
import "../css/Friends.css"

class Friends extends React.Component {


    render (){
        return(
            this.props.friends.map(f => {
               return (
                <div className="friendsContainer">
                    <Friend 
                        deleteFriend={this.props.deleteFriend} 
                        key={f.id}
                        id={f.id}
                        name={f.name}
                        age={f.age} 
                        email={f.email}
                    />     
                </div>
                
               )
            })
        )
    }
}

export default Friends;