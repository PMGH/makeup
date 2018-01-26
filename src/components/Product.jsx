import React from 'react';

const Product = (props) => {
  const item = props.itemData;
  const additionalClass = props.row % 2 === 0 ? " grey-row" : "";
  const colours = item.product_colors.map((colour, index) => {
    return <div className="product-shade" style={{ backgroundColor: colour.hex_value }} key={index}></div>
  });
  return (
    <tr className={`product-table-item${additionalClass}`}>

      <td><img className="product-thumbnail" src={item.image_link} alt={`${item.brand} ${item.name}`}></img></td>

      <td><a className="brand_website_link" href={item.website_link} target="_blank">{capitalise(item.brand)}</a></td>

      <td><a className="product_website_link" href={item.product_link} target="_blank">{capitalise(item.name)}</a></td>

      <td>{capitalise(item.category)}</td>

      <td>{capitalise(item.product_type)}</td>

      <td><div className="product-shades-container">{colours}</div></td>

      <td className="product-price">{item.price_sign}{item.price}</td>
    </tr>
  );
}

const capitalise = (str) => {
  if (str !== null){
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  }
}

export default Product;
