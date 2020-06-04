import React, { Component } from 'react';
import Filter from './products/Filter';
import ItemCon from './products/ItemCon';
import {
    Switch,
    Route
  } from "react-router-dom";
import ItemModel  from './products/ItemModule';

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: this.props.data,
            itemMod:false
        }
        
        this.filterProduct = this.filterProduct.bind(this);
      
    }

    filterProduct(filtered){ // Filtered function that takes an array with products. 
        if(filtered.length === 0){ // valdiation if array is empty 
            this.setState({products:this.props.data});
        } else{ 
            // Filtering object for repeating albums

            filtered = filtered.reduce( (acc,current) => { // 
                const x = acc.find(item => item.id === current.id); // looping through array to 
                // The current value is being tested against the acc in the array
                if(!x){
                    // if it's not repeating in the array return the current object being tested
                    return acc.concat([current]);
                } else{
                    return acc;
                }
            },[]);
            this.setState({products:filtered});
        }
    };

    render() {
        return (
            <section className="product-container">
                {/*Filter Component with props for data(json file) and filterproduct function */}
                <Filter data={this.props.data} filterProduct={this.filterProduct}/>

                <div className="products__grid__columns">
                    {this.state.products.map( item => (
                        <ItemCon key={item.id}  id={item.id}title={item.title} img={item.image} price={item.price} artist={item.artist}  />
                    ))}
                </div>
                {/* Route for Product */}
                <Switch>
                <Route exact path={`/product/:topicId`}>
                     <ItemModel data={this.state.products} />
                </Route>
            </Switch>
            </section>
        )
    }
}