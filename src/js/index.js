import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import ComponentIndex from './components/index';

var MediaQuery = require('react-responsive');

export default class Index extends Component {
    render() {
        return (
          <div>
            <MediaQuery query='(min-device-width: 1224px)'>
              <ComponentIndex/>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
              <div>You are a tablet or mobile phone</div>
            </MediaQuery>
          </div>
        )
    }
}

const targetDom = document.createElement('div');
document.body.appendChild(targetDom);
ReactDOM.render( < Index / > , targetDom);
