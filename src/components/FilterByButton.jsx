import React from 'react';

class FilterByButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: [],
      filterSelect: "",
      selectedFilterBy: "",
      selectedFilter: ""
    }
    this.handleFilterByChange = this.handleFilterByChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterByChange(event){
    this.setState({ selectedFilterBy: event.target.value });
    if (event.target.value === "all"){
      this.props.onSelect(event.target.value, "");
    }
  }

  handleFilterChange(event){
    this.setState({ selectedFilter: event.target.value });
    this.props.onSelect(this.state.selectedFilterBy, event.target.value);
  }

  getFilterOptions(){
    const filters = [];
    for (let item of this.props.rawData){
      const itemFilter = item[this.state.selectedFilterBy];
      if ((!filters.includes(itemFilter)) && (itemFilter !== null) && (itemFilter !== undefined)){
        filters.push(itemFilter);
      }
    }
    filters.sort();
    const options = filters.map((item, index) => {
      return <option key={index} value={item}>{this.capitalise(item)}</option>;
    });
    options.unshift(<option key={options.length}> </option>);
    return options;
  }

  capitalise(str){
    if (str !== undefined){
      const arr = str.split("");
      arr[0] = arr[0].toUpperCase();
      return arr.join("");
    }
  }

  render(){
    const filterOptions = this.getFilterOptions();
    var filterSelect = null;

    if (this.state.selectedFilterBy !== ""){
      filterSelect = <select onChange={this.handleFilterChange}>{filterOptions}</select>
    }
    return (
      <div id="filter-by-select">
        <select onChange={this.handleFilterByChange}>
          <option value="">Filter By</option>
          <option value="all">View All</option>
          <option value="brand">Brand</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="product_type">Product Type</option>
        </select>
        {filterSelect}
      </div>
    );
  }

}

export default FilterByButton;
