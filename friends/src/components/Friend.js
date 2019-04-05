import React from "react"

class Friend extends React.Component {
    
    render(){
        return(
            <div> 
              <h1> {this.props.name} </h1>
              <h2> Age: {this.props.age} </h2>
              <h3>Email: {this.props.email}</h3>

              <form>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={this.props.changedFriend.name}
                    onChange = {this.props.handleUpdate}
                >
                </input>

                <input
                    type="text"
                    placeholder="age"
                    name="age"
                    value={this.props.changedFriend.age}
                    onChange = {this.props.handleUpdate}
                >
                </input>

                <input
                    type = "text"
                    placeholder="email"
                    name = "email"
                    value = {this.props.changedFriend.email}
                    onChange = {this.props.handleUpdate}
                >
                </input>

                <button onClick={() => this.props.putFriend(this.props.id ,this.props.changedFriend)}>Update Friend</button>
                </form>
            </div>
        )
    }
}

export default Friend