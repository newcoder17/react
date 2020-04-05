// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import AlphaNumericList from './components/AlphaNumericList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      droplets:[],
      totalRecords:0,
      searchInput:''
    }
  }
  
  handleSearchInput = (searchInput) => {
    this.setState({searchInput: searchInput});
}

  componentDidMount(){
    // fetch('http://192.168.0.29:8080/api/v1/records/'+this.state.searchInput+'?pSize=500')
    fetch('http://www.mocky.io/v2/5e8a0eb12d000062001a44fb')
    .then(res =>res.json())
    .then(json=>json.data)
    .then(result => this.setState({'droplets':result.combinations,'totalRecords':result.size}))
  }
  render() { 
    return ( <div className="container" >
      <Search totalRecords={this.state.totalRecords} onSearchInput={this.handleSearchInput}/>
      <AlphaNumericList droplets={ this.state.droplets } />
      </div> );
  }
}
 
export default App;