import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    if(!(username === 'joao' && password === '1234')) {
      alert('Access Denied!');
      return <Redirect to='/' />
    }
    return <p> Welcome João! </p>
  }
}

export default StrictAccess;
