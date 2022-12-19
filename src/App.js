import React, { Component } from 'react'

const generalUsers = ()=>[
  "users1",
  "users2",
  "users3",
  "users4",
  "users5",
  "users6",
  "users7",
  "users8",
  "users9",
  "users10",
];

export default class App extends Component {
    constructor(){
      super()
      this.state = {
        user:[],
        showUsersList: true,
      }
    }
    componentDidMount(){
      const userFromBe = generalUsers();
      this.setState({
        user:userFromBe,
      })
      console.log("componentDidMount");
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState !== this.state.user){
        document.title = `${this.state.user.length} users left`;
      }
    }
    buttonClickHender = ()=>{
      const randomList =  this.state.user[ Math.floor(Math.random()*this.state.user.length)];
      const randomUser = this.state.user.filter((item)=>{
        return item !== randomList
      });
      this.setState({
        user:randomUser
      })
     }
  render() {
    return (
      <div>
        <button onClick={this.buttonClickHender}> Click me</button>
        <button onClick={()=>{
          this.setState({showUsersList: ! this.state.showUsersList})
        }}>{this.state.showUsersList? "Hide" : "Show"} users</button>
       { this.state.showUsersList && (<RenderUsers  userslist={this.state.user}/>
        )}

      </div>
    )
  }
}
class RenderUsers extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
      document.title = `${this.props.userslist.length} users`

  }
  componentWillUnmount(){
    console.log(document.title);
    document.title = "cleaned";
  } 
  render(){
    return <div>
      {this.props.userslist.map((item,index)=>{
        return <p key={index}>{item} </p>
      }) }
    </div>
  }
}

