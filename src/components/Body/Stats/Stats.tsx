import React, { useEffect, useState } from 'react';

import { stateNums } from '../../../utils/Abbreviations';

export interface StatsProps {
  disease: string;
  state?: string;
  year: string;
}

const Stats: React.FC<StatsProps> = ({ disease, state, year }) => {
  const [population, setPopulation] = useState<number>(0);

  useEffect(() => {
    if (!state) {
      return;
    }
    const url = `http://api.census.gov/data/2010/sf1?key=${process.env.REACT_APP_CENSUS_API_KEY}&get=P0010001,P0080003,P0010001,P0080006,NAME&for=state:${stateNums[state]}`;
    fetch(url).then(res => res.json()).then(res => setPopulation(res[1][0]));
    setPopulation(100);
  }, [disease, state, year]);

  return <p>{`Populaion: ${population}`}</p>;
};

export default Stats;
