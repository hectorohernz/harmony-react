import React, { Component } from 'react';

export default class ItemCon extends Component{
    render() {
        return (
            <div className="individual__product"> 
            <a href="">
            <img src={this.props.img} alt={this.props.title} className="individual__product__img"/>
            <p className="idividual__product__details">{this.props.title}</p>
            <p className="individual__product__artist">{this.props.artist}</p>
            <p className="individual__product__price">${this.props.price}</p>   
            </a>  
        </div>
        )
    }
}