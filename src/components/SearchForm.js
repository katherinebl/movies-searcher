import React, { Component } from 'react'

export class SearchForm extends Component {
  state =  {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.inputMovie);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div class="field has-addons">
          <div class="control">
            <input 
              class="input" 
              type="text" 
              placeholder="Search for a movie..."
              onChange={this._handleChange}
            />
          </div>
          <div class="control">
            <a class="button is-info">
              Search
            </a>
          </div>
        </div>
      </form>
      
    )
  }
}