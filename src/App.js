import React,{Component} from 'react';
import './styles/App.css';
import data from './data/products.json';
import Header from './components/Header'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: data.products
      }

};

render() {
  return (
    <>
      <Header/>
  
    </>
)
  }


}

export default App;
