import React, {Component} from 'react';

import './Panel.css';

class Panel extends Component { 
    handleShuffle = () => {
        this.props.shuffle();
        this.handleShuffleHelper(1, 10);
    }

    handleShuffleHelper = (curr, max) => {
        setTimeout(() => {
            this.props.shuffle();
            if(curr < max) {
                let newCurr = curr+1;
                this.handleShuffleHelper(newCurr, max);
            }
        }, 100);
    }

    handleSort = (e) => {
        this.props.sort();
    }

    handleRandomize = (e) => {
        this.props.randomize();
    }

    render() {
        return (
            <>
                <button className = "Shuffle" onClick = {this.handleShuffle}>Shuffle</button>
                <button className = "Sort" onClick = {this.handleSort}>Sort</button>
                <button className = "Randomize" onClick = {this.handleRandomize}>Randomize</button>
                <button className = "About">About</button>
                <button className = "Help">Help</button>
                <button className = "Info">Info</button>
            </>
        );
    }
}

export default Panel;