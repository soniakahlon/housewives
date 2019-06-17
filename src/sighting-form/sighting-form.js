import React, { Component } from  'react';
import config from '../config'


class SightingForm extends Component {
  state = {
      name: "",
      city:"",
      nameOfHw:"",
      comments: "",
     
    };
  

  nameChanged(name) {
    this.setState({
      name
    });
  }

  cityChanged(city){
    this.setState({
      city
    });
  }

  commentChanged(comment) {
    this.setState({
     comment
    });
  }

  nameOfHwChanged(nameOfHw) {
    this.setState({
      nameOfHw
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const restaurant = (({name, city, comment, nameOfHw}) => ({name, city, comment, nameOfHw}))(this.state);
    const url ='config.API_ENDPOINT';
    const options = {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.API_KEY}`
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          name: "",
          city: "",
          comment: "",
          nameOfHw: ""
        });
        this.props.handleAddResto(restaurant);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
   

  render() {
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

    return (
      <div className="addSighting">
        <h2>Add Sighting</h2>
        { error }
        <form className="addSighting__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.nameChanged(e.target.value)}/>
          <label htmlFor="city">City :</label>  
          <input
            type="text"
            name="city"
            id="city "
            placeholder="city"
            value={this.state.city}
            onChange={e => this.cityChanged(e.target.value)}/>
          <label htmlFor="nameOfHw">Name of Housewife:</label>  
          <textarea
            name="nameOfHw"
            id="nameOfHw"
            placeholder="nameOfHw"
            value={this.state.nameOfHw}
            onChange={e => this.nameOfHwChanged(e.target.value)}/>
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={e => this.commentChanged(e.target.value)}/>

          <div className="addSighting__buttons">
            <button type="reset">Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default SightingForm;