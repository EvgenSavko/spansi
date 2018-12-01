import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Equalizer.css';

class Equalizer extends Component {
  state = {
    isPlay: true,
  };

  togglePlay = () => {
    this.setState({ isPlay: !this.state.isPlay });
    this.state.isPlay ? this.rap.audioEl.pause() : this.rap.audioEl.play();
  };

  render() {
    return (
      <div>
        <ReactAudioPlayer
          // src="https://upload.wikimedia.org/wikipedia/commons/d/db/Gimn_Sovetskogo_Soyuza_%281977_Vocal%29.oga"
          src="./../../act/audio/God_Is_An_astronaut_Loss (online-audio-converter.com).ogg"
          type="audio/ogg"
          autoPlay
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
