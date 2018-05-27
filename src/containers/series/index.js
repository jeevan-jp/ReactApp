import React, { Component } from 'react';
import SeriesList from '../seriesList';

class Series extends Component {
  state = {
      series: []
  }

  onSeriesInputChange = e => {
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({ series: json}));
  }

  render() {
    return (
      <div>
          <p>
            Enter name to search: <br />
            <input type="text" onChange={this.onSeriesInputChange} />
          </p>
          Length of series array: { this.state.series.length }
          <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;