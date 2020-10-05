import React from 'react';
import image from './img1.jpg';
import './style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">HAMOUDA MDEMAGH</h1>
          <br />
          <img src= {image} alt="hamouda"/>
          <br />
          <img src="/alhambra-4p-1.jpg" alt='guitar' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
