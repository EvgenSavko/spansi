import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MdPlaylistAdd } from 'react-icons/md';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button, Icon } from 'semantic-ui-react';
import moment from 'moment';

import { getAPOD, prevAPOD, nextAPOD } from './../../store/actions/apod';

class ChoiceDateAPOD extends Component {
  maxDate = new Date();
  minDate = new Date(1996, 1, 1);

  onGetDate(event, date) {
    console.log('date', moment(date).format('YYYY-MM-DD')); //whatever the date the user picked
    let formatDate = moment(date).format('YYYY-MM-DD');
    console.log(formatDate);
    this.props.getAPOD(formatDate);
  }

  onPrevAPOD() {
    this.props.prevAPOD();
  }

  onNextAPOD() {
    this.props.nextAPOD();
  }

  getHistoryDate() {
    const { date } = this.props.apod[0];
    if (this.props.apod.length > 1) return moment(date)._d;
    else return null;
  }

  disabled() {
    const { apod } = this.props;
    if (apod.length === 1) return true;
    else return false;
  }

  render() {
    return (
      <div className="controleChoiceDate">
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
        <div className="row_btn_controle_APOD">
          <Button
            animated
            className="btn_controle_APOD"
            disabled={this.disabled()}
            onClick={() => this.onPrevAPOD()}
          >
            <Button.Content visible>Prev</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
          <Button
            animated
            className="btn_controle_APOD"
            disabled={this.disabled()}
            onClick={() => this.onNextAPOD()}
          >
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <label className="label_controle_APOD">switch date chronology</label>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  { getAPOD, prevAPOD, nextAPOD }
)(ChoiceDateAPOD);
