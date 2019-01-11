// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import {
  Row,
  Col,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

export default class Filter extends Component < Props > {
  props: Props;

  render() {
    return (
      <Container className="bg-black fg-light-gray" fluid={true}>
        <Row className="vh-100">
          <Col className="fg-light-gray bg-black overflow-auto">
            <div className="main-logo text-center push-from-top">
              <img src="./assets/images/logo.png" alt="Logo" width="10%" className="main-logo pt-4 justify-content-center" />
            </div>
            <div className="py-3 px-5 text-small text-center">
            <p>test</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
