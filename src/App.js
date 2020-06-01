import React,{Component} from 'react';
import './styles/App.css';
import data from './data/products.json';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import Products from './components/Products';
import Contact from './components/Contact';

import {Route, Switch} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: data.products,
      checkout:[]
      }

}; 

render() {
  return (
    <>
      <Header checkout={this.state.checkout}/>
      <Switch>
        <Route exact render={() => <Home data={this.state.products}/>} path="/" />
        <Route exact render={() => <Products data={this.state.products}/>} path="/all" />
        <Route exact render={() => <Contact />} path="/contact"/>
      </Switch>
      <Footer/>
    </>
)
  }


}

export default App;
