import React, { Component } from 'react'

export default class BreadCrumb extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home" /></a></li>
                    <li className="breadcrumb-item"><a href="#">Musical Instrument</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Singing Bowl</li>
                </ol>
            </nav>
        )
    }
}
