import React, { Component } from 'react'; 
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MovieList } from './components/MovieList'

import { Detail } from './pages/Detail'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { usedSearchBar: false, 
            data: [] 
          }

  _handleData = (data) => {
    this.setState({ data, usedSearchBar: true })
  }

  _renderData () {
    return this.state.data.length === 0
      ? <p>Sorry! <span role="img" aria-label="emoji">😞</span> Results not found!</p>
      : <MovieList movies={this.state.data} />
  }
  render() {
    const url = new URL(document.location);
    const hasID = url.searchParams.has('id');

    if(hasID) {
      return <Detail />
    }
    
    return (
      <div className="App">
        <Title>Movie Searcher</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onData={this._handleData}/>
        </div>
        { (this.state.usedSearchBar)
          ? this._renderData()
          : <small>Use this form to search a movie! <span role="img" aria-label="emoji">⬆️</span> </small>
        }
        
      </div>
    );
  }
}


export default App;
