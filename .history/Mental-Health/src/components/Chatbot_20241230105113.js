


// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import Nav from "./Nav"; // Assuming you have a Nav component

// const Chatbot = () => {
//   // Get the chatbot name from localStorage if it exists, or use an empty string
//   const storedChatbotName = localStorage.getItem("chatbotName");

//   // State to manage the chatbot name and whether it's set
//   const [chatbotName, setChatbotName] = useState(storedChatbotName || "");
//   const [isNameSet, setIsNameSet] = useState(!!storedChatbotName); // If name is stored, it's set

//   // Handle the name submission
//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     // Save the chatbot name in localStorage
//     localStorage.setItem("chatbotName", chatbotName);
//     setIsNameSet(true);
//   };

//   useEffect(() => {
//     // If the chatbot name is already set, update the state accordingly
//     if (storedChatbotName) {
//       setChatbotName(storedChatbotName);
//       setIsNameSet(true);
//     }
//   }, [storedChatbotName]);

//   return (
//     <>
//       {/* Nav Component with Chatbot Name */}
//       <Nav chatbotName={chatbotName} />

//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           backgroundColor: "#f7f7f7", // Light background color for better visibility
//         }}
//       >
//         {/* Chatbot Name Input Form */}
//         {!isNameSet && (
//           <div
//             style={{
//               position: "absolute",
//               top: "80px", // Adjust this value to move the input just below the navbar
//               left: "50%",
//               transform: "translateX(-50%)",
//               backgroundColor: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//               zIndex: 9998, // Ensure this is above the chatbot iframe
//             }}
//           >
//             <h3>Enter Chatbot Name</h3>
//             <form onSubmit={handleNameSubmit}>
//               <input
//                 type="text"
//                 placeholder="Chatbot Name"
//                 value={chatbotName}
//                 onChange={(e) => setChatbotName(e.target.value)}
//                 style={{
//                   padding: "10px",
//                   marginRight: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   fontSize: "16px",
//                   width: "200px",
//                 }}
//                 required
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: "10px 15px",
//                   backgroundColor: "#4CAF50",
//                   color: "white",
//                   borderRadius: "5px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 Set Name
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Chatbot iframe */}
//         {isNameSet && (
//           <div
//             style={{
//               position: "fixed",
//               bottom: "30px",
//               right: "30px",
//               width: "1350px", // Set appropriate size
//               height: "550px", // Set appropriate height
//               borderRadius: "10px",
//               overflow: "hidden",
//               zIndex: 9999, // Make sure this is above other content
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <iframe
//               title="Botpress Webchat"
//               src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
//               width="100%"
//               height="100%"
//               style={{
//                 border: "none",
//                 borderRadius: "10px",
//               }}
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* Back Button */}
//       <Link
//         to="/home"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           left: "20px",
//           backgroundColor: "#FF5733",
//           color: "white",
//           padding: "10px 15px",
//           borderRadius: "30px",
//           textDecoration: "none",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           cursor: "pointer",
//         }}
//       >
//         Back
//       </Link>
//     </>
//   );
// };

// export default Chatbot;



import React, { useState, useEffect ,useRef} from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import '../css/Chatbot.css';

const API_KEY = "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";  // Replace with your actual API key

const systemMessage = {
  "role": "system",
  "content": "Hello! I’m Sahaya, your mental health support assistant. Feel free to ask me anything related to mental health, and I'll do my best to assist you."
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Sahaya",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [inputValue, setInputValue] = useState('');
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
    setInputValue('');
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

    setInputValue(transcript);

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
    <>
    <div className="App">
      <div className="buttonContainer">
      <button style={{ marginRight: '10px' }} onClick={handleOnClick}>
        <FaMicrophone /> Speak
      </button>
      
      <button onClick={() => setIsListening(prevState => !prevState)}>
        {isListening ? "Stop Listening" : "Listen"}
      </button>

      </div>
      <div style={{ marginTop: "30px", height: "400px", width: "600px", alignItems: "center" }}>
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
            <MessageInput 
              placeholder='Type message here' 
              value={inputValue}
              onChange={(val) => setInputValue(val)}
              onSend={handleSend} 
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>

    <Link
        to="/home"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        Back
      </Link>

    </>
  );
}

export default Chatbot;




