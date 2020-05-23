import React,{ Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            navMenu:false,
            styles:[]
        };
        this.hamburgerMenu =  this.hamburgerMenu.bind(this);
        this.antiDisplay = this.antiDisplay.bind(this);
    }

    hamburgerMenu(){
        this.setState({ styles: [
            'moblie__nav__backdrop'// Style for backdrop opticy className=".moblie-hamburger-icon"
            ,'expanded' // Style for hamburger className=".moblie__nav__backdrop"
            ,'top-animate' // className='.top'
            , 'middle-animate' // className='.middle'
            , 'bottom-animate' // className='.bottom'
            , 'hamburger-animate' // className="..moblie-hamburger-icon"
        ], navMenu:true})

        console.log('HAS WORKED')
    }
    antiDisplay(){
        this.setState({navMenu:false,styles:[]})
    }
            
    render() {
        return (
            <header> 
                <nav className="nav--bar-container">
                <div className={`moblie-hamburger-icon  ${this.state.styles[5]}`} onClick={this.state.navMenu ?  this.antiDisplay : this.hamburgerMenu}>
                    <span className={`bar top ${this.state.styles[2]}`}></span>
                    <span className={`bar middle ${this.state.styles[3]}`}></span>
                    <span className={`bar bottom ${this.state.styles[4]}`}></span>
                </div>

                <div className={`moblie-nav-bar  ${this.state.styles[1]}`}>
                    <ul>
                        <li className={`moblie__hover__nav moblie__active__nav current`}><a href="#">Home</a></li>
                        <li className="moblie__hover__nav moblie__active__nav"><a href="#">Products</a></li>
                        <li className="moblie__hover__nav moblie__active__nav"><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div className={`${this.state.styles[0]}`}></div>
                    <a href="#" ><img alt="Harmony Logo" src="img/style-images/harmonylogo.png" id="logo"/></a>
                </nav>
            </header>
        )
    }
}