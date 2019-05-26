import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MdPlaylistAdd } from 'react-icons/md';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import { getAPOD } from './../../store/actions/apod';

class DataPicker extends Component {
  maxDate = new Date();
  minDate = new Date(1996, 1, 1);

  onGetDate(event, date) {
    console.log('date', moment(date).format('YYYY-MM-DD')); //whatever the date the user picked
    let formatDate = moment(date).format('YYYY-MM-DD');
    console.log(formatDate);
    this.props.getAPOD(formatDate);
  }

  getHistoryDate() {
    const { date } = this.props.apod[0];
    if (this.props.apod.length > 1) return moment(date)._d;
    else return null;
  }

  render() {
    return (
      <div className="datePicker">
        <MuiThemeProvider>
          <DatePicker
            className="dataPickerAPOD"
            hintText="Select date APOD"
            mode="landscape"
            autoOk={true}
            maxDate={this.maxDate}
            minDate={this.minDate}
            value={this.getHistoryDate()}
            onChange={(e, date) => this.onGetDate(e, date)}
          />
        </MuiThemeProvider>
        <MdPlaylistAdd size="1.5rem" className="add_icon" />
      </div>
    );
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  { getAPOD }
)(DataPicker);
