import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { songs } from './data.json';
import Song from './Song';

class Search extends Component {
    state = {
        totalReqs: 0,
        searchTerm: ""
    };

    onSearch = searchTerm => {
        this.setState({ searchTerm: searchTerm });
    };

    render() {
        const { searchTerm } = this.state;

        return (
            <div>
                <SearchBar searchTerm={searchTerm} onSearch={this.onSearch} />
                {songs
                    .sort((a,b) => b.requests-a.requests)
                    .filter(song => 
                        `${song.title} ${song.artist}`.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, i) => <Song key={i} title={item.title} artist={item.artist} genre={item.genre} img={item.img} spotify={item.spotify}
                        requests={item.requests}/>)
                }
            </div>
        );
    }
}

export default Search;