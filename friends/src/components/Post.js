import React from "react"

class Post extends React.Component {


    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={this.props.friend.name}
                        onChange = {this.props.handleChange}
                    >
                    </input>

                    <input
                        type="text"
                        placeholder="age"
                        name="age"
                        value={this.props.friend.age}
                        onChange = {this.props.handleChange}
                    >
                    </input>

                    <input
                        type = "text"
                        placeholder="email"
                        name = "email"
                        value = {this.props.friend.email}
                        onChange = {this.props.handleChange}
                    >
                    </input>
                    <button onClick={() => this.props.addFriend(this.props.friend)}>Post New Friend</button>
                </form>
            </div> 

            
        )
    }
}

export default Post;