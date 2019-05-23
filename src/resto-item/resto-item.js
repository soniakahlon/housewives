import React from "react";

class RestoItem extends React.Component {
  render() {
  
   //API INFO//

    return (
      <div className="Restaurant">
        <h2>{this.props.name}</h2>
       
        <div className="resto__details">

            <div>City: {this.props.city}</div>
            <div>Name of Housewife: {this.props.nameofhw} </div>
            <div>Comments: {this.props.comment}</div>
          </div>
       
      </div>
    );
  }
}
export default RestoItem;