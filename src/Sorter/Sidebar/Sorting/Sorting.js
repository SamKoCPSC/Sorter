import React, {Component} from 'react';

import './Sorting.css';

class Sorting extends Component { 
    render() {
        return(
            <>
            <h2 className = "SortingTitle">Sorting</h2>
            <label className = "AlgorithmLabel">Algorithm</label>
            <select className = "SortingSelection">
                <option>Merge Sort</option>
                <option>Quick Sort</option>
                <option>Heap Sort</option>
            </select>
            <label className = "DirectionLabel">Direction</label>
            <select className = "DirectionSelection">
                <option>Ascending</option>
                <option>Descending</option>
            </select>
            </>
        );
    }
}

export default Sorting;