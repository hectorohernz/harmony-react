import React, { Component } from 'react';
/*
    The highlight component is used for the Home Page dashboard.
*/ 
export default class highlight extends Component {
    render() {
        return (
            <figure>
                <img className="moblie--header--image" src={this.props.image} alt={this.props.title}/>
                <figcaption className="moblie--header--image--text-2">{this.props.title}</figcaption> 
                <figcaption className="moblie--header--image--text">{this.props.artist}</figcaption> 
            </figure>
        )
    }
} 