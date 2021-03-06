import React,{Component} from 'react';
import './styles/App.css';
import data from './data/products.json';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import Products from './components/Products';
import Contact from './components/Contact';
import AlertUser from './components/alerts/AlertUser';

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
        <Route  render={() => <Products data={this.state.products}/>} path="/product" />
        <Route exact render={() => <Contact />} path="/contact"/>
        <Route render={ () => <AlertUser />} path='*'/>
      </Switch>
      <Footer/>
    </>
)
  }


}

export default App;
