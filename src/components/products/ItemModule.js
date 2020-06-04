import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom";


/*
    To DO List Today
    [ ] - add description 
    [ ] -  Add Data to json to route to mp3 files located in public/audio
    [ ] - Add Audio Controls to the page 
    [ ] - Add Description  To Page 
    [ ] - Fix Styles
*/
class ItemMod extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.renderitem()
        };
        this.renderitem = this.renderitem.bind(this);
    };
    /*
        - RenderItem has the data props
        - Data is being filtered based on the params from the route /products/topicId
        - once filtered it is returned back into the state 
    */
    renderitem(){
        let data = this.props.data;
        let item = data.filter(album => album.id === Number(this.props.match.params.topicId));
        return item[0];
    };

    

    render() {
      // Catching an errors, such as an invaild route. /product/invaild.
      // if the state returns undefined 
      // Cannot return 0 length of array
      // else display content 
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
                        <p className="item-song-title">{`Song:  ${this.state.item.content.title}`}</p>
                        <audio controls>
                            <source src={`/${this.state.item.content.link}`} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                        </audio>
                    <p className="item-description">{this.state.item.content.description}</p>
                    <div className="item-price-content">
                        <h3>${this.state.item.price}</h3>
                        <button>Add To Cart</button>
                    </div>
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