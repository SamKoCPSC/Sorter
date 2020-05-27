import React, {Component} from 'react';
import Node from './Node/Node';
import Header from './Sidebar/Sidebar';

import './Sorter.css'

class Sorter extends Component {

    render() {
      let arr = ["1", "2", "3"];
      return(
        <div className = 'Sorter'>
            <Header></Header>
          {/* {
              arr.map(index => {
                  return <Node key = {index}></Node>
              })
          } */}
        </div>  
      );
    }
  }

  export default Sorter;