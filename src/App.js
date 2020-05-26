import React from 'react'; 
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Title>Movie Searcher</Title>
      <div className="SearchForm-wrapper">
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default App;
