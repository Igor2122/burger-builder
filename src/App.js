import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';



class App extends Component {

  render() {
    return(
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
    
  }
}

export default App;// higher order component 
