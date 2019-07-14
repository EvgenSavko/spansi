import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MdPlaylistAdd } from 'react-icons/md';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'semantic-ui-react'
import moment from 'moment';

import { getAPOD } from './../../store/actions/apod';

class DataPicker extends Component {
  maxDate = new Date();
  minDate = new Date(1996, 1, 1);
  // selectDate = null;

  onGetDate(event, date) {
    // this.selectDate = date;
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

  // getPrevDay(){
  //   let date = this.selectDate ? this.selectDate : new Date();
  //   this.selectDate =  moment(date).subtract('days', 1);
  //   let formatDate = moment(date).subtract('days', 1).format('YYYY-MM-DD')
  //   this.props.getAPOD(formatDate);
  // }

  // getNextDay(){
  //   let date = this.selectDate ? this.selectDate : new Date();
  //   this.selectDate =  moment(date).subtract('days', 1);
  //   let formatDate = moment(date).subtract('days', 1).format('YYYY-MM-DD')
  //   this.props.getAPOD(formatDate);
  // }

  render() {
    return (
      <div className="datePicker">
        <Button onClick={()=> this.getPrevDay()} size='mini' basic inverted color='blue'>
          {'<'}
        </Button>
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
        <Button onClick={()=> this.getNextDay()} size='mini' basic inverted color='blue'>
          {'>'}
        </Button>
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
