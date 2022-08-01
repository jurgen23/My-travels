import React from "react";

export default function Card(props) {
  return (
    <div>
      <img src={props.element.imageUrl} className="card--image" alt="" />
      <div className="card--header">
        <img className="location--icon" src="/images/location-icon.png" />
        <h3 className="card--country">{props.element.location}</h3>
        <a
          href={props.element.googleMapsUrl}
          className="card--google"
          target="_blank"
        >
          View in Google Maps
        </a>
      </div>
      <div className="card--body">
        <h1 className="card--title">{props.element.title}</h1>
        <h3 className="card--dates">
          {props.element.startDate} - {props.element.endDate}
        </h3>
        <p className="card--description">{props.element.description}</p>
      </div>
    </div>
  );
}
