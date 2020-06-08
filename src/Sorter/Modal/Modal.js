import React, {Component} from 'react';

import './Modal.css';

class Modal extends Component {

    handleClose = () => {
        this.props.handleModals(false, this.props.header);
    }

    render() {
        return(
            <>
            <div className = "page" style = {{display: this.props.display}}>
                <div className = "content">
                    <span className = "close" onClick = {this.handleClose}>
                        &times;
                    </span>
                    <h1>
                        {this.props.header}
                    </h1>
                    <p>
                        {this.props.paragraph}
                    </p>
                </div>
            </div>
            </>
        );
    }
}

export default Modal;
