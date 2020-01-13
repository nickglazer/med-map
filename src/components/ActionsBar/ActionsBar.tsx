import React from 'react';

import VolunteerButton from './VolunteerButton';

import './ActionsBar.css';

const ActionsBar: React.FC = () => (
  <header>
    <div>
      <h1>MedMap</h1>
      <VolunteerButton location={'fl'} searchTerm={'cancer'} />
    </div>
  </header>
);

export default ActionsBar;