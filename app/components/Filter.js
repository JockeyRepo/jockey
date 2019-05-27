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
	Container
} from 'reactstrap';


export default class Filter extends Component {

	render() {
		return (
			<Container className="bg-black fg-light-gray" fluid>
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
