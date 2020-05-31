import React, {Component} from 'react';

import './Sorting.css';

class Sorting extends Component { 
    handleDirectionChange = (e) => {
        if(e.target.value === "Ascending") {
            this.props.ascend();
        } else {
            this.props.descend();
        }
    }

    handleSortChange = (e) => {
        this.props.sortChange(e.target.value);
    }

    render() {
        return(
            <>
            <h2 className = "SortingTitle">Sorting</h2>
            <label className = "AlgorithmLabel">Algorithm</label>
            <select className = "SortingSelection" onChange = {this.handleSortChange}>
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
            </select>
            <label className = "DirectionLabel">Direction</label>
            <select className = "DirectionSelection" onChange = {this.handleDirectionChange} defaultValue = 'Ascend'>
                <option>Ascend</option>
                <option>Descend</option>
            </select>
            </>
        );
    }
}

export default Sorting;