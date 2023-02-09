import { Component } from "react";
import './LinkHeader.scss'

class LinkHeader extends Component {
    
    render() { 
        return (
            <li className="header_link" onClick={this.props.callback}>{this.props.name}</li>
        );
    }
}
 
export default LinkHeader;