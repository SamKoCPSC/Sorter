import React, {Component} from 'react';

import './Index.css';

class Index extends Component {

    render() {
        return(
            <>
            <div className = "Index" style = {{
                left: this.props.data.left, 
                top: this.props.data.top, 
                width: this.props.data.width, 
                height: this.props.data.height,
                backgroundColor: this.props.data.color,
            }}></div>
            </>
        );
    }
}

export default Index;

