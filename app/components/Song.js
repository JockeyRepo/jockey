import React, { Component } from 'react';

export const Song = (props) => {
  constructor(props) {
    super(props);
    this,state = {
      title: "XO Tour Llif3",
      artist: "Lil Uzi Vert",
      art: "gfhjkl"
    }
  }


    return (
      <div class="song-box">
        <div class="song-list">
            <div class="song">
                <div class="song-container"><img class="song-cover" src="{this.state.art}"/>
                    <div class="song-title">
                        <div class="song-title-name">{this.state.title}</div>
                        <div class="song-title-meta">{this.state.artist}</div>
                    </div>
                <div class="song-share">
                    <ul>
                        <li class="spotify"><i class="fab fa-spotify spotify-i" ></i></li>
                        <li class="youtube"><i class="fab fa-youtube youtube-i" ></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  
};
