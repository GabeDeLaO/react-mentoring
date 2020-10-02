import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './Main';
import axios from 'axios';

const MainState = {
  name: '',
  email: 'blah',
  potholes: [],
}

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {...MainState};
  }

  componentDidMount() {

    axios.get('https://data.austintexas.gov/resource/fmm2-ytyt.json').then(potholes => potholes.data).then((data) => {
      this.setState({ ...this.state, potholes: data, name: 'API'});
    }).catch((error) => console.log('error', error));
  }

  render() {
    return <Main 
      name={this.state.name}
      email={this.state.email} 
      potholes={this.state.potholes}
    />
  }
}

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
}

export default Layout;
