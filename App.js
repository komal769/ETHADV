import React from 'react';
import './App.css';
import AuctionItem from './AuctionItem';  // Import the AuctionItem component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Auction App!</h1>
        <AuctionItem />
      </header>
    </div>
  );
}

export default App;
