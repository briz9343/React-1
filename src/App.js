
import  React , { Component } from 'react';
import './App.css';

export default class App extends Component {
 constructor(props) {
  super(props);
    this.state = {
      name : 'Student',
      email : 'Student@gmail.com',
      student : {
        name : 'Student1',
        email : 'student1@gmail.com'
      },
      age : 19
    }
 }


btn = () => {
  this.setState({name : 'Employee', email : 'employee@gmail.com'});
}

  render(){
    return(
      <div>
        Name is {this.state.name} <br/>
        email is {this.state.email} <br/>
        Student Name is {this.state.student.name} <br/>
        <button onClick={this.btn}>Submit</button>
      </div>
    )
  }

}
