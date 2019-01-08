import React, { Component } from 'react';
import {
  Row,
  Col,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Song extends Component {
    constructor(props) {
      super(props);
      this.state = {
        spotify: "",
      }
    }
    componentDidMount() {
      var spotifyLink = `https://open.spotify.com/track/${this.props.spotify}`;
      this.setState({spotify: spotifyLink});
    }

    render() {
      let req = this.props.requests;
      return (
        <Container className="song font-Roboto mb-2">
          <Row className="h-100">
            <Col xs="7" className="bg-song-primary fg-white w-100 p-0">
              <div className="w-25 h-100 float-left">
                <img src={this.props.img} className="h-100" />
              </div>

              <div className="w-75 h-100 float-right d-flex align-items-center justify-content-left">
                <div className="text-left pl-4">
                  <p className="font-weight-bold m-0">{this.props.title}</p>
                  <p className="text-smaller m-0">{this.props.artist}</p>
                </div>
              </div>
            </Col>

            <Col xs="5" className="bg-song-secondary">
              <Row className="share d-flex justify-content-center align-items-end text-center mx-auto h-50 my-1">
                <span className="fg-spotify glow-hover">
                  <FontAwesomeIcon size="lg" icon={['fab', 'spotify']} />
                </span>
                <span className="fg-youtube glow-hover">
                  <FontAwesomeIcon size="lg" icon={['fab', 'youtube']} />
                </span>
                <span className="fg-fire glow">
                  <FontAwesomeIcon size="lg" icon={'fire'} />
                </span>
                <span className="fg-rate text-glow font-weight-600">
                  {req == 100 ? "💯" : req}
                </span>
              </Row>

              <Row className="w-100 h-50 d-flex justify-content-center align-items-end text-center m-auto">
                <p className="font-Poppins text-tiny text-uppercase font-weight-600 text-spaced">Genre: {this.props.genre}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
};
