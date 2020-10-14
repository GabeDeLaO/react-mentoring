import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Typeahead from '../components/Typeahead';
import PotholeList from '../components/PotholeList';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potholes: [],
      title: 'Title of page',
      isLoading: false,
    }
  }

  componentDidMount() {

    let DataCall = new Promise( (res, rej) => {
      this.setState({isLoading: true});

      axios.get(
        'https://data.austintexas.gov/resource/fmm2-ytyt.json'
      ).then(potholes => potholes.data).then((data) => {
        res(data);
      }).catch((error) => console.log('error', error));
    });

    DataCall.then( (potholes) => {
      this.setState({
        ...this.state, //spread operator (copies the object)
        potholes: potholes,
        isLoading: false,
      });
    });
  }

  render() {
    return(
      <div>
        <Typeahead />
        <PotholeList 
          title={this.state.title}
          potholes={this.state.potholes} 
          isLoading={this.state.isLoading}
        />
      </div>
    )
  }
}

export default MainContainer;