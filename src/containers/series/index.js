import React, { Component } from 'react';
import SeriesList from '../seriesList';

class Series extends Component {
  state = {
      series: []
  }

  componentDidMount() {
  fetch('https://api.tvmaze.com/search/shows?q=Vikings')
    .then(res => res.json())
    .then(json => this.setState({ series: json}));
  }

  render() {
    return (
      <div>
          Length of series array: { this.state.series.length }
          <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;