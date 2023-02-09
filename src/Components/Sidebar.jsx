import { Component } from "react";
import './Sidebar.scss';
import Button from "./Button";

class Sidebar extends Component {
    
    render() { 
        return (
            <aside className="sidebar">
                <h3 className="title_sidebar">More travel</h3>
                <Button value="Stays"/>
                <Button value="Flights"/>
                <Button value="Cars"/>
                <Button value="Packages"/>
                <Button value="Things to do"/>
                <Button value="Cruises"/>
            </aside>
        );
    }
}
 
export default Sidebar;