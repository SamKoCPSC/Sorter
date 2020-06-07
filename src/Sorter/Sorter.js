/* eslint-disable no-loop-func */
import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Index from './Array/Index/Index';

import './Sorter.css'

let indexes = [];

class Sorter extends Component {

    constructor(props) {
      super(props);
      this.state = {
        direction: 'Ascend',
        sort: "Bubble Sort",
        size: 50,
        speed: 1,
        distribution: "Randomly Sorted",
        accesses: 0,
        comparisons: 0,
        moves: 0,
      };

    }

    componentDidMount() {
      this.ascend(this.state.size);
    }

    ascend = (x) => {
      let size = x;
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

    descend = (x) => {
      let size = x;
      indexes.length = 0;
      for(let i = 0; i < size; i++) {
          indexes[i] = (<Index 
              data = {{
                  left: `${(100/size)*i}%`, 
                  top: `${100-(100/size)*(size-i)}%`, 
                  width: `${(80/size)}%`, 
                  height: `${(100/size)*(size-i)}%`,
                  color: `rgb(93, 182, 255)`,
                  value: `${100-(100/size)*(size-i)}`,
              }}
              ></Index>)
      }
      this.setState({direction: "Descend", accesses: 0, comparisons: 0, moves: 0});
  }

    shuffle = () => {
      if(this.state.distribution === "Randomly Sorted") {
        for(let i = 0; i < indexes.length*3; i++) {
          this.swap(Math.floor(Math.random() * Math.floor(indexes.length)), Math.floor(Math.random() * Math.floor(indexes.length)));
        }
      } else if(this.state.distribution === "Nearly Sorted") {
        for(let i = 0; i < indexes.length-3; i+=4){
          for(let j = 0; j < 2; j++) {
            let rand1 = Math.floor(Math.random() * (Math.floor(i+3) - Math.ceil(i) + 1)) + Math.ceil(i);
            let rand2 = Math.floor(Math.random() * (Math.floor(i+3) - Math.ceil(i) + 1)) + Math.ceil(i);
            this.swap(rand1, rand2);
          }
        }
      } else if(this.state.distribution === "Partially Sorted") {
        for(let i = 0; i < indexes.length*3; i++) {
          let rand1 = Math.floor(Math.random() * (Math.floor(indexes.length-1) - Math.ceil(Math.floor(indexes.length/2)) + 1)) + Math.ceil(Math.floor(indexes.length/2));
          let rand2 = Math.floor(Math.random() * (Math.floor(indexes.length-1) - Math.ceil(Math.floor(indexes.length/2)) + 1)) + Math.ceil(Math.floor(indexes.length/2));
          this.swap(rand1, rand2);
        }
      } else if(this.state.distribution === "Periodically Sorted") {
        for(let i = 0; i < indexes.length/4; i++) {
          this.swap(Math.floor(Math.random() * Math.floor(indexes.length)), Math.floor(Math.random() * Math.floor(indexes.length)));
        }
      } else if(this.state.distribution === "Reverse Sorted") {
        for(let i = 0; i < Math.floor(indexes.length/2); i++) {
          this.swap(i, indexes.length-1-i);
        }
      }
      this.setState({accesses: 0, comparisons: 0, moves: 0});
    }

    randomize = () => {
      let directions = ['Ascend', 'Descend'];
      let index = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0);
      let randomDirection = directions[index];
      if(randomDirection === "Ascend")
        this.ascend(this.state.size);
      else
        this.descend(this.state.size);
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
      this.setState({size: newSize, accesses: 0, comparisons: 0, moves: 0});
      if(this.state.direction === "Ascend") {
          this.ascend(newSize);
      } else {
          this.descend(newSize);
      }
    }

    distributionChange = (newDis) => {
      this.setState({distribution: newDis, accesses: 0, comparisons: 0, moves: 0});
      if(this.state.direction === "Ascend") {
        this.ascend(this.state.size);
      } else {
        this.descend(this.state.size);
      }
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

    changeHeight = (index, newHeight) => {
      let newData = {
        left: indexes[index].props.data.left,
        top: `${100-newHeight}%`,
        width: indexes[index].props.data.width,
        height: `${newHeight}%`,
        color: indexes[index].props.data.color,
        value: newHeight,
      }
      indexes[index] = <Index data = {newData}></Index>
    }

    copyArrayValues = () => {
      let newArr = [];
      for(let i = 0; i < indexes.length; i++) {
        newArr.push(parseFloat(indexes[i].props.data.value));
      }
      return newArr;
    }

    sortChange = (newSort) => {
      this.setState({sort: newSort});
    }

    sort = () => {
      if(this.state.sort === "Bubble Sort") {
        this.bubbleSort();
      } else if(this.state.sort === "Selection Sort") {
        this.selectionSort();
      } else if(this.state.sort === "Insertion Sort") {
        this.insertionSort();
      } else if(this.state.sort === "Shell Sort") {
        this.shellSort();
      } else if(this.state.sort === "Merge Sort") {
        this.mergeSort();
      } else if(this.state.sort === "Quick Sort") {
        this.quickSort();
      } else if(this.state.sort === "Heap Sort") {
        this.heapSort();
      }
    }

    sorted = (currTime) => {
      // console.log("called");
      let timeOut = 0;
      for(let i = 0; i < indexes.length; i++) {
        setTimeout((index) => {
          this.changeColor(index, `rgb(30, 255, 0)`) ;
          this.setState({});
        }, (700/this.state.size)*timeOut+currTime, i);
        timeOut++;
      }
      for(let i = 0; i < indexes.length; i++) {
        setTimeout((index) => {
          this.changeColor(index, `rgb(93, 182, 255)`) ;
          this.setState({});
        }, (700/this.state.size)*timeOut+currTime, i);
        timeOut++;
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
              if(parseFloat(indexes[j].props.data.value) > parseFloat(indexes[j+1].props.data.value)) {
                swaps = true;
                this.swap(j, j+1);
                this.setState({moves: this.state.moves + 2});
              }
            }, 80*this.state.speed)
            setTimeout(() => {
              this.changeColor(j, `rgb(93, 182, 255)`);
              this.changeColor(j+1, `rgb(93, 182, 255)`);
              this.setState({});
              if(i === indexes.length - 1 && j ===  indexes.length - 2) this.sorted();
            }, 120*this.state.speed)
          }, 120*timeOut*this.state.speed);
          timeOut++;
        }
      }
      this.sorted(120*timeOut*this.state.speed+120);
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
                if(parseFloat(indexes[minIndex].props.data.value) > parseFloat(indexes[j].props.data.value)) { 
                  this.changeColor(minIndex, `rgb(93, 182, 255)`) //blue
                  minIndex = j;
                  this.changeColor(minIndex, `rgb(106, 211, 65)`); //green
                } else {
                  this.changeColor(j, `rgb(93, 182, 255)`) //blue
                }
                this.setState({});
              }, 120*this.state.speed)
            },120*timeOut*this.state.speed);
          }
          timeOut++;
        }
      }
      this.sorted(120*timeOut*this.state.speed+120);
    }

    insertionSort = () => {
      let arrayOfValues = [];
      for(let i = 0; i < indexes.length; i++) {
        arrayOfValues.push(parseFloat(indexes[i].props.data.value));
      }
      let correctPos = [];
      for(let i = 1; i < indexes.length; i++) {
        correctPos.unshift(i);
        for(let j = i; j > 0; j--) {
          if(arrayOfValues[j] < arrayOfValues[j-1]) {
            let temp = arrayOfValues[j];
            arrayOfValues[j] = arrayOfValues[j-1];
            arrayOfValues[j-1] = temp
            correctPos.shift();
            correctPos.unshift(j-1)
          }
        }
      }
      let timeOut = 0;
      for(let i = 1; i < indexes.length; i++) {
        let placement = correctPos.pop();
        for(let j = i; j >= placement; j--) {
          if(j === 0) break;
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            setTimeout(() => {
              this.changeColor(j, `rgb(255, 57, 57)`);
              this.changeColor(j-1, `rgb(255, 57, 57)`);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 2});
            }, 40*this.state.speed)
            setTimeout(() => {
                if(parseFloat(indexes[j].props.data.value) < parseFloat(indexes[j-1].props.data.value)) {
                  this.swap(j, j-1);
                  this.setState({moves: this.state.moves + 2});
                }
            }, 80*this.state.speed)
            setTimeout(() => {
              this.changeColor(j, `rgb(93, 182, 255)`);
              this.changeColor(j-1, `rgb(93, 182, 255)`);
              this.setState({});
            }, 120*this.state.speed)
          }, 120*timeOut*this.state.speed);
          timeOut++;
        }
      }
      this.sorted(120*timeOut*this.state.speed+120);
    }

    shellSort = () => {
      let arrayOfValues = [];
      for(let i = 0; i < indexes.length; i++) {
        arrayOfValues.push(parseFloat(indexes[i].props.data.value));
      }
      let correctPos = [];
      for(let gap = Math.floor(indexes.length/2); gap > 0; gap = Math.floor(gap/2)) {
        // console.log(gap);
        for(let i = gap; i < indexes.length; i++) {
          correctPos.unshift(i);
          for(let j = i; j >= gap; j-=gap) {
            if(arrayOfValues[j] < arrayOfValues[j-gap]) {
              let temp = arrayOfValues[j];
              arrayOfValues[j] = arrayOfValues[j-gap];
              arrayOfValues[j-gap] = temp
              correctPos.shift();
              correctPos.unshift(j-gap)
              console.log(correctPos);
            }
          }
        }
      }
      let timeOut = 0;
      for(let gap = Math.floor(indexes.length/2); gap > 0; gap = Math.floor(gap/2)) {
        for(let i = gap; i < indexes.length; i++) {
          let placement = correctPos.pop();
          for(let j = i; j >= placement; j-=gap) {
            if(j < gap) break;
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
              setTimeout(() => {
                this.changeColor(j, `rgb(255, 57, 57)`);
                this.changeColor(j-gap, `rgb(255, 57, 57)`);
                this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 2});
              }, 40*this.state.speed)
              setTimeout(() => {
                  if(parseFloat(indexes[j].props.data.value) < parseFloat(indexes[j-gap].props.data.value)) {
                    this.swap(j, j-gap);
                    this.setState({moves: this.state.moves + 2});
                  }
              }, 80*this.state.speed)
              setTimeout(() => {
                this.changeColor(j, `rgb(93, 182, 255)`);
                this.changeColor(j-gap, `rgb(93, 182, 255)`);
                this.setState({});
              }, 120*this.state.speed)
            }, 120*timeOut*this.state.speed);
            timeOut++;
          }
        }
      }
      this.sorted(120*timeOut*this.state.speed+120);
    }

    mergeSort = () => {
      let timeOut = 0;
      let temp = this.copyArrayValues();
      let aux = [];
      for(let size = 1; size < indexes.length; size*=2) {
        for(let left = 0; left < indexes.length; left += 2*size) {
          let i = left;
          let j = Math.min(left + size, indexes.length);
          let leftBound = j;
          let rightBound = Math.min(j + size, indexes.length); //
          while(i < leftBound && j < rightBound) {
            setTimeout((index1, index2) => {
              console.log(index2)
              this.changeColor(index1, `rgb(255, 57, 57)`);
              this.changeColor(index2, `rgb(255, 57, 57)`);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1});
            }, 40*this.state.speed*timeOut, i, j);
            timeOut++;
            if(temp[i] <= temp[j]) {
              setTimeout((index) => {
                this.changeColor(index, `rgb(231, 37, 222)`);
                this.setState({accesses: this.state.accesses + 1, moves: this.state.moves + 1});
              }, 40*this.state.speed*timeOut, i);
              timeOut++;
              setTimeout((index1, index2) => {
                this.changeColor(index1, `rgb(93, 182, 255)`);
                this.changeColor(index2, `rgb(93, 182, 255)`);
                this.setState({});
              }, 40*this.state.speed*timeOut, i, j)
              timeOut++;
              aux.push(temp[i++]);
            } else {
              setTimeout((index) => {
                this.changeColor(index, `rgb(231, 37, 222)`);
                this.setState({accesses: this.state.accesses + 1, moves: this.state.moves + 1});
              }, 40*this.state.speed*timeOut, j);
              timeOut++;
              setTimeout((index1, index2) => {
                this.changeColor(index1, `rgb(93, 182, 255)`);
                this.changeColor(index2, `rgb(93, 182, 255)`);
                this.setState({});
              }, 40*this.state.speed*timeOut, i, j)
              timeOut++;
              aux.push(temp[j++]);
            }
          }
          while(i < leftBound) {
            setTimeout((index) => {
              this.changeColor(index, `rgb(255, 57, 57)`);
              this.setState({accesses: this.state.accesses + 2});
            }, 40*this.state.speed*timeOut, i);
            timeOut++;
            setTimeout((index) => {
              this.changeColor(index, `rgb(231, 37, 222)`);
              this.setState({accesses: this.state.accesses + 1, moves: this.state.moves + 1});
            }, 40*this.state.speed*timeOut, i);
            timeOut++;
            setTimeout((index) => {
              this.changeColor(index, `rgb(93, 182, 255)`);
              this.setState({});
            }, 40*this.state.speed*timeOut, i)
            timeOut++;
            aux.push(temp[i++]);
          }
          while(j < rightBound) {
            setTimeout((index) => {
              this.changeColor(index, `rgb(255, 57, 57)`);
              this.setState({accesses: this.state.accesses + 2});
            }, 40*this.state.speed*timeOut, j);
            timeOut++;
            setTimeout((index) => {
              this.changeColor(index, `rgb(231, 37, 222)`);
              this.setState({accesses: this.state.accesses + 1, moves: this.state.moves + 1});
            }, 40*this.state.speed*timeOut, j);
            timeOut++;
            setTimeout((index) => {
              this.changeColor(index, `rgb(93, 182, 255)`);
              this.setState({});
            }, 40*this.state.speed*timeOut, j)
            timeOut++;
            aux.push(temp[j++]);
          }
          for(let k = left; k < rightBound; k++) {
            temp[k] = aux.shift();
            setTimeout((index, newHeight) => {
              this.changeColor(k, `rgb(231, 37, 222)`);
              this.changeHeight(index, newHeight);
              this.setState({accesses: this.state.accesses + 2})
            }, 40*this.state.speed*timeOut, k, temp[k])
            timeOut++;
          }
          for(let k = left; k < rightBound; k++) {
            setTimeout((index) => {
              this.changeColor(k, `rgb(93, 182, 255)`);
              this.setState({});
            }, 40*this.state.speed*timeOut, k)
          }
        }
      }
      this.sorted(40*timeOut*this.state.speed+120);
    }

    quickSort = () => {
      let timeOut = 0;
      let temp = this.copyArrayValues();
      let stack = [];
      let top = -1;
      stack[++top] = 0;
      stack[++top] = indexes.length-1;
  

      while(top >= 0) {
        let h = stack[top--];
        let l = stack[top--];
        let randomIndex = Math.floor(Math.random() * (Math.floor(h) - Math.ceil(l) + 1)) + Math.ceil(l)
        let pivot = temp[randomIndex];
        setTimeout((index) => {
          this.changeColor(index, `rgb(255, 216, 89)`);
          this.setState({})
        }, 40*this.state.speed*timeOut, randomIndex);
        timeOut++;
        setTimeout((index1, index2) => {
          this.swap(index1, index2);
          this.setState({accesses: this.state.accesses + 2, moves: this.state.moves + 2})
        }, 40*this.state.speed*timeOut, randomIndex, h);
        timeOut++;
        let x = temp[randomIndex];
        temp[randomIndex] = temp[h];
        temp[h] = x;
        let i = l-1;
        setTimeout((index) => {
          this.changeColor(index, `rgb(106, 211, 65)`);
          this.setState({accesses: this.state.accesses + 3, comparisons: this.state.comparisons + 1, moves: this.state.moves + 2});
        }, 40*this.state.speed*timeOut, i+1);
        timeOut++;
        for(let j = l; j <= h-1; j++) {
          setTimeout((index) => {
            this.changeColor(index, `rgb(255, 127, 77)`);
            this.setState({accesses: this.state.accesses + 1});
          }, 40*this.state.speed*timeOut, j) 
          timeOut++;
          if(temp[j] <= pivot) {
            i++;
            setTimeout((index1, index2) => {
              this.changeColor(index1, `rgb(255, 57, 57)`);
              this.changeColor(index2, `rgb(255, 57, 57)`);
              this.setState({});
            }, 40*this.state.speed*timeOut, i, j);
            timeOut++;
            setTimeout((index1, index2) => {
              this.swap(index1, index2);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1, moves: this.state.moves + 2});
            }, 40*this.state.speed*timeOut, i, j);
            timeOut++;
            setTimeout((index1, index2) => {
              this.changeColor(index1+1, `rgb(106, 211, 65)`);
              this.changeColor(index1, `rgb(93, 182, 255)`);
              this.changeColor(index2, `rgb(93, 182, 255)`);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1, moves: this.state.moves + 2});
            }, 40*this.state.speed*timeOut, i, j);
            timeOut++;
            let t = temp[i];
            temp[i] = temp[j];
            temp[j] = t;
          } else {
            setTimeout((index) => {
              this.changeColor(index, `rgb(106, 211, 65)`);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1});
            }, 40*this.state.speed*timeOut, i+1);
            timeOut++;
          }
          setTimeout((index) => {
            // if(i === l-1) this.changeColor(i+1, `rgb(106, 211, 65)`)
            this.changeColor(index, `rgb(93, 182, 255)`);
            this.setState({});
          }, 40*this.state.speed*timeOut, j) 
          timeOut++;
        }
        setTimeout((index1, index2) => {
          this.swap(index1, index2);
          this.setState({accesses: this.state.accesses + 2, moves: this.state.moves + 2})
        }, 40*this.state.speed*timeOut, i+1, h)
        timeOut++;
        setTimeout((index1, index2) => {
          this.changeColor(i+1, `rgb(93, 182, 255)`);
          this.changeColor(h, `rgb(93, 182, 255)`);
        }, 40*this.state.speed*timeOut, i+1, h);
        setTimeout((index) => {
          this.changeColor(index, `rgb(93, 182, 255)`);
          this.setState({})
        }, 40*this.state.speed*timeOut, randomIndex);
        timeOut++;
        let t = temp[i+1];
        temp[i+1] = temp[h];
        temp[h] = t;
        let p = i+1;
        if(p+1 < h) {
          stack[++top] = p + 1;
          stack[++top] = h;
        }
        if(p-1 > l) {
          stack[++top] = l;
          stack[++top] = p - 1;
        }
      }
      this.sorted(40*timeOut*this.state.speed+120);
    }

    heapSort = () => {
      // let arr = [];
      // arr[0] = 1;
      // console.log(arr[0] > arr[1] || arr[1] == null);
      // console.log(arr[1]);
      let timeOut = 0;
      let temp = this.copyArrayValues();
      for(let i = Math.floor(indexes.length/2); i >= 0; i--) {
        if(temp[2*i+2] == null && temp[2*i+1] == null) continue;
        let maxChild = temp[2*i+1] > temp[2*i+2] || temp[2*i+2] == null ? 1 : 2;
        setTimeout(() => {
          this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1});
        }, 40*this.state.speed*timeOut);
        timeOut++;
        if(temp[i] < temp[2*i+maxChild]) {
          let j = i;
          while(temp[j] < temp[2*j+maxChild]) {
            setTimeout((index1, index2) => {
              this.changeColor(index1, `rgb(255, 57, 57)`);
              this.changeColor(index2, `rgb(255, 57, 57)`);
              this.setState({})
            }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
            timeOut++;
            setTimeout((index1, index2) => {
              this.swap(index1, index2);
              this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1, moves: this.state.moves + 2})
            }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
            timeOut++;
            setTimeout((index1, index2) => {
              this.changeColor(index1, `rgb(93, 182, 255)`);
              this.changeColor(index2, `rgb(93, 182, 255)`);
              this.setState({})
            }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
            timeOut++;
            let t = temp[j];
            temp[j] = temp[2*j+maxChild];
            temp[2*j+maxChild] = t;
            j = 2*j+maxChild
            maxChild = temp[2*j+1] > temp[2*j+2] || temp[2*j+2] == null ? 1 : 2;
          }
        }
      }
      for (let i = indexes.length - 1; i > 0; i--) {
        setTimeout((index1, index2) => {
          this.changeColor(index1, `rgb(255, 57, 57)`);
          this.changeColor(index2, `rgb(255, 57, 57)`);
          this.setState({})
        }, 40*this.state.speed*timeOut, 0, i);
        timeOut++;
        setTimeout((index1, index2) => {
          this.swap(index1, index2);
          this.setState({accesses: this.state.accesses + 2, moves: this.state.moves + 2})
        }, 40*this.state.speed*timeOut, 0, i);
        timeOut++;
        setTimeout((index1, index2) => {
          this.changeColor(index1, `rgb(93, 182, 255)`);
          this.changeColor(index2, `rgb(93, 182, 255)`);
          this.setState({})
        }, 40*this.state.speed*timeOut, 0, i);
        timeOut++;
        let t = temp[i];
        temp[i] = temp[0];
        temp[0] = t;
        let j = 0;
        if(temp[1] == null || temp[2] == null) break;
        let maxChild = temp[1] > temp[2] || i === 2 ? 1 : 2;
        while(temp[j] < temp[2*j+maxChild] && 2*j+maxChild < i) {
          setTimeout((index1, index2) => {
            this.changeColor(index1, `rgb(255, 57, 57)`);
            this.changeColor(index2, `rgb(255, 57, 57)`);
            this.setState({})
          }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
          timeOut++;
          setTimeout((index1, index2) => {
            this.swap(index1, index2);
            this.setState({accesses: this.state.accesses + 2, comparisons: this.state.comparisons + 1, moves: this.state.moves + 2})
          }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
          timeOut++;
          setTimeout((index1, index2) => {
            this.changeColor(index1, `rgb(93, 182, 255)`);
            this.changeColor(index2, `rgb(93, 182, 255)`);
            this.setState({})
          }, 40*this.state.speed*timeOut, j, 2*j+maxChild);
          timeOut++;
          let t = temp[j];
          temp[j] = temp[2*j+maxChild];
          temp[2*j+maxChild] = t;
          j = 2*j+maxChild
          maxChild = temp[2*j+1] > temp[2*j+2] || temp[2*j+2] == null? 1 : 2;
        }
      }
      this.sorted(40*timeOut*this.state.speed+120);
    }

    render() {
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
                distributionChange = {this.distributionChange}
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