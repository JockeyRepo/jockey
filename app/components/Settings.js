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
                <div className="settings-content my-3">

                  <div className="row">
                    <div className="col-sm-6 setting-item">
                      <p className="wow fadeInDown" data-wow-delay="0.6s">Push notifications</p>
                    </div>
                    <div className="col-sm-6 setting-item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6 setting-item">
                      <p className="wow fadeInDown" data-wow-delay="0.6s">Explicit content</p>
                    </div>
                    <div className="col-sm-6 setting-item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-sm-6 setting-item">
                      <p class="wow fadeInDown" data-wow-delay="0.6s">
                        Connect with <i class="fab fa-spotify spotify-i spotify px-1"></i>
                      </p>
                    </div>
                    <div class="col-sm-6 setting-item">
                      <button class="btn-spotify wow fadeInDown" data-wow-delay="0.6s">
                        Connect
                      </button>
                    </div>
                  </div>


                  <div className="row">
                    <div class="col-sm-12 setting-item">
                      <button class="btn-contact wow fadeInDown" data-wow-delay="0.6s">
                        Reset to default settings
                      </button>
                    </div>
                  </div>

                  <div className="row m-b-lg">
                    <div class="col-sm-12 setting-item">
                      <button class="btn-danger my-4 wow fadeInDown" data-wow-delay="0.6s">
                        Delete your account
                      </button>
                    </div>
                  </div>

                  <hr className="settings-hr" />

                  <div className="row">
                    <div class="col-sm-6 setting-item">
                      <p class="wow fadeInDown" data-wow-delay="0.6s">
                        Jockey version
                      </p>
                    </div>
                    <div class="col-sm-6 setting-item">
                      <p>1.0.0</p>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-6 setting-item">
                      <p className="wow fadeInDown" data-wow-delay="0.6s">Auto update</p>
                    </div>
                    <div className="col-sm-6 setting-item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        />
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-sm-6 setting-item">
                      <p class="wow fadeInDown" data-wow-delay="0.6s">
                        Server status
                      </p>
                    </div>
                    <div class="col-sm-6 setting-item">
                      <p className="spotify">Running</p>
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
