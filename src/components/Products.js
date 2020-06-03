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
    filterProduct(filtered){
        if(filtered.length === 0){
            this.setState({products:this.props.data});
        } else{ 

            // Filter Repeating Id before showing client
            filtered = filtered.reduce( (acc,current) => {
                const x = acc.find(item => item.id === current.id);
                if(!x){
                    return acc.concat([current]);
                } else{
                    return acc;
                }
            },[])

            this.setState({products:filtered});
        }
    }

    render() {
        return (
            <section className="product-container">
                <Filter data={this.props.data} filterProduct={this.filterProduct}/>

                <div className="products__grid__columns">
                    {this.state.products.map( item => (
                        <ItemCon key={item.id}  id={item.id}title={item.title} img={item.image} price={item.price} artist={item.artist}  />
                    ))}
                </div>
                <Switch>
                <Route exact path={`/product/:topicId`}>
                     <ItemModel data={this.state.products} />
                </Route>
            </Switch>
            </section>
        )
    }
}