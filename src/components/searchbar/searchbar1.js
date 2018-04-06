import React from 'react';
import './searchbar.scss';
import image from '../../images/latest.jpg'

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
    this.handleSumbit=this.handleSumbit.bind(this);

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
  
  handleSumbit(event){
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

  
      
      
       
        <div className="SearchBar-sort-options">

        <div className='newtitle'>
          Top 10 Aucland for Kids
          </div>
        <ul>
         {this.renderSortByOptions()}{this.renderSortByOptions()}{this.renderSortByOptions()}

        </ul>
        </div>

        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>

        <div className="SearchBar-submit">
          <a onKeyPress={this.handleSumbit} onClick={this.handleSumbit}>Lets Go</a>
        </div>

      </div>
       )
  }
}

