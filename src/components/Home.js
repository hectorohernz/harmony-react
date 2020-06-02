import React, { Component } from 'react';
import Highlight from './home/Highlight';
import Content from './home/Content';
import {NavLink} from 'react-router-dom';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.highlightWindow = React.createRef();
        this.state = {
            highlight: this.sortHighlight()
        }
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }
    sortHighlight(){
        let products =  this.props.data;
        let highlight = products.filter( products => 
            products.highlight === true
        );
     return highlight
    }
    


    scrollRight(){
            const dashWindow = this.highlightWindow.current;
            dashWindow.scrollLeft -= 300;
    }
    scrollLeft(){
        const dashWindow = this.highlightWindow.current;
        dashWindow.scrollLeft += 300;
    }

    render() {
        let highlightCon = (this.state.highlight.map( el => 
            <Highlight artist={el.artist} key={el.id} image={el.image} title={el.title} />
            ))

        return (
            <section>
                <article className="home--dashboard">
                    <div className="home-text-container">
                        <h1>Recently Released Albums</h1>
                            <div className="right--side--btn-container">
                                <NavLink to="/product" exact  id="right-side-btn">Shop All</NavLink>
                            </div>
                    </div>
                    <div className="highlight-container" ref={this.highlightWindow}>
                        <button className="right-slide slide-btn" onClick={this.scrollRight}><i className="fas fa-chevron-left"></i></button>
                                {/*Album Render Using the Highlight state filter based on highlight: true*/}
                                {highlightCon}
                        <button className="left-slide slide-btn" onClick={this.scrollLeft}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </article>
                <Content/> 
            </section>
        )
    }
}