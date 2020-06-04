import React, { Component } from 'react';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterModule:false, // Keep track if the filter button has been clicked on
            filterProducts: [], // Array for filtered products
            clearFilter:false, // Keep track if the clear filter has been activated 
            hiphopBtn:false, indieBtn:false, popBtn:false, rockBtn:false, lowBtn:false, highBtn:false // Genre Btn for filter and styles
        }
        this.showFilter =  this.showFilter.bind(this); // 
        this.hiddenFilter =  this.hiddenFilter.bind(this);
        this.filterKey = this.filterKey.bind(this);
        this.handleFilter =  this.handleFilter.bind(this);
        this.handleClearFilter =   this.handleClearFilter.bind(this);
        this.filterLowToHigh = this.filterLowToHigh.bind(this);
        this.filterHighToLow = this.filterHighToLow.bind(this);

    }

    handleFilter(){
         // handles reseting initial by sending all data back
       if(this.state.clearFilter){
        this.props.filterProduct(this.props.data)
       } else{
        this.props.filterProduct(this.state.filterProducts)
       }
    }

    showFilter(){ // activates the display of the filter 
        this.setState({filterModule:true});
    }

    hiddenFilter(){  // Onclick of the done button the data will get sent to the products page if filter and change th state to close
        this.handleFilter();
        this.setState({filterModule:false});
    };

    filterKey(keyword,filterBtn){ 
        // keyword is the used to define the type of genre 
        // filterBtn is the state of button that has been actived which will change the style 
        this.setState({ [filterBtn]:true }); // Once set to true the button will add a black style 
        const filtered = this.props.data.filter( el => el.genre === keyword ); // creates a new array from data. For objects which contain the keyword
        this.setState({filterProducts:this.state.filterProducts.concat(filtered), clearFilter:false}); // Concat with the function is making it multipe purpose for future arrays  
    }

    handleClearFilter(){
      this.setState({clearFilter: true, filterProducts:[],hiphopBtn:false, indieBtn:false, popBtn:false, rockBtn:false, lowBtn:false, highBtn:false}) // Hanles the clear filter which styles back to normal.
    }

    filterLowToHigh(){
        if(this.state.highBtn){ // Only allowing one filter to be 
            alert("Only Choose One Price Filter");
        } else{
                this.setState({lowBtn:true}); // Chnanges the button state to true 

            if(this.state.hiphopBtn || this.state.indieBtn || this.state.popBtn || this.state.rockBtn ){ // Chnanges the button state to true 
                this.state.filterProducts.sort( (a,b) => a.price - b.price)
            } else{
                this.props.data.sort( (a,b) => 
                    a.price - b.price
                )
            }

        }
    };

    filterHighToLow(){
        if(this.state.lowBtn){ // Only allowing one filter to be  Checking if the low-high filter is active 
            alert("Only Choose One Price Filter");
        } else{
            this.setState({highBtn:true});
            if(this.state.hiphopBtn || this.state.indieBtn || this.state.popBtn || this.state.rockBtn ){
                this.state.filterProducts.sort( (a,b) => b.price - a.price ) 
            } else{
                this.props.data.sort( (a,b) => 
                    b.price - a.price 
                )
            }  

        }
    };
    
    render() {
        return (
            <aside className="products-filter">
                <h1>Shop Products</h1>

                <div className="filter-btn">
                    <button onClick={this.showFilter} className='products-filter-btn'>Filter and Sort</button>
                </div>

                <div className={this.state.filterModule ? 'fitler-based-genre' : 'fitler-none'}>
                   <div className="filter-con">
                        <h2>Sort By</h2>
                        <div className="genre-form">
                            <input type="button"   onClick={(() =>  this.filterKey('hip hop', "hiphopBtn"))} value="Hip Hop" className={this.state.hiphopBtn ? 'active-filter-btn' :  'not-active-btn'}/>
                            <input type="button"   onClick={(() =>  this.filterKey('indie', 'indieBtn'))}    value="Indie"   className={ this.state.indieBtn ? 'active-filter-btn' : 'not-active-btn'}/>
                            <input type="button"   onClick={(() =>  this.filterKey('pop','popBtn'))}         value="Pop"     className={ this.state.popBtn ? 'active-filter-btn' : 'not-active-btn'}/>
                            <input type="button"   onClick={(() =>  this.filterKey('rock','rockBtn'))}       value="Rock"    className={ this.state.rockBtn ? 'active-filter-btn' : 'not-active-btn'}/>
                            <input type="button"   onClick={(() => this.filterLowToHigh() )}                 value="Low - High" className={ this.state.lowBtn ? 'active-filter-btn' : 'not-active-btn'} />
                            <input type="button"   onClick={(() => this.filterHighToLow() )}                 value="High - Low" className={ this.state.highBtn ? 'active-filter-btn' : 'not-active-btn'}/>
                        </div>
                   </div>

                   <div className="filter__exit__container">
                       <button className="filter__exit__btn" onClick={this.handleClearFilter}>Clear Filter</button>
                       <button className="filter__done__btn" onClick={this.hiddenFilter}>Done</button>
                    </div>


                </div>
            </aside>
        )
    }
}