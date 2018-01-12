import React from 'react';

class SortButton extends React.Component {
  constructor(props){
    super(props);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange(event){
    this.props.onSelect(event.target.value);
  }

  render(){
    return (
      <div id="sort-btn">
        <select onChange={this.handleSortByChange}>
          <option value="">Sort By</option>
          <option value="brand">Brand</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="product_type">Product Type</option>
          <option value="price">Price</option>
        </select>
      </div>
    );
  }
}

export default SortButton;
