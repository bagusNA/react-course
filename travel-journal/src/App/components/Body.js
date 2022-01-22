import React from 'react';
import TravelEntry from './TravelEntry';
import entries from '../entries';

class Body extends React.Component {
  entryElements = entries.map(entry => {
      return <TravelEntry title={entry.title}
                          location={entry.location}
                          mapsUrl={entry.googleMapsUrl}
                          startDate={entry.startDate}
                          endDate={entry.endDate}
                          description={entry.description}
                          imageUrl={entry.imageUrl}
      />
  });

  render() { 
    return (
      <div className="container mx-auto px-4 md:px-3 py-8 flex flex-col">
        {this.entryElements}
      </div>
    );
  }
}
 
export default Body;