import React, {Component} from 'react';
import {
   Row,
   Col ,
   Button ,
   Menu,
   Icon,
   Form,
   Modal,
   Tabs,
   Input,
   message,
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

import {Link} from 'react-router';

class ComponentHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      action : '',
      current: 'toutiao',
      hasLogined: false,
      userNick: '',
      userId: 0,
      showModal: false,
      loading: false,
    };
  };
  handleClick(event){
    this.setState({
      current: event.key
    });
    //点击登录注册显示Modal
    if("register"==event.key){
      this.setState({showModal: true});
    }
  };
  //点击模态对话框的确认按钮
  handleOk(){
    console.log('Ok');
    this.setState({loading: true});
    setTimeout(()=>{
      this.setState({
        loading: false,
        showModal: false
      });
    },2000);

  };
  //点击模态对话框的取消按钮
  handleCancel(){
    console.log('Cancel');
    this.setState({
      showModal: false,
      loading: false,
    });
  };
  //点击模态对话框的标签页回调
  callbackWithModal(key){
    console.log(key);
    if('registerTab'==key){
      this.setState({action: 'register'});
    }else{
      this.setState({action: 'login'});
    }
  };
  //提交注册表单
  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    //调用注册登录接口
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="
    // +formData.username+"&password="+formData.pwd+"&r_userName="+formData.account+"&r_password="
    // +formData.password+"&r_confirmPassword="+formData.confirmPassword,myFetchOptions).
    // then(response=>response.json()).then(json=>{
    //   this.setState({
    //     userNick: json.NickUserName,
    //     userId: json.UserId
    //   });
    // });
    message.success("请求成功！");
    this.setState({showModal:false});
  }
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
      userinfo: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      },
      usernick: {
        display: "flex",
        justifyContent: "center",
        height: "40%",
        marginTop: "6%",
      },
      usercenter: {
        display: "flex",
        justifyContent: "center",
        height: "60%",
        marginTop: "10%",
      },
      registerdivbtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      },
      logindivbtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      },
    };
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
        ? <Menu.Item key="userinfo" style={styles.userinfo}>
            <Button type="primary"  style={styles.usernick}>{this.state.userNick}</Button>
            &nbsp;&nbsp;
            <Link to="" target="_blank">
              <Button type="dashed" style={styles.usercenter}>个人中心</Button>
            </Link>
          </Menu.Item>
        :
          <Menu.Item key="register">
            <Icon type="appstore"/>注册/登录
          </Menu.Item> ;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
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
          <Col span={16}>
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
            {userShow}
          </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Modal
          visible={this.state.showModal}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          title="用户中心"
          footer={null}
        >
        <Tabs defaultActiveKey="loginTab" onChange={this.callbackWithModal.bind(this)}>
          <TabPane tab="登录" key="loginTab">
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem
                {...formItemLayout}
                label="账户"
                hasFeedback
              >
                {getFieldDecorator('username', {
                  rules: [{
                    type: 'string', message: '输入非法字符!',
                  }, {
                    required: true, message: '输入用户名!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
              >
                {getFieldDecorator('pwd', {
                  rules: [{
                    required: true, message: '请输入密码!',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <div style={styles.logindivbtn}>
                <Button type="primary" htmlType="submit">登录</Button>
              </div>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="registerTab">
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem
                {...formItemLayout}
                label="账户"
                hasFeedback
              >
                {getFieldDecorator('account', {
                  rules: [{
                    type: 'string', message: '输入非法字符!',
                  }, {
                    required: true, message: '输入用户名!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码!',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="确认密码"
                hasFeedback
              >
                {getFieldDecorator('confirmPassword', {
                  rules: [{
                    required: true, message: '请再次输入密码!',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <div style={styles.registerdivbtn}>
                <Button type="primary" htmlType="submit">注册</Button>
              </div>
            </Form>
          </TabPane>
        </Tabs>
        </Modal>
      </div>
    )
  }
}

export default ComponentHeader = Form.create()(ComponentHeader);
