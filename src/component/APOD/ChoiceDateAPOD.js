import React, { Component } from 'react';
import { connect } from 'react-redux';

import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import { getAPOD } from './../../actions/apod.js';

class ChoiceDateAPOD extends Component {
  maxDate = new Date();
  minDate = new Date(1996, 1, 1);

  onGetDate(event, date) {
    console.log('date', moment(date).format('YYYY-MM-DD')); //whatever the date the user picked
    let formatDate = moment(date).format('YYYY-MM-DD');
    console.log(formatDate);
    this.props.getAPOD(formatDate);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <DatePicker
            className="dataPickerAPOD"
            hintText="Select date for APOD"
            mode="landscape"
            autoOk={true}
            maxDate={this.maxDate}
            minDate={this.minDate}
            onChange={(e, date) => this.onGetDate(e, date)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  { getAPOD }
)(ChoiceDateAPOD);
