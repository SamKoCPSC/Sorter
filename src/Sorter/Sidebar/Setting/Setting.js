import React, {Component} from 'react';

import './Setting.css';

class Setting extends Component { 
    handleSpeedChange = (e) => {
        this.props.speedChange(e.target.value);
    }

    handleSizeChange = (e) => {
        if(e.keyCode === 13) {
            this.props.sizeChange(e.target.value);
        }
    }

    handleDistributionChange = (e) => {
        this.props.distributionChange(e.target.value);
    }

    render() {
        return (
            <>
            <h2 className = "SettingTitle">Setting</h2> 
            <label className = "SpeedLabel">Speed</label>
            <select className = "SpeedSelection" defaultValue = "100%" onChange = {this.handleSpeedChange}>
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
                <option>40%</option>
                <option>50%</option>
                <option>60%</option>
                <option>70%</option>
                <option>80%</option>
                <option>90%</option>
                <option>100%</option>
                <option>200%</option>
                <option>300%</option>
                <option>400%</option>
                <option>500%</option>
                <option>600%</option>
                <option>700%</option>
                <option>800%</option>
                <option>900%</option>
                <option>1000%</option>
            </select>
            <label className = "SizeLabel">Size</label>
            <input className = "SizeSelection" defaultValue = '50' onKeyDown = {this.handleSizeChange}></input>
            <label className = "DistributionLabel">Distribution</label>
            <select className = "DistrubutionSelection" defaultValue = "Randomly Sorted" onChange = {this.handleDistributionChange}>
                <option>Randomly Sorted</option>
                <option>Nearly Sorted</option>
                <option>Partially Sorted</option>
                <option>Periodically Sorted</option>
                <option>Reverse Sorted</option>
            </select>
            </>
        );
    }
}


export default Setting;