import React, { Component } from 'react';
import Filter from './products/Filter';
import ItemCon from './products/ItemCon';

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: this.props.data
        }
    }


    render() {
        console.log(this.state.products);
        return (
            <section className="product-container">
                <Filter/>

                <div className="products__grid__columns">
                    {this.state.products.map( item => (
                        <ItemCon key={item.id} title={item.title} img={item.image} price={item.price} artist={item.artist}  />
                    ))}
                </div>

            </section>
        )
    }
}