import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class ComponentHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'toutiao'
    };
  };
  handleClick(event){
    this.setState({
      current: event.key
    });
  };
  render(){
    var styles = {
      container: {
        display: "flex",
        flexDirection: "row",
      },
      images: {
        display: "flex",
        alignItems: "center",
        width: "48px",
        height: "48px",
      },
      span: {
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
        marginLeft: "5px",
      },
    };

    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={4} style={styles.container}>
            <img src="./src/images/logo.png" alt="logo" style={styles.images}/>
            <span style={styles.span}>泽雷新闻</span>
          </Col>
          <Col span={16} style={styles.container}>
          <Menu
            onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="toutiao">
                <Icon type="appstore"/>头条
            </Menu.Item>
            <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
            </Menu.Item>
            <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
            </Menu.Item>
            <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
            </Menu.Item>
            <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
            </Menu.Item>
            <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
            </Menu.Item>
            <Menu.Item key="keji">
                <Icon type="appstore"/>科技
            </Menu.Item>
            <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
            </Menu.Item>
          </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
