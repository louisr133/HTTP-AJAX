import React from "react"
import "../css/Post.css"

class Post extends React.Component {


    render(){
        return(
            <div className="post">


                {/* EDIT FRIEND INFO */}
                <form className="changeFriend">
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

                    <input
                        type = "text"
                        placeholder="id"
                        name = "id"
                        value = {this.props.changedFriend.id}
                        onChange = {this.props.handleUpdate}
                    >
                    </input>

                    <button className="changeButton" type="button" onClick={() => this.props.putFriend(this.props.changedFriend.id ,this.props.changedFriend)}>Update Friend</button>
                </form>



                {/* ADD NEW FRIEND */}
                <form className="addFriend">
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
                    <button className="addButton" type="button" onClick={() => this.props.addFriend(this.props.friend)}>Post New Friend</button>
                </form>
            </div> 

            
        )
    }
}

export default Post;