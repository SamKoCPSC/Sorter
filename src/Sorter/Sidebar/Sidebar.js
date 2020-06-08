import React, {Component} from 'react';
import Sorting from './Sorting/Sorting';
import Setting from './Setting/Setting';
import Statistics from './Statistics/Statistics';
import Panel from './Panel/Panel';

import './Sidebar.css';


class Sidebar extends Component {
    render() {
        return(
            <>
            <div className = "Sidebar">
                <h1 className = "Title">
                    SORTING <br></br>VISUALIZER
                </h1>
                <Sorting direction = {this.props.direction} ascend = {this.props.ascend} descend = {this.props.descend} sortChange = {this.props.sortChange}></Sorting>
                <Setting size = {this.props.size} sizeChange = {this.props.sizeChange} speedChange = {this.props.speedChange} distributionChange = {this.props.distributionChange}></Setting>
                <Statistics accesses = {this.props.accesses} comparisons = {this.props.comparisons} moves = {this.props.moves}></Statistics>
                <Panel shuffle = {this.props.shuffle} sort = {this.props.sort} randomize = {this.props.randomize} handleModals = {this.props.handleModals}></Panel>
                <svg height="100%" width="100%">
                <line x1="0%" y1="15%" x2="100%" y2="15%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                <line x1="0%" y1="32.5%" x2="100%" y2="32.5%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                <line x1="0%" y1="53%" x2="100%" y2="53%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            </>
        );
    }
}

export default Sidebar;