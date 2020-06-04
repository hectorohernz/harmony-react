import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMoreToggle: false
        }
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleNoShow = this.toggleNoShow.bind(this);
    }

    toggleShow(){
        this.setState({
            showMoreToggle: true
        });
    }
    toggleNoShow(){
        this.setState({
            showMoreToggle: false
        });
    }

    render() {
        let toggleBtn = (this.state.showMoreToggle ?  
                        <button onClick={this.toggleNoShow}>Show Less</button> 
                        :  <button onClick={this.toggleShow}> Show More</button>  )
        return (
            <footer className="footer-container">

                <div className="about-harmony">
                    <h3>About Harmony</h3>
                    <p className={this.state.showMoreToggle ? "show__more" : 'show__less'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    {toggleBtn}
                </div>
                    <div className="get--email">
                        <button><i className="fas fa-envelope"></i> Get Email</button>
                    </div>
            
                <div className="footer-social-links">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.spotify.com/us/"><i className="fab fa-spotify"></i></a>
                    <a href="https://soundcloud.com/"><i className="fab fa-soundcloud"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>
                </div>

                <div className="footer-page-links">
                    <h3>Quick links</h3>
                    <ul className="pagelinks-container">
                        <li><NavLink to="/" exact >Home</NavLink></li>
                        <li><NavLink to="/product" exact >Shop All</NavLink></li>
                        <li><NavLink to="/contact" exact>contact</NavLink></li>
                    </ul>
                </div>
                <h5 className="copyright">© 2020 Harmony All Rights Reserved</h5>
            </footer>
        )
    }
}