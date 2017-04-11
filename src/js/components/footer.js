import React, {Component} from 'react';
import { Row, Col } from 'antd';

export default class ComponentFooter extends Component{
  render(){
    const styles = {
      footerItem: {
        textAlign: "center"
      },
    };
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} style={styles.footerItem}>
            &copy;&nbsp;2017 泽雷新闻. All Rights Reserved
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
