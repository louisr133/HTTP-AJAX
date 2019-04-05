import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends"
import Post from "./components/Post"
import axios from "axios"


class App extends Component {
  constructor(){
    super();
 
    this.state = {
    friends: [],
    friend: {
      name: "",
      age: "",
      email:"",
    },
    changedFriend: {
      name: "",
      age: "",
      email: "",
    }
  }


}

  handleChange = e => {
    this.setState({
      friend : {...this.state.friend, [e.target.name]: e.target.value  }
      
    })
  }

  handleUpdate = e => {
    this.setState({
      changedFriend: {...this.state.changedFriend, [e.target.name]: e.target.value}
    })
  }


  addFriend = person => {
    axios.post(`http://localhost:5000/friends/`, person)
    .then( () => axios.get(`http://localhost:5000/friends`)
      .then(res => (
        this.setState({
          friends: res.data,
        }))
      )
      .catch(err => console.log(err))
      )
    .catch(err => console.log(err))
  }

  putFriend = (id, update) => {
    axios.put(`http://localhost:5000/friends/${id}`, update)
    .then(() => axios.get("http://localhost:5000/friends/")
      .then(res => 
      this.setState({
        friends: res.data,
      })
    ))
    .catch(err => console.log(err))

  }
  
  deleteFriend = personID => {
    this.setState({
      friends: this.state.friends.filter(i => i.id !== personID)
    })
    
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
    .then(res => (
      this.setState({
        friends: res.data,
      })
      )
    )
    .catch(err => console.log(err ))
  }


  render() {

    return (
      <div className="App">
        <Post 
          addFriend={this.addFriend} 
          handleChange={this.handleChange}
          friend={this.state.friend}
          />
        <Friends
          putFriend={this.putFriend}
          handleUpdate={this.handleUpdate}
          changedFriend={this.state.changedFriend}
          deleteFriend={this.deleteFriend} 
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
