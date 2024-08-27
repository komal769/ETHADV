import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AuctionItem() {
  const dispatch = useDispatch();
  const itemName = useSelector((state) => state.itemName);
  const bidAmount = useSelector((state) => state.bidAmount);

  const handleNameChange = (event) => {
    dispatch({ type: 'SET_ITEM_NAME', payload: event.target.value });
  };

  const handleBidChange = (event) => {
    dispatch({ type: 'SET_BID_AMOUNT', payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Item: ${itemName}\nBid Amount: ${bidAmount}`);
  };

  return (
    <div>
      <h2>Auction Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input type="text" value={itemName} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Bid Amount:
            <input type="number" value={bidAmount} onChange={handleBidChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AuctionItem;
