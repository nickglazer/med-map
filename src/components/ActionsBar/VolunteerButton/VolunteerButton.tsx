import React from 'react';

export interface VolunteerButtonProps {
  searchTerm: string;
  location: string;
}

const VolunteerButton: React.FC<VolunteerButtonProps> = ({ location, searchTerm }) => {
  const onClick = () => {
    window.open(`https://www.volunteermatch.org/search/?l=${location}%2C+USA&k=${searchTerm.toLowerCase()}&searchOpps=`, "_blank");
    window.open(`https://createthegood.aarp.org/volunteer-search.html?keywords=${searchTerm.toLowerCase()}&search_radius=25&showup_page=0&anytime=on`, "_blank");
  }
  return <button onClick={onClick}>Volunteer!</button>
};

export default VolunteerButton;
