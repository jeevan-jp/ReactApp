import React, { Component } from 'react';
import SeriesList from '../seriesList';

class Series extends Component {
  state = {
      series: [],
      seriesName: '',
      isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true})
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => res.json())
      .then(json => {this.setState({ series: json, isFetching:false}); console.log(json)});
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
          <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange} />
          {
            series.length === 0 && seriesName.trim() === ''
            && <p>Please enter the series name into the input</p>
          }
          {
            series.length === 0 && seriesName.trim()!== '' 
            && <p>No series found with this name</p>
          }
          {
            isFetching && <p>Loading...</p>
          }
          {
            !isFetching && <SeriesList list={this.state.series} />
          }
      </div>
    )
  }
}

export default Series;