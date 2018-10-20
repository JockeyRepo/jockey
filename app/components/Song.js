import React, { Component } from 'react';
import hunnid from '../assets/images/100.png';
// var shell = require('electron').shell;

export default class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spotify: "",
        }
    }
    componentDidMount() {
        var spotifyLink = `https://open.spotify.com/track/${this.props.spotify}`;
        this.setState({spotify: spotifyLink});
    }

    render() {
        var hunnidImg = <img width="50px" height="25px"src={"data:image/png;" + hunnid}/>
        let req = this.props.requests;
        return (
            <div class="song-box">
                <div class="song-list">
                    <div class="song">
                        <div class="song-container"><img class="song-cover" src={this.props.img}/>
                            <div class="song-title">
                                <div class="song-title-name">{this.props.title}</div>
                                <div class="song-title-meta">{this.props.artist}</div>
                            </div>
                            <div class="song-share">
                                <div class="table">
                                    <ul id="song-table">
                                        <li class="spotify">
                                            <i class="fab fa-spotify spotify-i" ></i>
                                        </li>
                                        <li class="youtube"><i class="fab fa-youtube youtube-i" ></i></li>
                                        <li id="popular"><i class="fas fa-fire fire-i" >{req == 100 ? hunnidImg : req}</i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
