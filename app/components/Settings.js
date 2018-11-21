// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {};

export default class Settings extends Component < Props > {
  props: Props;

  render() {
    return (
      <div class="wrapper">
        <div class="main">
                <section class="full-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="10%" alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                        </div>
                        <div class="intro intro-settings" >
                            <div class="intro-text">
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">Settings</h4>
                                <div class="settings-content">

                                  <div class="row">

                                    <div class="col-sm-6 setting-item">
                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> Filter</p>

                                    </div>

                                    <div class="col-sm-6 setting-item">

                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> toggle item</p>
                                    </div>


                                    <div class="col-sm-6 setting-item" >

                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> toggle item</p>
                                    </div>

                                    <div class="col-sm-6 setting-item" >

                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> toggle item</p>
                                        </div>

                                    <div class="col-sm-6 setting-item" >
                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> toggle item</p>
                                        </div>

                                    <div class="col-sm-6 setting-item" >

                                        <p class="wow fadeInDown" data-wow-delay="0.6s"> toggle item</p>
                                    </div>
                                     
                                  </div>



                              
                                <Link to={routes.HOME} class=" wow fadeInDown" id="go-back"><span><i class="fas fa-arrow-left icons"></i> Main Menu</span></Link>

                                <div class="settings-footer">
                                <Link to={routes.FAQ} class=" wow fadeInDown faq-link"><span>FAQ</span></Link>
                                </div>


                                    
                            </div>
                        
                    </div>
                    </div>

            </section>
        </div>
    </div>
    );
  }
}
