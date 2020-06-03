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
        return item[0];
    };

    

    render() {
        let content = null;
        if(this.state.item === undefined){
            content = (<div className='error-message'>
                <h1>Item Cannot Be Found</h1>
                <h2>404</h2>
                <p>Sorry :(</p>
            </div>)
        } else{
            content = ( 
                <div className="item-content">
                    <h1>{this.state.item.artist}</h1>
                    <h2>{this.state.item.title}</h2>
                    <img src={`/${this.state.item.image}`} alt={this.state.item.title} />
                    <h3>${this.state.item.price}</h3>
                    <button>Add To Cart</button>
                </div>)

        };
        return (
            <section className="item-container">
            <NavLink to="/product"><i className="fas fa-arrow-circle-left"></i></NavLink>
            {content}
            </section>
        )
    }
}
export default withRouter(ItemMod);