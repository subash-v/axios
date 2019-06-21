import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      records: [],
      record: {title:'NA'}
    };
  }
  get = () => {
    axios.get('/posts').then(result => {
      this.setState({
        records: result.data
      })
    })
  }
post=()=>{
  axios.post('/posts',{
      title: 'AXYZ',
      body: 'bar',
      userId: 1
    }).then(result => {
      this.setState({
        record: result.data
      })
    })
}
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.get}>get </button><br />
        {this.state.records.map(x =>
           <React.Fragment>
            <div style={{fontSize:"18px",color:"green"}}>{x.title}</div><br /><br/>
            <div>{x.body}</div><br/>
           </React.Fragment>
        )}
        <button onClick={this.post}>post </button>
        <div>{this.state.record.title}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

