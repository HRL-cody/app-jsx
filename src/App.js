import React from 'react';
import MediaCard from './components/MediaCard';
import './style.css';
import './App.css';



function App() {
 const Media = {
    fullName: "Hamouda Mdemagh",
    Bio:
      "i'm hamouda 31 years old musician, now i've just started a new journey to become a web developper this is seems to be though for now but i know that only by working so hard i'll be good at web dev",
      profession:"Mucian"
  };
  return (
    <div className="App">
    
    <div>
      <MediaCard
      fullName={Media.fullName}
      Bio={Media.Bio}
      profession={Media.profession}
      src={Media.imageUrl}
      />
      
      
    </div>
    </div>
  );
}

export default App;
