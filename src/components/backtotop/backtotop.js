import React from 'react';
import './backtotop.scss';

export class BackToTop extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            scrollValue:0,

        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleToTop = this.handleToTop.bind(this)
    }


  
    handleToTop(){
        window.scrollTo(0,0)
       
    }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };
      
      handleScroll() {

        this.setState({
            scrollValue:document.body.scrollTop || document.documentElement.scrollTop
        })
        
      };
   

    render(){
        return (
<div className='backtotop-container'>
            <div onClick={this.handleToTop} className={this.state.scrollValue>40?"myBtn":"displaynone"} title="Go to top">Top</div>
        </div>
        )
    }

}

