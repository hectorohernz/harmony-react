import React, { Component } from 'react';
import Quicklinks from './Quicklinks';
import { v4 as uuidv4 } from 'uuid';
export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            /* State for passing in content quick-links in the home page.*/
            cms:[
                {name:'Hip Hop',style:'hiphop',link:"#", id:uuidv4()},
                {name:'Indie',style:'indie',link:"#", id:uuidv4()},
                {name:'Pop',style:'pop',link:"#", id:uuidv4()},
                {name:'Rock',style:'rock',link:"#", id:uuidv4()}
            ]
        }
    }

    render() {
        return (
            <section className="content-container">
            {this.state.cms.map( genre => 
                <Quicklinks  genreStyle={genre.style} genre={genre.name} key={genre.id} link={genre.link}/>   
            )}
            </section>
        )
    }
}

