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
            {/* <select className = "SizeSelection" onChange = {this.handleSizeChange}>
                <option>4</option>
                <option>8</option>
                <option>16</option>
                <option>32</option>
                <option>64</option>
                <option>128</option>
                <option>256</option>
                <option>512</option>
            </select> */}
            <input className = "SizeSelection" defaultValue = '10' onKeyDown = {this.handleSizeChange}></input>
            </>
        );
    }
}


export default Setting;