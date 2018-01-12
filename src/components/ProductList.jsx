import React from 'react';
import Product from './Product';
import _ from 'lodash';
import FilterByButton from './FilterByButton';
import SortButton from './SortButton';

class ProductList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      displayedProducts: []
    }
    this.handleSelectedFilter = this.handleSelectedFilter.bind(this);
    this.handleSelectedSort = this.handleSelectedSort.bind(this);
  }

  handleSelectedFilter(selectedFilterBy, selectedFilter){
    if (selectedFilterBy !== "all" && selectedFilterBy !== ""){
      const filteredProducts = _.filter(this.props.rawData, { [selectedFilterBy]: selectedFilter });
      this.props.onFilterSelect(filteredProducts);
    } else {
      this.props.onFilterSelect(this.props.rawData);
    }
  }

  handleSelectedSort(sortBy){
    const sortedProducts = _.sortBy(this.state.displayedProducts, sortBy);
    this.props.onSortSelect(sortedProducts);
  }

  render(){
    if (!this.props.filteredData){
      return null;
    }

    const products = this.props.filteredData.map((item, index) => {
      return <Product itemData={item} key={index+1} row={index+1} />
    });
    return (
      <article>
        <section id="product-list-header">
          <h3 id="product-list-heading">Products</h3>
          <div id="sort-filter-selects">
            <FilterByButton
              rawData={this.props.rawData}
              onSelect={this.handleSelectedFilter}
              categories={this.props.categories} />
            <SortButton
              onSelect={this.handleSelectedSort}
              categories={this.props.categories} />
          </div>
        </section>
        <section>
          <table id="product-list-products">
            <thead>
              <tr>
                <th></th>
                <th>Brand</th>
                <th>Name</th>
                <th>Category</th>
                <th>Product Type</th>
                <th>Shades</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products}
            </tbody>
          </table>
        </section>
      </article>
    );
  }

}

export default ProductList;
