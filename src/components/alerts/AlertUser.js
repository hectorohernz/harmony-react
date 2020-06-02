import React, { Component } from 'react';
export default class AlertUser extends Component{
    render() {
        return (
            <div className="alert-container">
                <img src="/img/ads/flamenco-no-comments.png" className="alert-image" alt="Site doesn't exist"/>
                <p>Page Doesn't Exist.</p>
            </div>
        )
    }
}