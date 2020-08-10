import React, {Component} from 'react';
import './App.css';
import Layout from './components/hoc/Layout/Layout';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.PageContainer}>
        <Layout>
          
        </Layout>
      </div>
    );
  }
}

export default App;
