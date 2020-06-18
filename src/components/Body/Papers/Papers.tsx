import React, { useEffect, useState } from 'react';

import Paper from './Paper';

export interface PapersProps {
  searchTerm: string;
}

const Papers: React.FC<PapersProps> = ({ searchTerm }) => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term=${searchTerm}+AND+free+fulltext[filter]&retmode=json`;
    fetch(url).then(res => res.json()).then(res => setPapers(res.esearchresult.idlist));
  }, [searchTerm, papers]);

  if (papers) {
    return (
      <>
        <h3>Papers</h3>
        {papers.map((id: string, index: number) => <Paper key={index} id={id} />)}
      </>
    );
  }
  return  null;
};

export default Papers;
