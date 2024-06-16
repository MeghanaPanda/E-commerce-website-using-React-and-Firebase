import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    // Create the first script element
    const embeddedChatbotConfigScript = document.createElement('script');
    embeddedChatbotConfigScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "kfYur3dDT7XJgsX5cLRgx",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(embeddedChatbotConfigScript);

    // Create the second script element
    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.defer = true;
    document.body.appendChild(chatbaseScript);

    // Clean up scripts when component unmounts
    return () => {
      document.body.removeChild(embeddedChatbotConfigScript);
      document.body.removeChild(chatbaseScript);
    };
  }, []);

  return (
    <div>
      {/* Chatbot placeholder if needed */}
    </div>
  );
}

export default Chatbot;
