import React from 'react';
import { Menu } from 'antd';
import './SideNav.css'

class Brand extends React.Component {
    render () {
        return (
            <div className="app-side-nav"
                style={{height: "100vh"}}>
                        <Menu mode="inline" openKeys={["qna"]} style={{position: 'relative', height: "100%", width: "100%"}}>
                        <Menu.Item key="qna" className="side-nav-item">Q & A</Menu.Item>
                        <hr/>
                        <Menu.Item key="notes" className="side-nav-item">Notes</Menu.Item>
                        <hr/>
                        <Menu.Item key="quizzes" className="side-nav-item">Quizzes</Menu.Item>
                        <hr/>
                        <Menu.Item key="reports" className="side-nav-item">Subject Reports</Menu.Item>
                        <hr/>
                    </Menu>
                    </div>
        );
    }
}

export default Brand;