import React, { Component } from 'react'; 
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MovieList } from './components/MovieList'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { data: [] }

  _handleData = (data) => {
    this.setState({ data })
    console.log(data);
    
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
          : <MovieList movies={this.state.data} />
        }
      </div>
    );
  }
}


export default App;
