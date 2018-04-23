import React from 'react';
import NavItemRight from '../Common/NavItemRight';
import Navbar from '../Common/Navbar';


export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navRightItems = [
            { title: this.props.user.emailAddress, handler: () => null},
            { title: "logout", handler: () => this.props.onLogout() }
        ];
        const navItemsRight = (
            <NavItemRight name={this.props.user.userName} items={navRightItems}/>
        );
        return (
            <Navbar hasSearch={true} navItemsRight={navItemsRight} />
        );
    }
}
