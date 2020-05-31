import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Array from './Array/Array';
import Index from './Array/Index/Index';

import './Sorter.css'

let indexes = [];

class Sorter extends Component {

    constructor(props) {
      super(props);
      this.state = {
        size: 10,
        direction: 'Ascend',
        sort: "Bubble Sort",
        speed: 1,
        accesses: 0,
        comparisons: 0,
        moves: 0,
      };

    }

    componentDidMount() {
      this.ascend();
    }

    ascend = () => {
      let size = this.state.size;
      indexes.length = 0;
      for(let i = 0; i < size; i++) {
          indexes[i] = (<Index 
              data = {{
                  left: `${(100/size)*i}%`, 
                  top: `${100-(100/size)*(i+1)}%`, 
                  width: `${(80/size)}%`, 
                  height: `${(100/size)*(i+1)}%`,
                  color: `rgb(93, 182, 255)`,
                  value: `${(100/size)*(i+1)}`,
              }}
              ></Index>)
      }
      this.setState({direction: "Ascend", accesses: 0, comparisons: 0, moves: 0});
    } 

    descend = () => {
      let size = this.state.size;
      indexes.length = 0;
      for(let i = 0; i < size; i++) {
          indexes[i] = (<Index 
              data = {{
                  left: `${(100/size)*i}%`, 
                  top: `${100-(100/size)*(size-i)}%`, 
                  width: `${(80/size)}%`, 
                  height: `${(100/size)*(size-i)}%`,
                  color: `rgb(93, 182, 255)`,
                  value: `${(100/size)*(size-i)}`,
              }}
              ></Index>)
      }
      this.setState({direction: "Descend", accesses: 0, comparisons: 0, moves: 0});
  }

    shuffle = () => {
      for(let i = 0; i < indexes.length*3; i++) {
        this.swap(Math.floor(Math.random() * Math.floor(indexes.length)), Math.floor(Math.random() * Math.floor(indexes.length)));
      }
      this.setState({accesses: 0, comparisons: 0, moves: 0});
    }

    randomize = () => {
      let directions = ['Ascend', 'Descend'];
      let index = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0);
      let randomDirection = directions[index];
      if(randomDirection === "Ascend")
        this.ascend();
      else
        this.descend();
      let randomSize = Math.floor(Math.random() * (Math.floor(250) - Math.ceil(1) + 1)) + Math.ceil(1);
      this.sizeChange(randomSize);
    }

    speedChange = (newSpeed) => {
      if(newSpeed === "10%") this.setState({speed: 10});
      else if(newSpeed === "20%") this.setState({speed: 5});
      else if(newSpeed === "30%") this.setState({speed: 3.333});
      else if(newSpeed === "40%") this.setState({speed: 2.5});
      else if(newSpeed === "50%") this.setState({speed: 2});
      else if(newSpeed === "60%") this.setState({speed: 1.666});
      else if(newSpeed === "70%") this.setState({speed: 1.428});
      else if(newSpeed === "80%") this.setState({speed: 1.25});
      else if(newSpeed === "90%") this.setState({speed: 1.111});
      else if(newSpeed === "100%") this.setState({speed: 1});
      else if(newSpeed === "200%") this.setState({speed: 0.5});
      else if(newSpeed === "300%") this.setState({speed: 0.3333});
      else if(newSpeed === "400%") this.setState({speed: 0.25});
      else if(newSpeed === "500%") this.setState({speed: 0.2});
      else if(newSpeed === "600%") this.setState({speed: 0.1666});
      else if(newSpeed === "700%") this.setState({speed: 0.1428});
      else if(newSpeed === "800%") this.setState({speed: 0.125});
      else if(newSpeed === "900%") this.setState({speed: 0.1111});
      else if(newSpeed === "1000%") this.setState({speed: 0.1});
    }

    sizeChange = (newSize) => {
      this.setState({size: newSize, accesses: 0, comparisons: 0, moves: 0}, () => {
        if(this.state.direction === "Ascend") {
          this.ascend();
      } else {
          this.descend();
      }
      })
    }

    swap = (index1, index2) => {
      let data1 = {
          left: indexes[index1].props.data.left,
          top: indexes[index2].props.data.top,
          width: indexes[index1].props.data.width,
          height: indexes[index2].props.data.height,
          color: indexes[index2].props.data.color,
          value: indexes[index2].props.data.value,
      }
      let data2 = {
          left: indexes[index2].props.data.left,
          top: indexes[index1].props.data.top,
          width: indexes[index2].props.data.width,
          height: indexes[index1].props.data.height,
          color: indexes[index1].props.data.color,
          value: indexes[index1].props.data.value,
      }
      indexes[index1] = <Index data = {data1}></Index>
      indexes[index2] = <Index data = {data2}></Index>
    }

    changeColor = (index, newColor) => {
      let newData = {
        left: indexes[index].props.data.left,
        top: indexes[index].props.data.top,
        width: indexes[index].props.data.width,
        height: indexes[index].props.data.height,
        color: newColor,
        value: indexes[index].props.data.value,
      }
      indexes[index] = <Index data = {newData}></Index>
    }

    sortChange = (newSort) => {
      this.setState({sort: newSort});
    }

    sort = () => {
      if(this.state.sort === "Bubble Sort") {
        this.bubbleSort();
      } else if(this.state.sort === "Selection Sort") {
        this.selectionSort();
      }
    }

    bubbleSort = () => {
      let timeOut = 0;
      for(let i = 0; i < indexes.length; i++) {
        let swaps = false;
        for(let j = 0; j < indexes.length - i - 1; j++) {
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            setTimeout(() => {
              this.changeColor(j, `rgb(255, 57, 57)`);
              this.changeColor(j+1, `rgb(255, 57, 57)`);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 2});
            }, 40*this.state.speed)
            setTimeout(() => {
              if(this.state.direction === "Ascend") {
                if(parseFloat(indexes[j].props.data.value) > parseFloat(indexes[j+1].props.data.value)) {
                  swaps = true;
                  this.swap(j, j+1);
                  this.setState({moves: this.state.moves + 2});
                }
              } else {
                if(parseFloat(indexes[j].props.data.value) < parseFloat(indexes[j+1].props.data.value)) {
                  swaps = true
                  this.swap(j, j+1);
                  this.setState({moves: this.state.moves + 2});
                }
              }
            }, 80*this.state.speed)
            setTimeout(() => {
              this.changeColor(j, `rgb(93, 182, 255)`);
              this.changeColor(j+1, `rgb(93, 182, 255)`);
              this.setState({});
              // if(swaps === false && j === indexes.length - i - 2) {
              //   var highestTimeoutId = setTimeout(function(){}, 0);
              //   for (let x = 0 ; x < highestTimeoutId ; x++) {
              //     clearTimeout(x); 
              //   }
              // }
            }, 120*this.state.speed)
          }, 120*timeOut*this.state.speed);
          timeOut++;
        }
      }
    }

    selectionSort = () => {
      let timeOut = 0;
      for(let i = 0; i < indexes.length-1; i++) {
        let minIndex = i;
        for(let j = i+1; j <= indexes.length; j++) {
          if(j === indexes.length) {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
              setTimeout(() => {
                this.swap(minIndex, i);
                this.setState({moves: this.state.moves + 2});
              }, 60*this.state.speed);
              setTimeout(() => {
                this.changeColor(i, `rgb(93, 182, 255)`);
                this.setState({});
              }, 120*this.state.speed);
              
            },120*timeOut*this.state.speed)
          } else {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
              setTimeout(() => {
                this.changeColor(minIndex, `rgb(106, 211, 65)`); //green
                this.changeColor(j, `rgb(255, 57, 57)`); //red
                this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 2});
              }, 60*this.state.speed)
              setTimeout(() => {
                if(this.state.direction === "Ascend") {
                  if(parseFloat(indexes[minIndex].props.data.value) > parseFloat(indexes[j].props.data.value)) { 
                    this.changeColor(minIndex, `rgb(93, 182, 255)`) //blue
                    minIndex = j;
                    this.changeColor(minIndex, `rgb(106, 211, 65)`); //green
                  } else {
                    this.changeColor(j, `rgb(93, 182, 255)`) //blue
                  }
                } else {
                  if(parseFloat(indexes[minIndex].props.data.value) < parseFloat(indexes[j].props.data.value)) {
                    this.changeColor(minIndex, `rgb(93, 182, 255)`) //blue
                    minIndex = j;
                    this.changeColor(minIndex, `rgb(106, 211, 65)`); //green
                  } else {
                    this.changeColor(j, `rgb(93, 182, 255)`) //blue
                  }
                }
                this.setState({});
              }, 120*this.state.speed)
            },120*timeOut*this.state.speed);
          }
          timeOut++;
        }
      }
    }

    render() {
      console.log(indexes);
      return(
        <div className = 'Sorter'>
            <Sidebar 
                sizeChange = {this.sizeChange} 
                ascend = {this.ascend}
                descend = {this.descend}
                shuffle = {this.shuffle} 
                randomize = {this.randomize}
                speedChange = {this.speedChange}
                sortChange = {this.sortChange}
                sort = {this.sort}
                accesses = {this.state.accesses}
                comparisons = {this.state.comparisons}
                moves = {this.state.moves}
            ></Sidebar>
            <div className = "Array">
                {indexes}
            </div>
            {/* <Array 
                arrayChange = {this.arrayChange}
                
                indexes = {indexes}
                size = {this.state.size} 
                direction = {this.state.direction} 
                shouldShuffle = {this.state.shouldShuffle}
                // render = {this.state.render}
            ></Array> */}
        </div>  
      );
    }
}

  

export default Sorter;