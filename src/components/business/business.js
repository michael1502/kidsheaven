import React from 'react';
import './business.scss';



export class Business extends React.Component {
    render() {
      return (
        <div className="Business">
          <div className="image-container">
            <a target="_blank" href={this.props.business.url}><img src={this.props.business.imageUrl} alt="image" /></a>
          </div>
          <h2>{this.props.business.name}</h2>
          <div className="Business-information">
            <div className="Business-address"><a  target="_blank" href={`https://maps.google.com/?q=${this.props.business.address}`} target="_blank">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.state + " " + this.props.business.zipCode}</p>
              </a>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.business.category.toUpperCase()}</h3>
              <h3>{this.props.business.rating + " stars"}</h3>
              <p>{this.props.business.reviewCount + " reviews"}</p>
            </div>
          </div>
        </div>

      )
    }
}


