import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../seriesList';
import Loader from '../../components/Loader';

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
      .then(json => this.setState({series: json, isFetching:false}));
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
          <Intro message="You can find all your most loved series..." />
          <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange} />
          {
            !isFetching && series.length === 0 && seriesName.trim() === ''
            && <p>Please enter the series name into the input</p>
          }
          {
            !isFetching && series.length === 0 && seriesName.trim()!== '' 
            && <p>No series found with this name</p>
          }
          {
            isFetching && <Loader />
          }
          {
            !isFetching && <SeriesList list={this.state.series} />
          }
      </div>
    )
  }
}

export default Series;