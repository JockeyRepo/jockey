// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './qr.css';
import routes from '../constants/routes';

type Props = {
};

export default class QR extends Component<Props> {
  props: Props;

  render() {
    return (
      <div class="wrapper">
        <div class="main">
            <section class="split-home">
                <section class="left-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="35" height="35" alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                        <div class="intro">
                            <div class="intro-text">
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">Creating a QR Code!</h4>
                                <p class="wow fadeInDown" data-wow-delay="0.6s"> It's simple.
                                </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">Put the Name of your event in the title<br class="visible-lg "/> and export your custom QR!
                                    <br class="visible-lg"/> </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">Make sure you write down your pin for users, <br class="visible-lg "/> safety first!
                                    <br class="visible-lg"/> </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">We'll do everything else. ??</p>
                                <Link to={routes.HOME} className="btn-contact wow fadeInDown" data-wow-delay="0.6s">Home</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="right-section">
                    <div class="intro-right intro">
                        <div class="intro-text">
                            <h4 class="wow fadeInDown" data-wow-delay="0.4s">Enter the Title of your event!</h4>
                            <div class="wow" data-wow-delay=" 0.6s">
                                <div class="panel-body">
                                    <form>
                                        <div class="form-group">
                                            <input id="partyname" type="text" class="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <button type="button" onclick="createParty()" class="btn-contact wow fadeInDown" data-wow-delay=".6s">Submit</button>
                                    </div>
                                    <img id="qrimg" src="https://orig00.deviantart.net/c5f0/f/2015/066/1/9/qr_code_animated__by_junguler-d8kqfbf.gif" width="250px" height="250px" />
                                    <br/><br/>
                                    <p id="pin">Your Pin: </p>
                                </div>
                            </div>
                            <br/>
                            <span id="social-export">
                <a href="#"><i class="fa fa-instagram icons" ></i></a>
                <a href="#"><i class="fa fa-facebook icons" ></i></a>
                <a href="#"><i class="fa fa-twitter icons" ></i> </a>
              </span>
                        </div>
                    </div>
                </section>
               
            </section>
        </div>
    </div>
    );
  }
}
