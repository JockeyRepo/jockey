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

export default class Settings extends Component < Props > {
  props: Props;

  render() {
    return (
      <Container className="bg-black fg-light-gray text-small" fluid={true}>
        <Row className="vh-100 overflow-auto">
          <Row className="w-100">
            <Col xs="12" className="fg-light-gray bg-black">
              <div className="main-logo text-center push-from-top">
                <img src="./assets/images/logo.png" alt="Logo" width="10%" className="main-logo pt-4 justify-content-center" />
              </div>
              <div className="py-3 px-5 text-center">
                <p className="font-weight-600 text-uppercase text-spaced">
                  Settings
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Push notifications
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <input
                type="checkbox"
                className="input-checkbox fg-white bg-checkbox"
              />
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Explicit content
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <input
                type="checkbox"
                className="input-checkbox fg-white bg-checkbox"
              />
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Filtering settings
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <Link to="/testing" className="btn btn-white">Modify</Link> {/*TODO: link to blocked list*/}
            </Col>
          </Row>
          <hr />
          <Row className="w-100">
            <Col xs="12" className="fg-light-gray bg-black">
              <div className="py-3 px-5 text-center">
                <p className="font-weight-600 text-uppercase text-spaced">
                  Linked accounts
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Connect with
              <span className="ml-1 fg-spotify">
                <FontAwesomeIcon size="lg" icon={['fab', 'spotify']} />
              </span>
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Connected<span className="fg-spotify pl-2">@username</span>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Connect with
              <span className="ml-1">
                <i className="fab fa-itunes-note fa-lg fg-apple-music"></i>
              </span>
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <Button className="btn-apple-music">
                Connect
              </Button>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Connect with
              <span className="ml-1 fg-soundcloud">
                <FontAwesomeIcon size="lg" icon={['fab', 'soundcloud']} />
              </span>
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <Button className="btn-soundcloud">
                Connect
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="w-100">
            <Col xs="12" className="fg-light-gray bg-black">
              <div className="py-3 px-5 text-center">
                <p className="font-weight-600 text-uppercase text-spaced">
                  About
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Jockey version
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              1.0.0
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Server status
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center fg-spotify">
              Running
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              Auto updates
            </Col>
            <Col xs="6" className="d-flex align-items-center justify-content-center text-center">
              <input
                type="checkbox"
                className="input-checkbox fg-white bg-checkbox"
              />
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="12" className="d-flex align-items-center justify-content-center text-center">
              <Button className="btn-accent">
                Reset to default settings
              </Button>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Col xs="12" className="d-flex align-items-center justify-content-center text-center">
              <Button className="btn-danger">
                Cancel subscription
              </Button>
            </Col>
          </Row>
          <Row className="w-100 mx-auto py-2">
            <Link to={routes.HOME} className="fg-light-gray text-uppercase mx-auto font-weight-600 wow fadeInDown" id="go-back">
              <span className="text-spaced-accent">
                <span className="mx-2">
                  <FontAwesomeIcon icon={'arrow-left'} />
                </span>
                Main menu
              </span>
            </Link>
          </Row>
          <div className="settings-footer font-weight-600 text-spaced-accent">
            <Link to={routes.FAQ} className="fg-light-gray">FAQ</Link>
          </div>
        </Row>
      </Container>
    );
  }
}
