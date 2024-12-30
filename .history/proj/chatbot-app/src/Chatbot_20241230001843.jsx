import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

const API_KEY = "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";  // Replace with your actual API key

const systemMessage = {
  "role": "system",
  "content": "You have the knowledge of career guidance and now you provide the entire career guidance path when the user provides you with the keywords of their desired role. Answer correctly and professionally with the correct career path. When asked about ather fields dont provdie response and respond with meaningful message"
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Chatbot component that provides a user interface for interacting with a career guidance assistant.
 * It handles message sending, speech synthesis, and speech recognition functionalities.
 * 
 * State:
 * - `messages`: Array of message objects representing the chat history.
 * - `isTyping`: Boolean indicating if the assistant is currently typing a response.
 * - `isListening`: Boolean indicating if the speech recognition is active.
 * 
 * Effects:
 * - Initializes and controls speech recognition based on `isListening` state.
 * 
 * Functions:
 * - `handleSend`: Sends a message and processes the response from the chatbot API.
 * - `processMessageToChatBOT`: Communicates with the chatbot API to get responses based on user input.
 * - `handleOnClick`: Uses speech synthesis to speak the last message in the chat.
 * - `startListening` and `stopListening`: Control speech recognition.
 * 
 * Returns:
 * A JSX element representing the chat interface with input, message list, and control buttons.
 */

/******  bee11b83-a29b-44ce-a324-a41622983578  *******/
function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am SAHAAYAK! Ask me about your career queries.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening]);

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

  const handleOnClick = () => {
    speak({ text: messages[messages.length - 1].message });
  };

  // Initialize Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    if (event.results[0].isFinal) {
      handleSend(transcript);
      setIsListening(false);
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event);
    setIsListening(false);
  };

  const startListening = () => {
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
  };

  return (
    <div className="App">
      <button className="buttonStyle" onClick={handleOnClick}><FaMicrophone /></button>
      <button className="buttonStyle" onClick={() => setIsListening(prevState => !prevState)}>
        {isListening ? "Stop Listening" : "Speak"}
      </button>
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