


import React, { useState, useEffect ,useRef} from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Link } from "react-router-dom";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import Nav from "./Nav"; 
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import '../css/Chatbot.css';

const API_KEY = "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";  // Replace with your actual API key

const systemMessage = {
  "role": "system",
  "content": "Hello! I’m Sahaya, your mental health support assistant. Feel free to ask me anything related to mental health, and I'll do my best to assist you! and if asked about other topics please reply Formally and politely I am here to assist about Mental health Issues"
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Sahaya! Ask me about mental health.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { speak } = useSpeechSynthesis();
  const storedChatbotName = localStorage.getItem("chatbotName");
  const [chatbotName, setChatbotName] = useState(storedChatbotName || "");
  const [isNameSet, setIsNameSet] = useState(!!storedChatbotName); // If name is stored, it's set

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening]);

  useEffect(() => {
      // If the chatbot name is already set, update the state accordingly
      if (storedChatbotName) {
        setChatbotName(storedChatbotName);
        setIsNameSet(true);
      }
    }, [storedChatbotName]);

  
  const handleNameSubmit = (e) => {
    e.preventDefault();
    // Save the chatbot name in localStorage
    localStorage.setItem("chatbotName", chatbotName);
    setIsNameSet(true);
  };

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
      <Nav chatbotName={chatbotName} />
    <div className="App">
      <div className="buttonContainer">
      <button style={{ marginRight: '1px' }} onClick={handleOnClick}>
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




// import React, { useState, useEffect } from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { Link } from "react-router-dom";
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
// import Nav from "./Nav"; 
// import { FaMicrophone } from 'react-icons/fa';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import '../css/Chatbot.css';
// import { useNavigate } from "react-router-dom";

// const API_KEY = "";  // Replace with your actual API key

// const systemMessage = {
//   "role": "system",
//   "content": "Hello! I’m Sahaya, your mental health support assistant. Feel free to ask me anything related to mental health, and I'll do my best to assist you! and if asked about other topics please reply Formally and politely I am here to assist about Mental health Issues."
// };

// function Chatbot() {
//   const storedChatbotName = localStorage.getItem("chatbotName");
//   const [chatbotName, setChatbotName] = useState(storedChatbotName || "");
//   const [isNameSet, setIsNameSet] = useState(!!storedChatbotName);
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([
//     {
//       message: `Hello! This is Your New Buddy ${chatbotName || ""}, I am Excited to listen to you `,
//       sentTime: "just now",
//       sender: chatbotName || "Assistant"
//     }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const { speak } = useSpeechSynthesis();

//   useEffect(() => {
//     if (storedChatbotName) {
//       setChatbotName(storedChatbotName);
//       setIsNameSet(true);
//     }
//   }, [storedChatbotName]);

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("chatbotName", chatbotName);
//     setIsNameSet(true);
//     setMessages(prevMessages => [
//       ...prevMessages,
//       {
//         message: `Hello! I am ${chatbotName}. How can I assist you today?`,
//         sentTime: "just now",
//         sender: chatbotName
//       }
//     ]);
//   };

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };

//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setInputValue('');
//     setIsTyping(true);

//     await processMessageToChatBOT(newMessages);
//   };

//   const processMessageToChatBOT = async (chatMessages) => {
//     const apiMessages = chatMessages.map((messageObject) => {
//       let role = messageObject.sender === chatbotName ? "assistant" : "user";
//       return { role: role, content: messageObject.message };
//     });

//     const apiRequestBody = {
//       "model": "llama3-8b-8192",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     };

//     try {
//       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(apiRequestBody)
//       });

//       const data = await response.json();

//       if (data?.choices?.[0]?.message?.content) {
//         setMessages([
//           ...chatMessages,
//           {
//             message: data.choices[0].message.content,
//             sender: chatbotName
//           }
//         ]);
//       }
//       setIsTyping(false);
//     } catch (error) {
//       console.error("Error processing message:", error);
//       setIsTyping(false);
//     }
//   };

//   return (
//     <>
//       <Nav chatbotName={chatbotName} />
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           backgroundColor: "#f7f7f7",
//         }}
//       >
//         {!isNameSet && (
//           <div
//             style={{
//               position: "absolute",
//               top: "80px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               backgroundColor: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//               zIndex: 9998,
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

//         <div style={{ marginTop: "150px", marginBottom:"50px",height: "500px", width: "1300px", alignSelf: "center" }}>
//           <MainContainer>
//             <ChatContainer>
//               <MessageList
//                 scrollBehavior="smooth"
//                 typingIndicator={isTyping ? <TypingIndicator content={`${chatbotName || "Assistant"} is typing`} /> : null}
//               >
//                 {messages.map((message, i) => (
//                   <Message key={i} model={{ message: message.message, sentTime: message.sentTime, sender: message.sender }} />
//                 ))}
//               </MessageList>
//               <MessageInput
//                 placeholder='Type message here'
//                 value={inputValue}
//                 onChange={(val) => setInputValue(val)}
//                 onSend={handleSend}
//               />
//             </ChatContainer>
//           </MainContainer>
//         </div>
//       </div>

//     <button
//       onClick={() => navigate(-1)} // Navigate to the previous route
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         left: "20px",
//         backgroundColor: "#FF5733",
//         color: "white",
//         padding: "10px 15px",
//         borderRadius: "30px",
//         textDecoration: "none",
//         fontSize: "1rem",
//         fontWeight: "bold",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         border: "none",
//         cursor: "pointer",
//       }}
//     >
//       Back
//     </button>
//     </>
//   );
// }

// export default Chatbot;






// import { FaVolumeUp } from 'react-icons/fa';
// import React, { useState, useEffect } from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { Link } from "react-router-dom";
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
// import Nav from "./Nav"; 
// import { FaMicrophone } from 'react-icons/fa';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import '../css/Chatbot.css';
// import { useNavigate } from "react-router-dom";
// // import { FaMicrophone } from 'react-icons/fa';
// const API_KEY = "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";  // Replace with your actual API key

// const systemMessage = {
//   "role": "system",
//   "content": "Hello! I’m Sahaya, your mental health support assistant. Feel free to ask me anything related to mental health, and I'll do my best to assist you! and if asked about other topics please reply Formally and politely I am here to assist about Mental health Issues."
// };

// function Chatbot() {
//   const storedChatbotName = localStorage.getItem("chatbotName");
//   const [chatbotName, setChatbotName] = useState(storedChatbotName || "");
//   const [isNameSet, setIsNameSet] = useState(!!storedChatbotName);
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([
//     {
//       message: `Hello! This is Your New Buddy ${chatbotName || ""}, I am Excited to listen to you `,
//       sentTime: "just now",
//       sender: chatbotName || "Assistant"
//     }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const { speak } = useSpeechSynthesis();

//   useEffect(() => {
//     if (storedChatbotName) {
//       setChatbotName(storedChatbotName);
//       setIsNameSet(true);
//     }
//   }, [storedChatbotName]);

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("chatbotName", chatbotName);
//     setIsNameSet(true);
//     setMessages(prevMessages => [
//       ...prevMessages,
//       {
//         message: `Hello! I am ${chatbotName}. How can I assist you today?`,
//         sentTime: "just now",
//         sender: chatbotName
//       }
//     ]);
//   };

//   const handleOnClick = () => {
//         speak({ text: messages[messages.length - 1].message });
//       };

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };

//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setInputValue('');
//     setIsTyping(true);

//     await processMessageToChatBOT(newMessages);
//   };

//   const processMessageToChatBOT = async (chatMessages) => {
//     const apiMessages = chatMessages.map((messageObject) => {
//       let role = messageObject.sender === chatbotName ? "assistant" : "user";
//       return { role: role, content: messageObject.message };
//     });

//     const apiRequestBody = {
//       "model": "llama3-8b-8192",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     };

//     try {
//       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(apiRequestBody)
//       });

//       const data = await response.json();

//       if (data?.choices?.[0]?.message?.content) {
//         setMessages([
//           ...chatMessages,
//           {
//             message: data.choices[0].message.content,
//             sender: chatbotName
//           }
//         ]);
//       }
//       setIsTyping(false);
//     } catch (error) {
//       console.error("Error processing message:", error);
//       setIsTyping(false);
//     }
//   };

//   return (
//     <>
//     <Nav chatbotName={chatbotName} />

//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#f7f7f7",
//         position: "relative", // Ensures child absolute elements are positioned within this container
//       }}
//     >
//       <button
//         style={{
//           position: "absolute", // Positions the button at the top of the chat container
//           top: "10px",
//           right: "20px",
//           display: "flex",
//           alignItems: "center",
//           marginRight: "10px",
//           backgroundColor: "#007BFF",
//           color: "white",
//           padding: "10px 15px",
//           borderRadius: "30px",
//           fontWeight: "bold",
//           border: "none",
//           cursor: "pointer",
//         }}
//         onClick={handleOnClick}
//       >
//         <FaVolumeUp style={{ marginRight: "5px" }} /> Speak
//       </button>

//       {!isNameSet && (
//         <div
//           style={{
//             position: "absolute",
//             top: "80px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//             zIndex: 9998,
//           }}
//         >
//           <h3>Enter Chatbot Name</h3>
//           <form onSubmit={handleNameSubmit}>
//             <input
//               type="text"
//               placeholder="Chatbot Name"
//               value={chatbotName}
//               onChange={(e) => setChatbotName(e.target.value)}
//               style={{
//                 padding: "10px",
//                 marginRight: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 fontSize: "16px",
//                 width: "200px",
//               }}
//               required
//             />
//             <button
//               type="submit"
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 borderRadius: "5px",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               Set Name
//             </button>
//           </form>
//         </div>
//       )}

//       <div style={{ marginTop: "150px", marginBottom: "50px", height: "500px", width: "1300px", alignSelf: "center" }}>
//         <MainContainer>
//           <ChatContainer>
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={isTyping ? <TypingIndicator content={`${chatbotName || "Assistant"} is typing`} /> : null}
//             >
//               {messages.map((message, i) => (
//                 <Message
//                   key={i}
//                   model={{
//                     message: message.message,
//                     sentTime: message.sentTime,
//                     sender: message.sender,
//                     direction: message.sender === "user" ? "outgoing" : "incoming", // Determines the side
//                   }}
//                 />
//               ))}
//             </MessageList>
//             <MessageInput
//               placeholder="Type message here"
//               value={inputValue}
//               onChange={(val) => setInputValue(val)}
//               onSend={handleSend}
//             />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>

//     <button
//       onClick={() => navigate(-1)} // Navigate to the previous route
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         left: "20px",
//         backgroundColor: "#FF5733",
//         color: "white",
//         padding: "10px 15px",
//         borderRadius: "30px",
//         textDecoration: "none",
//         fontSize: "1rem",
//         fontWeight: "bold",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         border: "none",
//         cursor: "pointer",
//       }}
//     >
//       Back
//     </button>
//   </>
// );

//     // <>
//     //   <Nav chatbotName={chatbotName} />

//     //   {/* <button style={{ marginRight: '10px' }} onClick={handleOnClick}>
//     //       <FaMicrophone /> Speak
//     //     </button> */}
//     //   <button style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }} onClick= {handleOnClick}>
//     //     <FaVolumeUp style={{ marginRight: '5px' }} /> Speak
//     //   </button>

//     //   <div
//     //     style={{
//     //       width: "100vw",
//     //       height: "100vh",
//     //       display: "flex",
//     //       flexDirection: "column",
//     //       backgroundColor: "#f7f7f7",
//     //     }}
//     //   >
//     //     {!isNameSet && (
//     //       <div
//     //         style={{
//     //           position: "absolute",
//     //           top: "80px",
//     //           left: "50%",
//     //           transform: "translateX(-50%)",
//     //           backgroundColor: "#fff",
//     //           padding: "20px",
//     //           borderRadius: "10px",
//     //           boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//     //           zIndex: 9998,
//     //         }}
//     //       >
//     //         <h3>Enter Chatbot Name</h3>
//     //         <form onSubmit={handleNameSubmit}>
//     //           <input
//     //             type="text"
//     //             placeholder="Chatbot Name"
//     //             value={chatbotName}
//     //             onChange={(e) => setChatbotName(e.target.value)}
//     //             style={{
//     //               padding: "10px",
//     //               marginRight: "10px",
//     //               borderRadius: "5px",
//     //               border: "1px solid #ccc",
//     //               fontSize: "16px",
//     //               width: "200px",
//     //             }}
//     //             required
//     //           />
//     //           <button
//     //             type="submit"
//     //             style={{
//     //               padding: "10px 15px",
//     //               backgroundColor: "#4CAF50",
//     //               color: "white",
//     //               borderRadius: "5px",
//     //               border: "none",
//     //               cursor: "pointer",
//     //             }}
//     //           >
//     //             Set Name
//     //           </button>
//     //         </form>
//     //       </div>
//     //     )}

//     //     <div style={{ marginTop: "150px", marginBottom:"50px",height: "500px", width: "1300px", alignSelf: "center" }}>
//     //       <MainContainer>
//     //         <ChatContainer>
//     //           <MessageList
//     //             scrollBehavior="smooth"
//     //             typingIndicator={isTyping ? <TypingIndicator content={`${chatbotName || "Assistant"} is typing`} /> : null}
//     //           >
//     //             {messages.map((message, i) => (
//     //               <Message
//     //                 key={i}
//     //                 model={{
//     //                   message: message.message,
//     //                   sentTime: message.sentTime,
//     //                   sender: message.sender,
//     //                   direction: message.sender === "user" ? "outgoing" : "incoming"  // Determines the side
//     //                 }}
//     //               />
//     //             ))}
//     //           </MessageList>
//     //           <MessageInput
//     //             placeholder='Type message here'
//     //             value={inputValue}
//     //             onChange={(val) => setInputValue(val)}
//     //             onSend={handleSend}
//     //           />
//     //         </ChatContainer>
//     //       </MainContainer>
//     //     </div>
//     //   </div>

//     //   <button
//     //     onClick={() => navigate(-1)} // Navigate to the previous route
//     //     style={{
//     //       position: "fixed",
//     //       bottom: "20px",
//     //       left: "20px",
//     //       backgroundColor: "#FF5733",
//     //       color: "white",
//     //       padding: "10px 15px",
//     //       borderRadius: "30px",
//     //       textDecoration: "none",
//     //       fontSize: "1rem",
//     //       fontWeight: "bold",
//     //       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     //       border: "none",
//     //       cursor: "pointer",
//     //     }}
//     //   >
//     //     Back
//     //   </button>
//     // </>
//   // );
// }

// export default Chatbot;

