import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const PlaceholderImage = () => (
  <Dimmer active>
    <Loader size="massive">Loading</Loader>
  </Dimmer>
);

export default PlaceholderImage;
