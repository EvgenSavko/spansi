import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Equalizer.css';

class Equalizer extends Component {
  state = {
    isPlay: false,
  };

  togglePlay = () => {
    console.log(this.rap.audioEl.play());
    this.setState({ isPlay: !this.state.isPlay });
    this.state.isPlay ? this.rap.audioEl.pause() : this.rap.audioEl.play();
  };

  render() {
    return (
      <div>
        <ReactAudioPlayer
          src={require('../../act/audio/God_Is_An_astronaut_Loss.ogg')}
          // autoPlay
          volume={0.3}
          ref={element => {
            this.rap = element;
          }}
        />
        <div
          className={this.state.isPlay ? 'equalizer' : 'equalizer_off'}
          onClick={this.togglePlay}
        >
          <span className="eq1" />
          <span className="eq2" />
          <span className="eq3" />
          <span className="eq4" />
        </div>
      </div>
    );
  }
}

export default Equalizer;
