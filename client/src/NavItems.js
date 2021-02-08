import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

class NavItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 'home'
        }
    }

    updateSelection = (e) => this.setState({ selection: e.key });

    render () {
        return (
            <Menu theme="dark" onClick={(e) => this.updateSelection(e)}
                selectedKeys={[this.state.selection]} mode="horizontal"
                style={{background: 'transparent', color: "inherit",
                    display: "flex", justifyContent: "center", fontSize: "18px"}}>
                <Menu.Item key="subName">
                    <NavLink to="/">
                        Subject Name
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="notification">
                    <NavLink to="/">
                        Notification
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="stdName">
                    <NavLink to="/">
                        Student Name
                    </NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavItems;