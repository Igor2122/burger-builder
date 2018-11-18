// eslint-disable-next-line
import React, { Component } from 'react';
// import classes from './App.css';
import Layout from './components/Layout/Layout';
import './index.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';



class App extends Component {

  render() {
    return(
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
    
  }
}

export default App;// higher order component 
