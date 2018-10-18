import React, { Component } from 'react';

class Song extends Component {
    constructor(props) {
        super(props);
        state = {
            title: "XO Tour Llif3",
            artist: "Lil Uzi Vert",
            spotify: "",
            youtube: ""
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
            </div>
        );
    }
}

export default Song;