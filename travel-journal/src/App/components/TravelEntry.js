import React from 'react';
import { IoLocation } from 'react-icons/io5';

class TravelEntry extends React.Component {
  render() { 
    return (
      <div className="flex gap-6 items-center">
        <img src={this.props.imageUrl} alt={this.props.title} 
              className="rounded-xl drop-shadow-xl flex-none object-cover
                        h-56 w-24
                        sm:w-36
                        md:w-42"
        />

        <div className="flex flex-col flex-1 gap-1">
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <IoLocation className="text-red-500"/>
              <p className="tracking-[0.2em] uppercase">{this.props.location}</p>
            </div>

            <a href={this.props.googleMapsUrl} className="text-slate-800 underline">
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