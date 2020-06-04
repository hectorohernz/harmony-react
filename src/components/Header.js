import React,{ Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends Component{
    constructor(props){
        super(props);
        // This.navBar is being access directly by the createRef();
        // Which provides a way to access the DOM NODE directly 
        this.navBar = React.createRef();

        this.state = {
            navMenu:false,
            styles:[],
            shoppingChart: this.props.checkout,
            navStyle:{display:'none'}
        };
        this.hamburgerMenu =  this.hamburgerMenu.bind(this);
        this.antiDisplay = this.antiDisplay.bind(this);
    }
    // Adding those hamburger styles to the screen once clicked on.
    hamburgerMenu(){
        this.setState({ styles: [
            'moblie__nav__backdrop'// Style for backdrop opticy className=".moblie-hamburger-icon"
            ,'expanded' // Style for hamburger className=".moblie__nav__backdrop"
            ,'top-animate' // className='.top'
            , 'middle-animate' // className='.middle'
            , 'bottom-animate' // className='.bottom'
            , 'hamburger-animate' // className="..moblie-hamburger-icon"
        ], navMenu:true})
    }

    // Clearing those styles and changing navMenu status
    antiDisplay(){
        this.setState({navMenu:false,styles:[]})
    }

    render() {

        return (
            <header> 
                <nav className="nav--bar-container ">
                <div className={`moblie-hamburger-icon  ${this.state.styles[5]}`} onClick={this.state.navMenu ?  this.antiDisplay : this.hamburgerMenu}>
                    <span className={`bar top ${this.state.styles[2]}`}></span>
                    <span className={`bar middle ${this.state.styles[3]}`}></span>
                    <span className={`bar bottom ${this.state.styles[4]}`}></span>
                </div>
                <div className={`moblie-nav-bar  ${this.state.styles[1]}`}>
                    <ul>
                        <li className={`moblie__hover__nav moblie__active__nav`}><NavLink to="/" exact >Home</NavLink></li>
                        <li className="moblie__hover__nav moblie__active__nav"><NavLink to="/product" exact >Shop All</NavLink></li>
                        <li className="moblie__hover__nav moblie__active__nav"><NavLink to="/contact" exact>contact</NavLink></li>
                    </ul>
                    <div className="shopping-chart">

                    </div>
                </div>
                <div className={`${this.state.styles[0]}`}></div>
                    <NavLink to="/" exact ><img alt="Harmony Logo" src="/img/style-images/harmonylogo.png" id="logo"/></NavLink>
                </nav>
            </header>
        )
    }
}