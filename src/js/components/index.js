import React, {Component} from 'react';
import ComponentHeader from './header';
import ComponentFooter from './footer';

export default class ComponentIndex extends Component{
  render(){
    return(
      <div>
        <ComponentHeader/>
        <ComponentFooter/>
      </div>
    )
  }
}
