import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { term: '' };
  }
  handleInputChange(term) {
    this.props.onSearchTermChange(term);
    this.setState({ term });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          value={this.state.term}
          onChange={e => this.handleInputChange(e.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;
