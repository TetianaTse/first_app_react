import { Component } from "react";
import './Button.scss';

class Button extends Component {
    showInfo = () => {
        console.log('Service information');
    }
    render( ){
        return (
            <input type="button" value={this.props.value} onClick={this.showInfo} className="btn_block"/>
        )
    }
}

export default Button;