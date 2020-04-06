// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import AlphaNumericList from './components/AlphaNumericList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droplets: [],
      totalRecords: 0,
      searchInput: ''
    }
  }

  handleSearchInput = (searchInput) => {
    debugger;
    this.setState({ searchInput });

    if (searchInput !== '') {
      var url = "http://localhost:8080/api/v1/records/" + searchInput + "?pSize=1000000";
      this.serviceRequest(url);
    }
  }

  serviceRequest(url) {
    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

        }
      })
      .then(res => res.json())
      .then(json => json.data)
      .then(result => this.setState({ 'droplets': result.combinations, 'totalRecords': result.size }))

  }
  componentDidMount() {
    debugger;
    // if (this.state.searchInput != '')
    //   fetch('http://localhost:8080/api/v1/records/' + this.state.searchInput + '?pSize=50')
    //     // fetch('http://www.mocky.io/v2/5e8a0eb12d000062001a44fb')
    //     .then(res => res.json())
    //     .then(json => json.data)
    //     .then(result => this.setState({ 'droplets': result.combinations, 'totalRecords': result.size }))
  }
  render() {
    return (<div className="container" >
      <Search totalRecords={this.state.totalRecords} onSearchInput={this.handleSearchInput} />
      <AlphaNumericList droplets={this.state.droplets} />
    </div>);
  }
}

export default App;
