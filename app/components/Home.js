// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
  	return <JsonRowList/>
  }
}

class JsonRowList extends React.Component {
  render() {
  	var rows = [];
	//this.props.records
	[{a:1, b:2, c: 'ccc'}, {a:2, b:3, c: 'ddd'}]
	.forEach(function(json) {
      rows.push(<JsonRow json={json.b} key={json.a} />);
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );  
  }	
}

class JsonRow extends React.Component {
  render() {
    return <tr><td>{this.props.json}</td></tr>;
  }
}