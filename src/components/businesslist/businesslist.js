import React from 'react';
import './businesslist.scss';
import { Business } from '../business/business';

export class Businesslist extends React.Component {
  render() {
    if (!this.props.businesses[0]){
      return <div className='noresult-container'>
      <p>Seems there is no result.</p>
   
      <p>Have you tried the right location in Auckland?</p> 
    
      <p>Please try again.</p>
             </div>
    }
    return (
      <div className="Businesslist">
  {this.props.businesses.map(element=><Business business={element} key={element.id}/>)}
      </div>
    )
  }
}




