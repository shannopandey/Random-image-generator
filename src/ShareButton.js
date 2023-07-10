import React from "react";
// import { useState } from "react";
import ShareButton from "./ShareButton.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const ShareButtons = () => {
  const shareUrl ="https://picsum.photos/500";
    const title = "Check the Image:";
  const [showSocial, setShowSocial] = React.useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <>
      <button  className="btn" onClick={toggleSocial}>Share</button>
       <br/>
      {showSocial && (
        <>
          <FacebookShareButton className="button-area" url={shareUrl} title={title} >
              <FaFacebook size={32} /> &nbsp;&nbsp;
          </FacebookShareButton>
          <TwitterShareButton className="button-area" url={shareUrl}  title={title} >
          <FaTwitter size={32} />&nbsp;&nbsp;
          </TwitterShareButton>
          <WhatsappShareButton className="button-area" url={shareUrl}  title={title} >
          <FaWhatsapp size={32} />
          </WhatsappShareButton>
        </>
      )}
    </>
  );
};

export default ShareButtons;
