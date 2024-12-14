import React, { useEffect } from 'react';
import Nav from './Nav.js';

const Chatbot = () => {
  useEffect(() => {
    // Load the Toastify and Botpress script dynamically
    const toastifyScript = document.createElement('script');
    toastifyScript.src = "https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js";
    toastifyScript.async = true;
    document.body.appendChild(toastifyScript);

    const botpressScript = document.createElement('script');
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    // Set up the botpress event listeners
    botpressScript.onload = () => {
      window.botpress.on('*', (event) => {
        // Toastify({ text: `Event: ${event.type}` }).showToast();
      });

      // window.botpress.on('webchat:ready', (conversationId) => {
      //   Toastify({ text: 'Webchat Ready' }).showToast();
      // });

      // window.botpress.on('webchat:opened', (conversationId) => {
      //   Toastify({ text: 'Webchat Opened' }).showToast();
      // });

      // window.botpress.on('webchat:closed', (conversationId) => {
      //   Toastify({ text: 'Webchat Closed' }).showToast();
      // });

      // window.botpress.on('conversation', (conversationId) => {
      //   Toastify({ text: `Conversation: ${conversationId}` }).showToast();
      // });

      // window.botpress.on('message', (message) => {
      //   Toastify({ text: `Message Received: ${message.id}` }).showToast();
      // });

      // window.botpress.on('messageSent', (message) => {
      //   Toastify({ text: `Message Sent: ${message}` }).showToast();
      // });

      // window.botpress.on('error', (error) => {
      //   Toastify({ text: `Error: ${error}` }).showToast();
      // });

      // window.botpress.on('webchatVisibility', (visibility) => {
      //   Toastify({ text: `Visibility: ${visibility}` }).showToast();
      // });

      // window.botpress.on('webchatConfig', () => {
      //   Toastify({ text: 'Webchat Config' }).showToast();
      // });

      // window.botpress.on('customEvent', () => {
      //   Toastify({ text: 'Received a custom event' }).showToast();
      // });
    };

    // Load the Botpress config script
    const botpressConfigScript = document.createElement('script');
    botpressConfigScript.src = "https://mediafiles.botpress.cloud/26a83f89-ace1-4045-92ba-95b836f75669/webchat/v2/config.js";
    botpressConfigScript.async = true;
    document.body.appendChild(botpressConfigScript);

    return () => {
      document.body.removeChild(toastifyScript);
      document.body.removeChild(botpressScript);
      document.body.removeChild(botpressConfigScript);
    };
  }, []);

  return (
    <>
      <Nav />
      {/* <h1>Helpful Chatbot</h1> */}
      <div className="chatbot-container">
        {/* The Botpress widget will appear here */}
      </div>
    </>
  );
};

export default Chatbot;
