import React from 'react';
import TravelEntry from './TravelEntry';
import entries from '../entries';

class Body extends React.Component {
  
  entryElements = entries.map(entry => {
      return <TravelEntry title={entry.title}
                          location={entry.location}
                          googleMapsUrl={entry.googleMapsUrl}
                          startDate={entry.startDate}
                          endDate={entry.endDate}
                          description={entry.description}
                          imageUrl={entry.imageUrl}
      />
  });

  render() { 
    return (
      <div className="container mx-auto px-4 lg:w-3/5 py-8 flex flex-col gap-16">
        {this.entryElements}
      </div>
    );
  }
}
 
export default Body;