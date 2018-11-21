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
            <div class="searchBox">
            <div class="searchContainer">
                <span class="icon-s"><i class="fas fa-search"></i></span>
                <input
                    type="search" 
                    id="search" 
                    type="text"
                    className="SearchBar"
                    value={ searchTerm }
                    onChange={this.onSearch}
                />
                </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;