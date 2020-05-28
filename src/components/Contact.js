import React, { Component } from 'react';

export default class Contact extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        // ADD FUNCTION WITH STATE AND VERFECTION
        return (
            <section className="contact-container">
                <div className="contact-directions">
            
                </div>
                <div className="contact-form">
                    <h1 className="contact--header">Send Us A Message</h1>

                    <form className="form-container">
                    <label for="fname">First And Last name</label>
                    <input type="text" id="fname" name="fname" placeholder=" Enter Full Name" required/>
                    
                    <label for="contact-email">Email</label>
                    <input type="email" id="contact-email" name="contact-name" placeholder="Enter Email" required/>

                    <label for="contact-textarea">Message</label>
                    <textarea id="contact-textarea" placeholder="Enter Message Here"></textarea>
                    
                    <input type="submit" value="Send Message" id="submit-btn"/>
                  </form>
                
                </div>
            </section>
        )
    }
}