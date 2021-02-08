import React from 'react';
import { Row, Col } from 'antd';
import NavItems from './NavItems.js';
import { Typography } from 'antd';
import './AppMainHeader.css'
const { Title } = Typography;

class AppMainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    onClose = () => {
        this.setState({
          visible: false,
        });
      };

    render () {
        return (
            <Row className="app-header">
                <Col flex="100px" style={{textAlign:"left"}}>
                <Title level={2} style={{color:"white"}}>
                <i>
                    LOGO
                </i>
            </Title>
                </Col>
                <Col className="nav-list" flex="auto">
                    <NavItems/>
                </Col>
            </Row>
        );
    }
}

export default AppMainHeader;