import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { songs } from './data.json';
import Song from './Song';

const throttle = fnc => {
  let running = false;
  return (e, ...args) => {
    if (running) return;
    running = true;
    e.persist && e.persist(); // Due to React event pooling
    requestAnimationFrame(() => {
        fnc(e, ...args);
        running = false;
    });
  };
};


class Search extends Component {
  from = 0;
  overscroll = 400;
  wheelTimeout = null;

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.containerInner = React.createRef();

    this.state = {
      totalReqs: 0,
      searchTerm: "",
      filterNew: true,
      scroll: 0,
      dragging: false
    };
  }

  toggleCheckbox = checked => {
    this.setState({ filterNew: !this.state.filterNew });
    console.log(this.state.filterNew);
  }

  onSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  handleMouseDown = e => {
    console.log(this.from)
    e.preventDefault();
    this.from = e.clientY;
    console.log("start", e.clientY);
    this.setState({ dragging: true });
  }

  scrollBy = delta => {
    this.setState(state => ({
      scroll: Math.max(
        Math.min(state.scroll + delta, 0 + this.overscroll),
        -this.max - this.overscroll
      )
    }));
  };

  scrollToPosition = () => {
    this.setState(state => ({
      dragging: false,
      scroll: Math.max(Math.min(state.scroll, 0), -this.max)
    }));
  };

  handleMouseMove = e => {
    this.max = this.containerInner.current.clientHeight - this.container.current.clientHeight + 140;
    e.preventDefault();
    if (!this.state.dragging) {
      return;
    }

    console.log("move", e.clientY, "moved by", e.clientY - this.from);
    console.log(`this.max: ${this.max}`)
    console.log(`this.containerInner.current.clientHeight: ${this.containerInner.current.clientHeight}`)
    console.log(`this.container.current.clientHeight: ${this.container.current.clientHeight}`)
    const movedBy = e.clientY - this.from;
    this.from = e.clientY;
    this.scrollBy(movedBy);
    };

    handleMouseMoveThrottled = throttle(this.handleMouseMove);

    handleMouseUp = e => {
      e.preventDefault();
      this.scrollToPosition();
    };

    handleMouseUpThrottled = throttle(this.handleMouseUp);

    onScroll = e => {
      e.preventDefault();
      clearTimeout(this.wheelTimeout);
      console.log("touchpad scroll", e.deltaY);
      this.scrollBy(-e.deltaY);
      this.wheelTimeout = setTimeout(() => this.scrollToPosition(), 50);
    };

    onScrollThrottled = throttle(this.onScroll);

    componentDidMount() {
      this.max = this.containerInner.current.clientHeight - this.container.current.clientHeight + 140;
      document.addEventListener(
        "mousemove",
        this.handleMouseMoveThrottled,
        false
      );

      document.addEventListener("mouseup", this.handleMouseUp, false);
      document.addEventListener("mouseleave", this.handleMouseUp, false);
    }

    render() {
      const style = {
        transform: `translateY(${this.state.scroll}px)`
      };
      const { searchTerm } = this.state;
      const className = this.state.dragging ? "container__inner--dragging" : "";

      return (
        <div className="App"ref={this.container}>
          <SearchBar searchTerm={searchTerm} onSearch={this.onSearch} />
            <input
              type="checkbox"
              className="form-checkbox"
              id="filterNew"
              onClick={this.toggleCheckbox}
              checked={this.state.filterNew}
            />
            <label for="filterNew">Sort by Most Recent</label>
          <div className="container">
            <div
              className={`container__inner ${className}`}
              onMouseDown={this.handleMouseDown}
              onWheel={this.onScrollThrottled}
              style={style}
              ref={this.containerInner}
            >
            {
              this.state.filterNew ?
              songs.sort((a,b) => new Date(a.time) - new Date(b.time)).filter(song => `${song.title} ${song.artist} ${song.genre}`.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((item, i) => <Song key={i} title={item.title} artist={item.artist} genre={item.genre} img={item.img} spotify={item.spotify} requests={item.requests}/>)
              : songs.sort((a,b) => b.requests-a.requests).filter(song => `${song.title} ${song.artist} ${song.genre}`.toLowerCase().includes(searchTerm.toLowerCase()) )
              .map((item, i) => <Song key={i} title={item.title} artist={item.artist} genre={item.genre} img={item.img} spotify={item.spotify} requests={item.requests}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
