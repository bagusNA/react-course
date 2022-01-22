import React from 'react';
import { GrLocation } from 'react-icons/gr';

class TravelEntry extends React.Component {
  render() { 
    return (
      <div className="flex gap-6 items-center">
        <div>
          <img src={this.props.imageUrl} alt={this.props.title} 
               className="rounded-lg shadow-lg h-64 md:h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <GrLocation className="text-red-600"/>
              <p>{this.props.location}</p>
            </div>
            <a href={this.props.mapsUrl} className="text-slate-800 underline">
              View on Google Maps
            </a>
          </div>

          <h2 className="font-bold text-3xl pb-4">{this.props.title}</h2>
          <p className="font-bold">{this.props.startDate} - {this.props.endDate}</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
 
export default TravelEntry;