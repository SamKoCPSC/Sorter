import React, {Component} from 'react';
import Index from './Index/Index';

import './Array.css';

class Array extends Component {

    constructor(props) {
        super(props);
        this.state = {
          indexes: [],
          action: this.props.action,
        };
    }

    handleArrayChange = (newArray) => {
        this.props.arrayChange(newArray);
    }

    // componentDidUpdate() {
    //     this.updateAndNotify();
    // }
    
    // updateAndNotify = () => {
    //     console.log("update");
    //     this.shuffleArray(indexes);
    // }

    render() {
        let indexes = [];
        indexes = this.props.indexes;
        if(this.props.render) {
           
        } else if(this.props.shouldShuffle > 0) {
            this.shuffleArray(indexes);
        } else if(this.props.direction === 'Ascending') {
            this.ascendingArray(indexes);
        } else if(this.props.direction === 'Descending') {
            this.descendingArray(indexes);
        }

        this.handleArrayChange(indexes);
        return(
            <>
            <div className = "Array">
                {indexes}
            </div>
            </>
        );
    }

    ascendingArray(indexes) {
        let size = this.props.size;
        indexes.length = 0;
        for(let i = 0; i < size; i++) {
            indexes[i] = (<Index 
                data = {{
                    left: `${(100/size)*i}%`, 
                    top: `${100-(100/size)*(i+1)}%`, 
                    width: `${(80/size)}%`, 
                    height: `${(100/size)*(i+1)}%`,
                    isComparing: false,
                    value: `${(100/size)*(i+1)}`,
                }}
                ></Index>)
        }
    }

    descendingArray(indexes) {
        let size = this.props.size;
        indexes.length = 0;
        for(let i = 0; i < size; i++) {
            indexes[i] = (<Index 
                data = {{
                    left: `${(100/size)*i}%`, 
                    top: `${100-(100/size)*(size-i)}%`, 
                    width: `${(80/size)}%`, 
                    height: `${(100/size)*(size-i)}%`,
                    isComparing: false,
                    value: `${(100/size)*(size-i)}`,
                }}
                ></Index>)
        }
    }

    shuffleArray(indexes) {
        for(let i = 0; i < indexes.length*3; i++) {
            this.swapIndexes(indexes, Math.floor(Math.random() * Math.floor(indexes.length)), Math.floor(Math.random() * Math.floor(indexes.length)));
        }
    }

    swapIndexes(indexes, index1, index2) {
        let data1 = indexes[index1].props.data;
        let data2 = indexes[index2].props.data;
        data1 = {
            left: indexes[index1].props.data.left,
            top: indexes[index2].props.data.top,
            width: indexes[index1].props.data.width,
            height: indexes[index2].props.data.height,
            isComparing: indexes[index1].props.isComparing,
            value: indexes[index2].props.data.value,
        }
        data2 = {
            left: indexes[index2].props.data.left,
            top: indexes[index1].props.data.top,
            width: indexes[index2].props.data.width,
            height: indexes[index1].props.data.height,
            isComparing: indexes[index2].props.isComparing,
            value: indexes[index1].props.data.value,
        }
        indexes[index1] = <Index data = {data1}></Index>
        indexes[index2] = <Index data = {data2}></Index>
    }
}


export default Array;