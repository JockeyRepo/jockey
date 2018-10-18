// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {
};

export default class Login extends Component<Props> {
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
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">What is Jockey?</h4>
                                <p class="wow fadeInDown" data-wow-delay="0.6s"> a super amazing tool to seamlessly request music to any event!
                                </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">To get started Login or make an account! </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">You won't be disappointed 🙏
                                    <br class="visible-lg"/> </p>
                                        <ul>
                                        <div class="row">
                                        
          <li class="twitter"><i class="fa fa-twitter twitter-i" ></i></li>


          </div>
          </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="right-section">
                    <div class="intro-right intro">
                        <div class="intro-text">
                            <h4 class="wow fadeInDown" data-wow-delay="0.4s">Login</h4>
                            <div class="wow" data-wow-delay=" 0.6s">
                                <div class="panel-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="username">username</label>
                                            <input id="username" type="text" class="form-control" />
                                            <label for="password">password</label>
                                            <input id="password" type="password" class="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                    <Link to={routes.HOME} className="btn-contact wow fadeInDown" data-wow-delay="0.6s"> Login </Link>
                                        <button type="button" onclick="createParty()" class="btn-contact wow fadeInDown" data-wow-delay=".6s">Submit</button>
                                    </div>
                                    <br/><br/>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
    );
}
}
