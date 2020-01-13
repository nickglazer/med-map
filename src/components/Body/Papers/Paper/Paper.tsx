import React from 'react';

export interface PaperProps {
  id: string;
}

const Paper: React.FC<PaperProps> = ({ id }) => {
  const onClick = () => window.open(`http://www.ncbi.nlm.nih.gov/pmc/articles/PMC${id}`);

  return <p onClick={onClick}>{id}</p>
};

export default Paper;
