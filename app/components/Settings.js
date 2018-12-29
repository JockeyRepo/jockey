// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {};

export default class Settings extends Component < Props > {
  props: Props;

  render() {
    return (
      <div className="wrapper">
          <div className="main">
              <section className="full-section wow fadeIn" data-wow-delay="0.2s">
                  <div className="main-logo">
                      <img src="./assets/images/logo.png" width="10%" alt="Logo" className="wow fadeIn" data-wow-delay="0.3s"  />
                  </div>
                  <div className="intro intro-settings">
                      <div className="intro-text">
                          <h4 className="wow fadeInDown" data-wow-delay="0.4s">Settings</h4>
                          <div className="settings-content">

                              <div className="row">
                                  <div className="col-sm-6 setting-item">
                                      <p className="wow fadeInDown" data-wow-delay="0.6s"> Filter</p>
                                  </div>
                                  <div className="col-sm-6 setting-item">
                                      <label className="switch">
                                          <input className="switch-box" type="checkbox" />
                                          <div className="switch-btn"></div>
                                      </label>
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-sm-6 setting-item" >
                                      <p className="wow fadeInDown" data-wow-delay="0.6s"> Option</p>
                                  </div>
                                  <div className="col-sm-6 setting-item" >
                                      <label className="switch">
                                          <input className="switch-box" type="checkbox" />
                                          <div className="switch-btn"></div>
                                      </label>
                                  </div>
                              </div>

                              <div className="row">
                                  <div class="col-sm-6 setting-item" >
                                      <p class="wow fadeInDown" data-wow-delay="0.6s"> Option</p>
                                  </div>
                                  <div class="col-sm-6 setting-item">
                                      <label className="switch">
                                          <input className="switch-box" type="checkbox" />
                                          <div className="switch-btn"></div>
                                      </label>
                                  </div>
                              </div>

                          </div>

                          <Link to={routes.HOME} class=" wow fadeInDown" id="go-back"><span><i class="fas fa-arrow-left icons"></i> Main Menu</span></Link>

                          <div class="settings-footer">
                              <Link to={routes.FAQ} class=" wow fadeInDown faq-link"><span>FAQ</span></Link>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
    );
  }
}
