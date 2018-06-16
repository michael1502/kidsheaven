import React, { Component } from 'react';


import './index.scss';

import { Businesslist } from '../components/businesslist/businesslist.js';
import { Yelp } from '../utils/yelp';
import { initialList } from '../components/initialrenderinglist';
import { Loading } from '../components/Loading/loading';
import { Footer } from '../components/footer/footer';
import { BackToTop } from '../components/backtotop/backtotop';
import Img from 'gatsby-image';
import { SearchBar } from '../components/searchbar/searchbar'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: initialList,
      businesses2: [],

      term: 'beach',
      location: 'Auckland',
      sortBy: "best_match",
      limit: 30,
      error: '',
      loading: false,

    };
    this.handleApi = this.handleApi.bind(this);
    this.handleSortByClick = this.handleSortByClick.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this)
  }


  handleTermChange(termInput) {
    const newTerm = `kids ${termInput}`
    this.setState({
      term: newTerm,
    })
  }

  handleLocationChange(locationInput) {
    const newLocation = 'auckland ${locationInput}'
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
    }), this.handleApi(term, location, sortBy, limit, 0)
  }

  handleApi(term, location, sortBy, limit, offset) {
    this.setState({
      loading: true,
    })

    try {
      Yelp.search(term, location, sortBy, limit, offset).then(
        (businessInfo) => {
         
          if (!businessInfo.businesses) {
            this.setState({
              error: "err",
              loading: false,
            })
          }

          this.setState({
            businesses: businessInfo.businesses.filter((business) => business.imageSrc !== ''),

            loading: false,

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
      <div className="App">

        <h1>kidsheaven</h1>
        <div style={{ position: 'relative' }}>
          <SearchBar
            handleSubmitClick={this.handleApi}
            limit={this.state.limit}
            term={this.state.term}
            location={this.state.location}
            sortBy={this.state.sortBy}
            handleSortByClick={this.handleSortByClick}
            handleLocationChange={this.handleLocationChange}
            handleTermChange={this.handleTermChange} />
          <div className='responsive'>
            <Img
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: '-1',
          
              }}
              imgStyle={{
                objectFit: 'cover',
                objectPosition: '0 0',

              }}
              sizes={this.props.data.desktop.sizes} />
          </div>
          <div className='responsive1'>
            <Img
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: '-1',
          
              }}
              imgStyle={{
                objectFit: 'cover',
                objectPosition: '0 0',

              }}
              sizes={this.props.data.mobile.sizes} />
          </div>
        </div>

        {this.state.loading ? <Loading /> : <Businesslist businesses={this.state.businesses} />}
        <Footer />
        <BackToTop />
      </div>
    );
  }
}

export default App;


export const query = graphql`

query heroimage {
  desktop: imageSharp (id: {regex:"/heronew/"}){
    sizes (maxWidth: 1500 quality:100) {
      ...GatsbyImageSharpSizes
    }
  }
  mobile: imageSharp (id: {regex:"/heromobile/"}){
    sizes ( quality:100) {
      ...GatsbyImageSharpSizes
    }
  }
}
`

