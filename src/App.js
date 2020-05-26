import React,{Component} from 'react';
import './styles/App.css';
import data from './data/products.json';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';


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
      <Home data={this.state.products}/>
      <Footer/>
    </>
)
  }


}

export default App;
