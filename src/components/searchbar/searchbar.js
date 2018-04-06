import React from 'react';
import './searchbar.scss';
import {image} from '../../images/ocean.jpg'

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

export class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.handleTermChange=this.handleTermChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleKeyDown=this.handleKeyDown.bind(this);

  }

  handleKeyDown(event){
    console.log(event)
    if(event.keyCode==13){

      this.handleSubmit(event)
    }

  }
 

  handleClassTypeChange(val){
    if (val===this.props.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  handleTermChange(event){
    const newValue=event.target.value;
    this.props.handleTermChange(newValue)
  }

  handleLocationChange(event){
    const newValue=event.target.value;
    this.props.handleLocationChange(newValue);
  }
  
  handleSubmit(event){
    let term=this.props.term;
    let location=this.props.location;
    let sortBy=this.props.sortBy;
    let limit=this.props.limit;
  
    this.props.handleSubmitClick(term,location,sortBy,limit,0);
    event.preventDefault()
  }

  handleSortByClick(newValue) {
    
    this.props.handleSortByClick(newValue);

  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(element=>
   <li key={sortByOptions[element]} 
   className={this.handleClassTypeChange(sortByOptions[element])} 
   onClick={this.handleSortByClick.bind(this,sortByOptions[element])}>{element}</li>)
  }

  

  render() {
    
    return (
      <div className="searchbar">

      <div className='newTitle'> Top 30 for Auckland Kids
      </div>
       
        <div className="SearchBar-sort-options">
        <ul>
         {this.renderSortByOptions()}

        </ul>
        </div>

        <div className="SearchBar-fields">
          <input onKeyDown={this.handleKeyDown} placeholder="Search beach, restaurant, playground ..." onChange={this.handleTermChange}/>
          <input onKeyDown={this.handleKeyDown} placeholder="Where in Auckland?" onChange={this.handleLocationChange}/>
        </div>

        <div className="SearchBar-submit">
          <a onClick={this.handleSubmit}>Lets Go</a>
        </div>

      </div>
       )
  }
}

