import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';

class App extends Component {
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            npiNumber:"",
            address:"",
            phoneNumber:"",
            email:""
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]:event.target.value });
    }


  render(){  
  return (
    <div className="App">
      <Route exact path="/" render={(props)=> <RegistrationForm {...props} 
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        npiNumber={this.state.npiNumber}
        address={this.state.address}
        phoneNumber={this.state.phoneNumber}
        email={this.state.email}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}/>} />
    <Route exact path="/confirm" render={(props)=><ConfirmationPage {...props} formInfo={this.state} />} />
    </div>
  );
    }
}

export default App;
