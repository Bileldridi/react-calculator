import React, { Component } from 'react';
import './ClearButton.css';


class ClearButton extends Component {

   

    render(){
        return(
           <div 
           onClick={() => this.props.handleClick(this.props.children)}
           className="clear-btn">
               {this.props.children}
           </div>
        )
    }

}
export default ClearButton;