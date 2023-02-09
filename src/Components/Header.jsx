import { Component } from "react";
import './Header.scss';
import LinkHeader from "./LinkHeader";
import logo from '../images/logo.svg';


class Header extends Component {
    handleClickMain = function() {
    console.log('Open main page!')
    }

    handleClickTravel = function() {
    console.log('Open travel page!')
    }

    handleClickCountries = function() {
    console.log('Open page with countries!')
    }

    handleClickAbout = function() {
    console.log('Open about us page!')
    }
    handleClickContacts = function() {
    console.log('Open contacts page!')
    }

    render() {
        return(
            <header className="app-header">
                <img src={logo} alt="logo" className="img_logo"/>
                <ul>
                    <LinkHeader name="Main page" callback={this.handleClickMain}/>
                    <LinkHeader name="Travel" callback={this.handleClickTravel}/>
                    <LinkHeader name="Сountries" callback={this.handleClickCountries}/>
                    <LinkHeader name="About us" callback={this.handleClickAbout}/>
                    <LinkHeader name="Contacts" callback={this.handleClickContacts}/>
                </ul>
            </header>
        );
    }
}
export default Header;