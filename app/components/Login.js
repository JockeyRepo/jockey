// @flow
import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom';
import {
	Row,
	Col,
	Container,
	Button
} from 'reactstrap';
import {
	FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import routes from '../constants/routes';

type Props = {};

export default class Login extends Component < Props > {
	props: Props;

	render() {
		return (
			<Container fluid>
        <Row className="vh-100">
          <Col xs="6" className="fg-light-gray bg-black">
						<div className="main-logo text-center push-from-top">
              Jockey
            </div>
            <div className="py-5 px-5 text-small text-center">
              <p className="font-weight-600 text-uppercase text-spaced">
                What is Jockey?
              </p>
              <p>
                A super amazing tool to seamlessly request music to any event!
              </p>
              <p>
                To get started login or sign up for an account!
              </p>
              <p>
                You won't be disappointed 🙏
              </p>
              <Row>
                <span className="fg-twitter mx-auto glow-hover">
                  <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
                </span>
              </Row>
            </div>
          </Col>
          <Col xs="6" className="fg-light-gray bg-dark-gray">
            <div className="text-center push-from-top mx-4">
              <h4 className="font-weight-600 text-uppercase text-small text-spaced">Login</h4>
              <form>
                <Row className="pb-4">
                  <label htmlFor="email" className="d-block text-left text-smaller text-uppercase my-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="input-line font-Roboto text-smaller line-height-tall pl-3 py-0 fg-light-gray"
                  />
                </Row>
                <Row className="pb-4">
                  <label htmlFor="password" className="d-block text-left text-smaller text-uppercase my-1">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input-line text-smaller line-height-tall pl-3 py-0 fg-light-gray"
                  />
                <label className="w-100 text-right text-tiny text-uppercase py-1">Forgot your password?</label>
                </Row>
                <Link to={routes.HOME} className="btn btn-accent mx-auto">Login</Link>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
		);
	}
}
