import React from 'react';

const HeaderImageSet = (props) => {
  if (props.filteredData.length < 1){
    return null;
  }
  const max = props.filteredData.length;
  const images = [];
  for (let i = 0; i <= 5; i++){
    var random = Math.floor(Math.random() * max);
    images.push(<img className="header-image" src={props.filteredData[random].image_link} alt={props.filteredData[random].name} key={i}></img>);
  }
  console.log(images);
  return (
    <section id="header-image-set">
      {images}
    </section>
  );
}

export default HeaderImageSet;
