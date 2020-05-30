import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Movie } from './Movie'

export class MovieList extends Component {
  static propTypes = {
    movies : PropTypes.array
  }

  render() {
    const { movies } = this.props

    return movies.map(movie => {
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
}