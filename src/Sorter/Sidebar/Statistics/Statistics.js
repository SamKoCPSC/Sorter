import React, {Component} from 'react';

import './Statistics.css';

class Statistics extends Component { 
    render() {
        return (
            <>
            <h2 className = "StatisticsTitle">Statistics</h2>
            <label className = "AccessLabel">Number of Acesses: {this.props.accesses}</label>
            <label className = "ComparisonLabel">Number of Comparisons: {this.props.comparisons}</label>
            <label className = "MoveLabel">Number of Moves: {this.props.moves}</label>
            </>
        ); 
    }
}

export default Statistics;