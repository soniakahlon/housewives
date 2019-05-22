import React, { Component } from 'react';
import HomePage from './homepage';
import LoginForm from './login-form'
import RegistrationForm from './register-form';
import SearchForm from './search-form';
import CommentForm from './comment-form';
import SightingForm from './sighting-form';
import RestoList from './resto-list';
import RestoItem from './resto-item';
import LandingPage from './landing-page'
import {  Route   } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import config from './config'

class App extends Component {
  state = {
    date: "",
    city: "",
};

  

setCity(city) {
  this.setState({
    city
  });
}

setDate(date) {
  this.setState({
    Date
  });
}


addRestaurant(restaurant) {
  this.setState({
    restaurants: [...this.state.restaurants, restaurant],
  });
}

addComment(comment) {
  this.setState({
    comments: [...this.state.comments, comment],
  });
}


render() {
  return (
   <div>
  
    <Router>
    <div className="App">
     <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/restolist" component={RestoList} />
        <Route exact path="/restoitem/:restoId" component={RestoItem} />


        <Route exact path="/login"  component={LoginForm}/>
       
        
        <Route exact path="/register" component={RegistrationForm}/>
           

        <Route exact path="/comment" 
        render={( routerProps ) => {
              return <CommentForm
              handleAddComment={comment => this.addComment(comment)}
              
             />  }} />
        
        <Route exact path="/sighting" 
        render={( routerProps ) => {
             return <SightingForm
             handleAddResto={restaurant => this.addRestaurant(restaurant)}
           
           /> }} />

         <Route exact path="/search" 
              render={( routerProps ) => {
              return <SearchForm
               onSearchItem={this.handleSearchItem}
               dateChanged={date => this.setDate(date)}
               cityChanged={city => this.setCity(city)} />
           }} />

       
      </main>
      </div>
    </Router>
    </div>
  );
}
}


export default App


