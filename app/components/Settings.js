// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {
};

export default class Settings extends Component<Props> {
props: Props;

render() {
    return (
    <div class="wrapper">
        <div class="main">
                <section class="full-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="35" height="35" alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                        <div class="intro intro-settings" >
                            <div class="intro-text">
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">Settings</h4>

                                    
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    </div>
    );
}
}
