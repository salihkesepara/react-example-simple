import React, {Component} from 'react';
import { getRepos } from './api'

export default class Home extends Component {
  render() {
    getRepos('salihkesepara')
    return (
      <div>Hello World!!!</div>
    );
  }
}
