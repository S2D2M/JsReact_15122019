import React from 'react';
import '../App.css';

class btn extends React.Component {
    render() {

      return(
       <h1 className="myClass">{this.props.txt}</h1>
      );
    }
  }

export default btn;