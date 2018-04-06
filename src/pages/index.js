import React, { Component } from 'react';


import './index.scss';
import { SearchBar } from '../components/searchbar/searchbar'
import { Businesslist } from '../components/businesslist/businesslist.js';
import { Yelp } from '../utils/yelp';
import  { initialList } from '../components/initialrenderinglist';
import {Loading} from '../components/Loading/loading';
import { Footer } from '../components/footer/footer';
import { BackToTop } from '../components/backtotop/backtotop'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: initialList,
      businesses2:[],

      term: 'beach',
      location: 'Auckland',
      sortBy: "best_match",
      limit: 30,
      error: '',
      loading:false,

    };
    this.handleApi = this.handleApi.bind(this);
    this.handleSortByClick = this.handleSortByClick.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this)
  }


  handleTermChange(termInput) {
    const newTerm=`kids ${termInput}`
    this.setState({
      term: newTerm,
    })
  }

  handleLocationChange(locationInput) {
    const newLocation='auckland ${locationInput}'
    this.setState({
      location: newLocation
    })
  }

  handleSortByClick(clickedSortBy) {
    let term = this.state.term;
    let location = this.state.location;
    let sortBy = this.state.sortBy;
    let limit = this.state.limit;
    this.setState({
      sortBy: clickedSortBy,
    }),this.handleApi(term, location, sortBy, limit, 0)
  }

  handleApi(term, location, sortBy, limit, offset) {
 this.setState({
   loading:true,
 })

    try {
      Yelp.search(term, location, sortBy, limit, offset).then(
        (businessInfo) => {
          console.log(businessInfo)
          if (!businessInfo.businesses) {
            this.setState({
              error: "err",
              loading:false,
            })
          }

            this.setState({
              businesses: businessInfo.businesses.filter((business)=>business.imageSrc!==''),
              
              loading:false,

            })
       
          
        }
      )
    }
    catch (err) {
      this.setState({
        error: err
      })

    }

  }


  render() {
    return (
      <div className="App" >
    
        <h1>kidsheaven</h1>
        <SearchBar handleSubmitClick={this.handleApi}
          limit={this.state.limit}
          term={this.state.term}
          location={this.state.location}
          sortBy={this.state.sortBy}
          handleSortByClick={this.handleSortByClick}
          handleLocationChange={this.handleLocationChange}
          handleTermChange={this.handleTermChange}
        />

       {this.state.loading?<Loading />:<Businesslist businesses={this.state.businesses}/>}
<Footer />
<BackToTop />
      </div>
    );
  }
}

export default App;
