// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import Song from './Song';


type Props = {};

export default class Home extends Component < Props > {
  props: Props;
  state = {
    songs: [
      { 
          title: "Sicko Mode",
          artist: "Travis Scott",
          genre: "Rap",
          img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
          spotify: "2xLMifQCjDGFmkHkpNLD9h",
          requests: 10,
      },
      {
          title: "XO TOUR Llif3",
          artist: "Lil Uzi Vert",
          genre: "Rap",
          img: "https://upload.wikimedia.org/wikipedia/en/6/65/Luv_Is_Rage_2_cover.jpg",
          spotify: "7GX5flRQZVHRAGd6B4TmDO",
          requests: 69
      },
      {
          title: "Ultralight Beam",
          artist: "Kanye West",
          genre: "Rap",
          img: "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg",
          spotify: "2tecGOQrBrYE56iCjzLiXm",
          requests: 4
      },
      {
          title: "Rubbin Off The Paint",
          artist: "YBN Nahmir",
          genre: "Mumble",
          img: "https://upload.wikimedia.org/wikipedia/en/e/e8/YBNRubbinOffthePaint.jpg",
          spotify: "3H2HxkHvD2D4LbeNyJ4WMy",
          requests: 100
      },
      {
          title: "Hell Above",
          artist: "Pierce the Veil",
          genre: "Rock",
          img: "https://upload.wikimedia.org/wikipedia/en/9/99/CollidewiththeSkycover.jpg",
          spotify: "3H2HxkHvD2D4LbeNyJ4WMy",
          requests: 12
      },
    ]
  }
  componentDidMount() {
    //add fetch stuff here
  }

  render() {
    let songArr = this.state.songs.sort((a,b) => b.requests-a.requests).map((item, i) => {
      return(
          <Song key={i} title={item.title} artist={item.artist} genre={item.genre} img={item.img} spotify={item.spotify}
          requests={item.requests}/>
      )
    }) 
    return (
      <div class="wrapper">
        <div class="main">
            <section class="split-home">
                <section class="left-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="35" height="35" alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                    </div>
                    <div class="intro">
                        <div class="intro-text">
                            <h4 class="wow fadeInDown" data-wow-delay="0.4s">New to Jockey?</h4>
                            <p class="wow fadeInDown" data-wow-delay="0.6s">Your guest can scan your QR Code and can request music directly to you directly!<br class="visible-lg " />
                            </p>
                            <p class="wow fadeInDown" data-wow-delay="0.6s">To create at QR, click the link below!<br class="visible-lg " />
                                <br class="visible-lg"/> that's all!</p>
                            <p class="wow fadeInDown" data-wow-delay="0.6s">just like magic! <br class="visible-lg "/>
                                <br class="visible-lg"/> ...not really 🤫</p>
                            <Link to={routes.QR} className="btn-contact wow fadeInDown" >Generate QR Code</Link>
                            <Link to={routes.LOGIN} className="btn-contact wow fadeInDown" >Login Screen</Link>
                            <Link to={routes.SETTINGS} className="btn-contact wow fadeInDown" >SETTINGS Screen</Link>
                        </div>
                    </div>
                </section>
                <section class="right-section">
                    <div class="intro-right intro">
                        <div id="songContainer" class="intro-text">
                          <h4 class="wow fadeInDown" data-wow-delay="0.4s">Current Requests</h4>
                          <div class="wow fadeInDown" data-wow-delay=" 0.6s">
                            {songArr}
                          </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>

    );
  }
}
