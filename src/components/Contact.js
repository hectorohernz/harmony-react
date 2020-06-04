import React, { Component } from 'react';

export default class Contact extends Component{
    render() {
        // Very Basic Form validation with javascript
        return (
            <section className="contact-container">
                <div className="contact-directions">
                        <div className="contact--content">
                            <h1>Contact The Team</h1>
                            <p><span>Phone Number:</span> 703-483-239</p>
                            <p><span>Email:</span> harmonyteam@harmony.com</p>
                            <p><span>Address:</span> 9028 Harmony St, Palo Alto, Ca, 94301</p>
                        </div>
                </div>
                <div className="contact-form">
                    <h1 className="contact--header">Send Us A Message</h1>

                    <form className="form-container">
                    <label htmlFor="fname">First And Last name</label>
                    <input type="text" id="fname" name="fname" placeholder=" Enter Full Name" required/>
                    
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="contact-name" placeholder="Enter Email" required/>

                    <label htmlFor="contact-textarea">Message</label>
                    <textarea id="contact-textarea" placeholder="Enter Message Here"></textarea>
                    
                    <input type="submit"  value="Send Message" id="submit-btn"/>
                  </form>
                
                </div>
            </section>
        )
    }
}