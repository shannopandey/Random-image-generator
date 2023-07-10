import React, { useState, useEffect } from 'react';
// import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import ShareButton from './ShareButton';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch a random image from an API
    fetch('https://picsum.photos/500')
      .then(response => response.url)
      .then(url => setImageUrl(url));
  }, []);

  return (
    <div className="App">
      <h1>Random Image</h1>
      {imageUrl && (
        <div className="main-area">
          <ul>
          <li> <img  class="img" src={imageUrl} alt="Random" style={{ width: '300px', height: 'auto' }} />
          </li>  
         <li>   <ShareButton/></li>
          </ul>
       </div>
        
      )}
    </div>
    
  );
}

export default App;