// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';


type Props = {};

export default class Home extends Component < Props > {
  props: Props;
  state = {

  }

  render() {
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
                            
                        </div>
                    </div>
                </section>
                <section class="right-section">
                    <div class="intro-right intro">
                        <div class="intro-text">
                            <h4 class="wow fadeInDown" data-wow-delay="0.4s">Current Requests</h4>
                            <div class="wow fadeInDown" data-wow-delay=" 0.6s">

<div class="song-box">
  <div class="song-list">
    <div class="song">
      <div class="song-container"><img class="song-cover" src="https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg"/>
        <div class="song-title">
          <div class="song-title-name">Sicko Mode</div>
          <div class="song-title-meta">Travis Scott</div>
        </div>
        <div class="song-share">
        <div class="table">
        <ul id="song-table">
          <li class="spotify"><i class="fab fa-spotify spotify-i" ></i></li>
          <li class="youtube"><i class="fab fa-youtube youtube-i" ></i></li>
          <li class="popular"><i class="fas fa-fire fire-i" ></i></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="song-box">
  <div class="song-list">
    <div class="song">
      <div class="song-container"><img class="song-cover" src="https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg"/>
        <div class="song-title">
          <div class="song-title-name">I Love Kanye</div>
          <div class="song-title-meta">Kanye West</div>
        </div>
        <div class="song-share">
        <div class="table">
        <ul id="song-table">
          <li class="spotify"><i class="fab fa-spotify spotify-i" ></i></li>
          <li class="youtube"><i class="fab fa-youtube youtube-i" ></i></li>
          <li class="popular"><i class="fas fa-fire fire-i" ></i></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
