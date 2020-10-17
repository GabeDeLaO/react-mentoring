import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Typeahead from '../components/Typeahead';
import PotholeList from '../components/PotholeList';
import {connect} from 'react-redux';
import {doFilter} from '../redux/actions';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potholes: [],
      title: 'Title of page',
      isLoading: false,
      searchTerm: '',
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
        <Typeahead 
          potholeSearch={this._searchPotholes} 
        />
        <PotholeList 
          title={this.state.title}
          potholes={this.state.potholes} 
          isLoading={this.state.isLoading}
          searchTerm={this.state.searchTerm}
        />
      
      </div>
    )
  }

  // The following two methods are accomplishing the exact same thing. 
  // The only difference is where we extract the actual search text value from the input field.
  /*_searchPotholes = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log('type', searchTerm);
    this.setState({...this.state, searchTerm: searchTerm }); // {...this.state, } (spread operator javascript)
  }*/
  _searchPotholes = (searchTerm) => {
    /*
    Here we are going to add a redux action function, also more commonly known as an action creator.
    */
    
    /*this.setState({...this.state, searchTerm: searchTerm });*/
    this.props.doFilter('the term');
  }
}

const mapStateToProps = state => {
  const {potholes} = state;
  return { potholes };
}

const mapDispatchToProps = dispatch => ({
  doFilter
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);