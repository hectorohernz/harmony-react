import React, { Component } from 'react';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'All',
            filterModule:false
        }
        this.showFilter =  this.showFilter.bind(this);
        this.hiddenFilter =  this.hiddenFilter.bind(this);

    }
    showFilter(){
        this.setState({filterModule:true})
    }

    hiddenFilter(){
        this.setState({filterModule:false})
    }

    render() {
        return (
            <aside className="products-filter">
                <h1>Shop {this.state.name} Vinyl Albums</h1>
                <div className="filter-btn">
                    <button onClick={this.showFilter} className='products-filter-btn'>Filter and Sort</button>
                </div>
                <div className={this.state.filterModule ? 'fitler-based-genre' : 'fitler-none'}>
                   <div className="form-container">
                        <h2>Sort By</h2>
                        <div className="genre-form">
                            <input type="button"  value="Hip Hop" className="filter-hiphop-btn"/>
                            <input type="button"  value="Indie" className="filter-indie-btn"/>
                            <input type="button"  value="Pop" className="filter-pop-btn"/>
                            <input type="button"  value="Rock" className="filter-hiphop-btn"/>
                            <input type="button"  value="Low - High" className="filter-low-btn"/>
                            <input type="button"  value="High - Low" className="filter-high-btn"/>
                        </div>
                   </div>

                   <div className="filter__exit__container">
                       <button className="filter__exit__btn">Clear Filter</button>
                       <button className="filter__done__btn" onClick={this.hiddenFilter}>Done</button>
                    </div>


                </div>
            </aside>
        )
    }
}