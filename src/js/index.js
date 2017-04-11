import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import ComponentIndex from './components/index';
export default class Index extends Component {
    render() {
        return (
          <div>
            <ComponentIndex/>
          </div>
        )
    }
}

const targetDom = document.createElement('div');
document.body.appendChild(targetDom);
ReactDOM.render( < Index / > , targetDom);
