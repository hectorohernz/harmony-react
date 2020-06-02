import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom";

class ItemMod extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.renderitem()
        };
        this.renderitem = this.renderitem.bind(this);
    };
    
    renderitem(){
        let data = this.props.data;
        let item = data.filter(album => album.id === Number(this.props.match.params.topicId));
        console.log(item[0]);
        return item[0];
    }
    render() {
        return (
            <section className="item-container">
            <NavLink to="/product"><i class="fas fa-arrow-circle-left"></i></NavLink>
                <div className="item-content">
                    <h1>{this.state.item.artist}</h1>
                    <h2>{this.state.item.title}</h2>
                    <img src={`/${this.state.item.image}`} alt={this.state.item.title} />
                    <h3>${this.state.item.price}</h3>
                    <button>Add To Cart</button>
                </div>
            </section>
        )
    }
}
export default withRouter(ItemMod);