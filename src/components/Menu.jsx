import React, { Component } from 'react';
import './../css/Menu.css';


class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMenu: "Home"
        }
    }
    handleMenuChange = (newMenu) => {
        this.setState({
            currentMenu: newMenu
        })
        this.props.handleMenuSwitch(newMenu)
    }
    menuItems = [
        {
            icon: "fa fa-home",
            text: "Home"
        },
        {
            icon: "fa fa-home",
            text: "Activity"
        },
        {
            icon: "fa fa-home",
            text: "Wallet"
        },
        {
            icon: "fa fa-home",
            text: "Market"
        },
        {
            icon: "fa fa-home",
            text: "Earth"
        }
    ]

    render() {
        const menuItemJSX = this.menuItems.map(item => (
            <div className={"menu-item " + (this.state.currentMenu === item.text ? "selected" : "")} onClick={()=>{this.handleMenuChange(item.text)}} key={item.text}>
                <i className={item.icon}></i>
                <p>{item.text}</p>
            </div>
        ))
        return (
            <div className="menu">
                {menuItemJSX}
            </div>
        );
    }
}

export default Menu;
