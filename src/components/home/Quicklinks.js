import React, { Component } from 'react';

export default class Quicklinks extends Component{
    render() {
        return (
            <div className={`content-format content-${this.props.genreStyle}`}>
                <a href="">
                    <div className="content-links">
                        <h2>{this.props.genre}</h2>
                      <h6>Shop Now <i className="fas fa-arrow-right"></i></h6>
                    </div>
                    </a>
                <div className={`content-image content-image-${this.props.genreStyle}`}></div>
            </div>
        )
    }
} 