import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

const API_KEY = "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";  // Replace with your actual API key

const systemMessage = {
  "role": "system",
  "content": "You have the knowledge of career guidance and now you provide the entire career guidance path when the user provides you with the keywords of their desired role. Answer correctly and professionally with the correct career path. When asked about ather fields dont provdie response and respond with meaningful messsage"
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am SAHAAYAK! Ask me about your career queries.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatBOT(newMessages);
  };

  const processMessageToChatBOT = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "LEGALASSISTANT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "llama3-8b-8192",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {  // Adjusted endpoint
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();

      if (data && data.choices && data.choices.length > 0 && data.choices[0].message) {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "LEGALASSISTANT"
        }]);
      } else {
        console.error("Unexpected response format:", data);
      }
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  };

  const { speak } = useSpeechSynthesis();
  const handleOnClick = () => {
    speak({ text: messages[messages.length - 1].message });
  };

  return (
    <div className="App">
      <button className="buttonStyle" onClick={handleOnClick}><FaMicrophone /></button>
      <div style={{ height: "450px", width: "500px", alignItems: "center" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={{ message: message.message, sentTime: message.sentTime, sender: message.sender }} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chatbot;