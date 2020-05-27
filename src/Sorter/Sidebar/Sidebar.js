import React, {Component} from 'react';
import Sorting from './Sorting/Sorting';
import Setting from './Setting/Setting';

import './Sidebar.css';


class Sidebar extends Component {
    render() {
        return(
            <>
            <div className = "Sidebar">
                <h1 className = "Title">
                    SORTING <br></br>VISUALIZER
                </h1>
                <Sorting></Sorting>
                <Setting></Setting>
                <svg height="100%" width="100%">
                <line x1="0%" y1="15%" x2="100%" y2="15%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                Sorry, your browser does not support inline SVG.
                <line x1="0%" y1="33%" x2="100%" y2="33%" stroke="rgb(22, 22, 22)" strokeWidth = "2" />
                Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            </>
        );
    }
}

export default Sidebar;