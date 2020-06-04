import React, { Component } from 'react';
export default class AlertUser extends Component{
    /*
        The Alert Component is used for the purpose of alerting the user of htttp code : 404. Which means route doesn't exist.
    */
    render() {
        return (
            <div className="alert-container">
                <img src="/img/ads/flamenco-no-comments.png" className="alert-image" alt="Site doesn't exist"/>
                <p>Page Doesn't Exist.</p>
            </div>
        )
    }
}