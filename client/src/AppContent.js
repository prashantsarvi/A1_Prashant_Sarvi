import React from 'react';
import './AppContent.css'
import SideNav from './SideNav.js';
import SubMenu from './SubMenu.js';
import { Row, Col } from 'antd';

class AppContent extends React.Component {
    render () {
        return (
          <>
            <Row>
            <Col className="col-side" span={4}>
              <SideNav/>
            </Col>
            <Col className="col-sub" span={20}>
              <SubMenu/>
            </Col>
          </Row>
          </>
        );
    }
}

export default AppContent;