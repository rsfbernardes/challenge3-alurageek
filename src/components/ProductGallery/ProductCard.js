import React from 'react';

import StarWars from '../../assets/images/star-wars.png';

function ProductCard() {
  return (
    <>
      <>
        <img src={StarWars} alt="" />
        <h4>Produto XYZ</h4>
        <p>R$60,00</p>
        <a href="#" target='_blank'>Ver Produto</a>
      </>
    </>
  )
}

export default ProductCard;