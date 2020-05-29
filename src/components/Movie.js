import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Movie extends Component {
  static propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
  }

  render() {
    const { id ,post, title, year } = this.props;

    return (
      <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  </div>
</div>
    )
  }
}




