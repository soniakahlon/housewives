import React,{Component} from 'react';
import ValidationError from './validationError';
import { Link } from 'react-router-dom'


class LoginForm extends Component {

    state = {
         name: '',
         password: '',
         nameValid: false,
         passwordValid: false,
         formValid: false,
         validationMessages: {
           name: '',
           password: '',
         }
       }
     
   
     updateName(name) {
       this.setState({name}, () => {this.validateName(name)});
     }
     
    updatePassword(password) {
       this.setState({password}, () => {this.validatePassword(password)});
     }
   
     handleSubmit(event) {
       event.preventDefault();
       const { name, password } = this.state;
   
      
      
     }
   
     validateName(fieldValue) {
       const fieldErrors = {...this.state.validationMessages};
       let hasError = false;
   
       fieldValue = fieldValue.trim();
       if(fieldValue.length === 0) {
         fieldErrors.name = 'Name is required';
         hasError = true;
       } 
         
     else {
           fieldErrors.name = '';
           hasError = false;
         }
       
   
       this.setState({
         validationMessages: fieldErrors,
         nameValid: !hasError
       }, this.formValid );
   
    }
   
     validatePassword(fieldValue) {
       const fieldErrors = {...this.state.validationMessages};
       let hasError = false;
   
       fieldValue = fieldValue.trim();
       if(fieldValue.length === 0) {
         fieldErrors.password = 'Password is required';
         hasError = true;
       }  else {
             fieldErrors.password = '';
             hasError = false;
           }
         
       
   
       this.setState({
         validationMessages: fieldErrors,
         passwordValid: !hasError
       }, this.formValid );
   
     }
   
     
   
     formValid() {
       this.setState({
         formValid: this.state.nameValid && this.state.passwordValid
       });
     }
   
     render () {
       return (
        <form className="login" onSubmit={e => this.handleSubmit(e)}>
          <h2>Login</h2>
        
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" className="registration__control"
              name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
            <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.name}/>  
          </div>
          <div className="form-group">
             <label htmlFor="password">Password *</label>
             <input type="password" className="registration__control"
              name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
             <div className="registration__hint">6 to 72 characters, must include a number</div>
             <ValidationError hasError={!this.state.passwordValid} message={this.state.validationMessages.password}/>
          </div>
        
   
          <div className="Login__button__group">
           <button type="reset" className="Login__button">
               Cancel
           </button>
           <button type="submit" className="Login__button" disabled={!this.state.formValid}><Link to='/homepage'>
               Save
          </Link> </button>
          </div>
        </form>
      )
    }
   }
   export default LoginForm;