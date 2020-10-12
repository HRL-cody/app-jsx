import React from 'react';
import MediaCard from './components/MediaCard';

import './style.css';
import './App.css';



function App() {
  let Media = {
    title: "Hamouda Mdemagh",
    body:
      "i know that only by workin so hard i'll be good at web dev",
    
  };
  return (
    <div className="App">
      
    <div>
      <MediaCard
      title={Media.title}
      body={Media.body}
      src={Media.imageUrl}
      />
      
      
    </div>
    </div>
  );
}

export default App;
