import React from 'react';
import './businesslist.scss';
import { Business } from '../business/business';
import { NoResult } from './noresult';

export class Businesslist extends React.Component {
  render() {
    if (!this.props.businesses[0]){
      return <NoResult />
    }
    return (
      <div className="Businesslist">
  {this.props.businesses.map(element=><Business business={element} key={element.id}/>)}
      </div>
    )
  }
}




