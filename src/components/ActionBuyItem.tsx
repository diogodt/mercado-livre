import React from 'react';
import '../assets/styles/ActionBuyItem.scss';

interface Props {
  condition: string;
  sold_quantity: number;
  title: string;
  amount: number;
  decimals: number;
}

const ActionBuyItem = React.forwardRef<HTMLDivElement, Props>(({ condition, sold_quantity, title, amount, decimals }, ref) => {
  const formattedAmount = amount.toLocaleString('en-US'); 
  const formattedDecimals = decimals.toString().padStart(2, '0'); 

  return (
    <div className="action-buy-container" ref={ref}>
      <span className="condition-sold">{condition} - {sold_quantity} vendidos</span>
      <h2 className="product-title">{title}</h2>
      <span className="price">$ {formattedAmount} 
        <span className="decimals">{formattedDecimals}</span>
      </span>
      <button className="buy-btn">Comprar</button>
    </div>
  );
});

export default ActionBuyItem;