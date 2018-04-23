import React from 'react';

export default class NavItemRight extends React.Component {
    constructor(props) {
        super(props);
        this.renderNavItems = this.renderNavItems.bind(this);
    }

    renderNavItems() {
        return this.props.items.map(item => {
            return  (<li><a href="#" onClick={item.handler}>{item.title}</a></li>);
        })
    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.name ? this.props.name: "abc"}<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        {this.renderNavItems()}
                    </ul>
                </li>
            </ul>
        );
    }
}
