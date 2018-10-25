// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import Search from './Search';

type Props = {};

export default class Home extends Component < Props > {
  props: Props;
  state = {
  }
  componentDidMount() {
    //add fetch stuff here
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
                                <Search/>
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
