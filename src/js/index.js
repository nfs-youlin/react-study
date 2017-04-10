import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    constructor(props){
      super(props);
      this.state = {
        isClick : true
      };
    };
    onClickWithDiv(){
      this.setState({
        isClick : !this.state.isClick
      })
    };
    render() {
        var styles = {
            contexts: {
                backgroundColor: "#ffba02",
                color          : 　 "#ffffff",
                fontSize       : (this.state.isClick) ? "42px" : "12px",
                marginTop      : (this.state.isClick) ? "20px" : "5px"
            }
        };
        return (
          <div style = {styles.contexts} onClick={this.onClickWithDiv.bind(this)}> Welcome to React! </div>
        )
    }
}

const targetDom = document.createElement('div');
document.body.appendChild(targetDom);
ReactDOM.render( < Index / > , targetDom);
