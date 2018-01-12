import React from 'react';
import HeaderImageSet from '../components/HeaderImageSet';
import ProductList from '../components/ProductList';

class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
      // const emergencyUrl = "http://192.168.111.52:3000/";
      // const localURL = "http://127.0.0.1:5000/api.json";
      url: "http://127.0.0.1:5000/api.json",
      products: [],
      displayedProducts: []
    }
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleSortSelect = this.handleSortSelect.bind(this);
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.state.url);
    xhr.addEventListener("load", () => {
      if (xhr.status === 200){
        const apiData = JSON.parse(xhr.response);
        this.setState({ products: apiData });
        this.setState({ displayedProducts: apiData });
        console.log(apiData);
      }
    });
    xhr.send();
  }

  handleFilterSelect(filteredProducts){
    this.setState({ displayedProducts: filteredProducts });
  }

  handleSortSelect(sortedProducts){
    console.log(sortedProducts);
    this.setState({ displayedProducts: sortedProducts });
  }

  render(){
    return (
      <div>
        <HeaderImageSet filteredData={this.state.displayedProducts} />
        <ProductList
          rawData={this.state.products}
          filteredData={this.state.displayedProducts}
          onFilterSelect={this.handleFilterSelect}
          onSortSelect={this.handleSortSelect} />
      </div>
    );
  }
}

export default ProductContainer;
