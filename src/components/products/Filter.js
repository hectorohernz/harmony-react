import React, { Component } from 'react';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterModule:false,
            filterProducts: [],
            clearFilter:false,
            hiphopBtn:false, indieBtn:false, popBtn:false, rockBtn:false, lowBtn:false, highBtn:false // Genre Btn for filter and styles
            ,promptUser:false
        }
        this.showFilter =  this.showFilter.bind(this);
        this.hiddenFilter =  this.hiddenFilter.bind(this);
        this.filterKey = this.filterKey.bind(this);
        this.handleFilter =  this.handleFilter.bind(this);
        this.handleClearFilter =   this.handleClearFilter.bind(this);
        this.filterLowToHigh = this.filterLowToHigh.bind(this);
        this.filterHighToLow = this.filterHighToLow.bind(this);

    }
    handleFilter(){
       if(this.state.clearFilter){
        this.props.filterProduct(this.props.data)
       } else{
        this.props.filterProduct(this.state.filterProducts)
       }
    }

    showFilter(){
        this.setState({filterModule:true});
    }

    hiddenFilter(){
        this.handleFilter();
        this.setState({filterModule:false});
    };

    filterKey(keyword,filterBtn){
        this.setState({ [filterBtn]:true });
        const filtered = this.props.data.filter( el => el.genre === keyword );
        this.setState({filterProducts:this.state.filterProducts.concat(filtered), clearFilter:false});
        console.log(filtered);
    }

    handleClearFilter(){
      this.setState({clearFilter: true, filterProducts:[],hiphopBtn:false, indieBtn:false, popBtn:false, rockBtn:false, lowBtn:false, highBtn:false})
    }

    filterLowToHigh(){
        if(this.state.highBtn){
            alert("Only Choose One Price Filter");
        } else{
                this.setState({lowBtn:true});
            if(this.state.hiphopBtn || this.state.indieBtn || this.state.popBtn || this.state.rockBtn ){
                this.state.filterProducts.sort( (a,b) => a.price - b.price)
            } else{
                this.props.data.sort( (a,b) => 
                    a.price - b.price
                )
            }

        }
    };

    filterHighToLow(){
        if(this.state.lowBtn){
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