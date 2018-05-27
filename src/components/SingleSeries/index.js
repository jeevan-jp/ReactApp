import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Loader from '../Loader';

class SingleSeries extends Component {

  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;

    return (
        <div>
          { show === null && <Loader /> }
          {
            show !== null &&
            <div>
              <p>{show.name}</p>
              <p>Premiered - {show.premiered}</p>
              <p>Average rating - {show.rating.average || 'Unrated'}</p>
              <p>Episodes - {show._embedded.episodes.length}</p>
              <p>
                <img alt="Show" src={show.image.medium} />
              </p>
            </div>
          }
          Single series - ID { this.props.match.params.id }
          <br/>
          <Link to={`/`}>
            <strong>Home</strong>
          </Link>
        </div>
    )
  }
}

export default SingleSeries;