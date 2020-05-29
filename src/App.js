import React, { Component } from 'react'; 
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Movie } from './components/Movie'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { data: [] }

  _handleData = (data) => {
    this.setState({ data })
  }

  _renderData() {
    const { data } = this.state

    return data.map(movie => {
      return (
      <Movie 
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
      />
     )
  })
}

  render() {
    return (
      <div className="App">
        <Title>Movie Searcher</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onData={this._handleData}/>
        </div>
        {this.state.data.length === 0
          ? <p>No results</p>
          : this._renderData()
        }
      </div>
    );
  }
}



export default App;
