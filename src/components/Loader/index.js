import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => {
  return (
    <div>
      <img
      style={{width: 75}}
      src={loaderSrc}
      alt="loader" />
    </div>
  )
}

export default Loader;