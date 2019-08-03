import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Icon } from 'semantic-ui-react'

import { prevAPOD, nextAPOD } from './../../store/actions/apod'

class ChoiceDateAPOD extends Component {
  onPrevAPOD() {
    this.props.prevAPOD()
  }

  onNextAPOD() {
    this.props.nextAPOD()
  }

  disabled() {
    const { apod } = this.props
    if (apod.length === 1) return true
    else return false
  }

  render() {
    return (
      <div className="row_btn_controle_APOD">
        <Button animated className="btn_controle_APOD" disabled={this.disabled()} onClick={() => this.onPrevAPOD()}>
          <Button.Content visible>Prev</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button animated className="btn_controle_APOD" disabled={this.disabled()} onClick={() => this.onNextAPOD()}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        <label className="label_controle_APOD">switch date chronology</label>
      </div>
    )
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  { prevAPOD, nextAPOD }
)(ChoiceDateAPOD)
