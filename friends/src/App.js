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
      id: '',
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
      }).catch(err => console.log(err))
    ))
    .catch(err => console.log(err))

  }
  
  deleteFriend = personID => {
    axios.delete(`http://localhost:5000/friends/${personID}`)
    .then(() => axios.get("http://localhost:5000/friends/") 
    .then(res => this.setState({
      friends: res.data
    })))
    .catch(err => console.log(err))
    
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
    .then(res => (
      this.setState({
        friends: res.data,
      })))
    .catch(err => console.log(err ))
  }

  
  
  render() {
    if(this.state === null){
        return <div> Loading </div>
      }
    return (
      <div className="App">
        <Post 
          addFriend={this.addFriend} 
          handleChange={this.handleChange}
          friend={this.state.friend}

          putFriend={this.putFriend}
          handleUpdate={this.handleUpdate}
          changedFriend={this.state.changedFriend}
          />
        <Friends
          deleteFriend={this.deleteFriend} 
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
