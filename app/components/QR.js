// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import {
  Row,
  Col,
  Container,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

export default class QR extends Component < Props > {
  props: Props;

  render() {
    return (
      <Container fluid={true}>
        <Row className="vh-100">
          <Col xs="6" className="fg-light-gray bg-black">
            <div className="main-logo text-center push-from-top">
              <img src="./assets/images/logo.png" alt="Logo" className="main-logo w-50 pt-4 justify-content-center" />
            </div>
            <div className="py-5 px-5 text-small text-center">
              <p className="font-weight-600 text-uppercase text-spaced wow fadeInDown">
                Creating a QR Code!
              </p>
              <p>
                It's simple
              </p>
              <p>
                Put the name of your even in the title box and export your custom QR code!
              </p>
              <p>
                Make sure you write down your pin for users, safety firts
              </p>
              <p>
                We'll do everything else. 🤠
              </p>
              <Link to={routes.HOME} className="btn btn-accent">HOME</Link>
            </div>
          </Col>
          <Col xs="6" className="fg-light-gray bg-dark-gray">
            <div className="text-center push-from-top">
              <p className="font-weight-600 text-uppercase text-small text-spaced">Enter the name of your event!</p>
              <div>
                <div className="input-container my-3">
                  <span className="input-bar-icon text-small">
                    <FontAwesomeIcon size="lg" icon={'calendar-day'} />
                  </span>
                  <input
                    id="search"
                    type="text"
                    className="input-bar fg-offset bg-black"
                    placeholder="Event name..."
                  />
                </div>
              </div>
              <Row>
                <img id="qrimg" className="mx-auto mt-2" src="https://orig00.deviantart.net/c5f0/f/2015/066/1/9/qr_code_animated__by_junguler-d8kqfbf.gif" width="250px" height="250px" />
                <Col className="col-sm-12 my-4">
                  <Button className="btn-accent" onClick="createParty()">Submit</Button>
                </Col>
              </Row>
              <Row>
                <div className="d-flex justify-content-center align-items-end text-center mx-auto h-50 my-1">
                  <span className="fg-instagram glow-hover mx-3">
                    <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                  </span>
                  <span className="fg-facebook glow-hover mx-3">
                    <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                  </span>
                  <span className="fg-twitter glow-hover mx-3">
                    <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
                  </span>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
