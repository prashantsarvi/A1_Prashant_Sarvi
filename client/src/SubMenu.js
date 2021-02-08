import React from 'react';
import { Menu } from 'antd';
import './SubMenu.css'
import AppData from './AppData.js'

class SubMenu extends React.Component {
    render () {
        return (
            <>
            <div className="app-sub-menu"
                style={{width: "100vw", height: "54px", textAlign: "center", marginLeft:"auto", marginRight:"auto"}}>
                <Menu mode="horizontal" openKeys={["qna"]} 
                    style={{position: 'relative', height: "100%", width: "100%", display: "inline-block",
                    background: "grey", color: "white", fontWeight:"bold", fontSize:"18px", alignItems: "center"}}>
                    <Menu.Item key="report" className="side-nav-item">Overall Report</Menu.Item>
                    <Menu.Item key="discussion" className="side-nav-item">Discussion</Menu.Item>
                    <Menu.Item key="dairy" className="side-nav-item">Dairy</Menu.Item>
                    <Menu.Item key="help" className="side-nav-item">Help</Menu.Item>
                </Menu>
            </div>
            
            <AppData/>
            </>
        );
    }
}

export default SubMenu;