// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component < Props > {
  props: Props;

  render() {
    return (
      <div class="wrapper">
        <div class="main">
            <section class="split-home">
                <section class="left-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <a class="wow fadeIn" data-wow-delay="0.3s" href="#"><img src="./assets/images/logo.png" width="35" height="35" alt="Logo"/></a>
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
                            <div class="request-box wow " data-wow-delay=" 0.6s">
                                <ol id="queuebox" class="request-box-ol">
                                    <li class="request-box-li">
                                        <div class="song-tab">
                                            <p class="song-tab-i">Travis Scott - Sicko Mode <span class="links">
                <i class="fa fa-spotify spotify-i" ></i>
                <i class="fa fa-youtube youtube-i" ></i>
                </span></p>
                                        </div>
                                        <div class="song-tab">
                                            <p class="song-tab-i">Lil - Pump <span class="links">
                <i class="fa fa-spotify spotify-i" ></i>
                <i class="fa fa-youtube youtube-i" ></i>
                </span></p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="footer-personal text-center wow fadeInDown" data-wow-delay="0.7s">
                    </div>
                </section>
            </section>
        </div>
    </div>

    );
  }
}
