import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';


export class Pagination extends Component {

    constructor (props) {
        super(props);
        this.state={
            offset:0
        };
        this.handlePageClick=this.handlePageClick.bind(this);
    }

    handlePageClick(data) {
        let select=data.selected;
        this.setState({
            offset:6*select,
        })
        let term=this.props.term;
        let location=this.props.location;
        let sortBy=this.props.sortBy;
        
        let limit=this.props.limit;
        let offset=this.state.offset;
        this.props.onPageClick(term, location, sortBy, limit, offset)
    }



    render(){

        

        return (
            <ReactPaginate previousLabel={"Previous"}
                       nextLabel={"Next"}
                       breakLabel={<a href="">....</a>}
                       breakClassName={"break-me"}
                       nextClassName={"nextnext"}
                       pageCount={this.props.pageCount}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}                       
                       activeClassName={"active"}
                       initialPage={0}
                       forcePage={1} />   
        )


    }


}



     

