import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Load = () => (
  <Dimmer active>
    <Loader size="massive">Loading</Loader>
  </Dimmer>
);

export default Load;
