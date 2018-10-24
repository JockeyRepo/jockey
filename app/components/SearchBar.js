import React, { Component } from 'react';

class SearchBar extends Component {
    onSearch = e => {
        const { onSearch } = this.props;
        onSearch(e.target.value);
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <div>
                <input
                    type="text"
                    className="SearchBar"
                    value={ searchTerm }
                    placeholder="Search..."
                    onChange={this.onSearch}
                />
            </div>
        );
    }
}

export default SearchBar;