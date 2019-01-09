import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  onSearch = e => {
    const { onSearch } = this.props;
    onSearch(e.target.value);
  }

  render() {
    const { searchTerm } = this.props;
    return (
        <div className="input-container my-3">
          <span className="input-bar-icon text-small">
            <FontAwesomeIcon size="lg" icon={'search'} />
          </span>
          <input
            id="search"
            type="text"
            className="input-bar text-uppercase fg-offset bg-black"
            value={searchTerm}
            onChange={this.onSearch}
          />
        </div>
    );
  }
}

export default SearchBar;
