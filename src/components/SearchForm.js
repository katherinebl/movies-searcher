import React, { Component } from 'react'

const API_KEY = 'a0bcf344';

export class SearchForm extends Component {
  state =  {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const {inputMovie} = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Search for a movie..."
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <a className="button is-info">
              Search
            </a>
          </div>
        </div>
      </form>
      
    )
  }
}